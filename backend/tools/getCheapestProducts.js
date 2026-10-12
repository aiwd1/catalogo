import { tool } from "langchain";
import { z } from 'zod';
import { client } from "../prisma-client.js";

const getCheapestProductsSchema = z.object({
    query: z.string().describe('Il nome del tipo del prodotto di cui voglio cercare il minor prezzo. se non specificato metti stringa vuota')
});

// Il mio tool deve sempre restituire una stringa
async function getCheapestProductsFunction({ query }) {
    console.log(`Faccio una query (${query}) per i prodotti più economici su Prisma`);

    const prismaParams = {
        orderBy: {
            price: "asc"
        },
        select: {
            id: true, name: true, descrizione: true, price: true
        },
        take: 10
    };

    if (query !== undefined && query.trim() !== '') {
        prismaParams.where = {
            name: {
                contains: query
            }
        };
    }

    const products = await client.product.findMany(prismaParams);

    if (products.length === 0) {
        return 'Nessun prodotto presente';
    }

    return JSON.stringify(products);
}

const getCheapestProducts = tool(getCheapestProductsFunction, {
    name: 'get_cheapest_products',
    description: 'Ottiene i prodotti più econimici dello store. Restituisce al massimo 10 prodotti. Ogni prodotto è identificato da id, nome, descrizione e prezzo',
    schema: getCheapestProductsSchema
});

export default getCheapestProducts;