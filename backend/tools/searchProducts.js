import { tool } from "langchain";
import { z } from 'zod';
import { client } from "../prisma-client.js";

const searchProductsSchema = z.object({
    query: z.string().min(2).describe('Testo da cercare nel nome o nelle descrizione dei prodotti')
});

// Il mio tool deve sempre restituire una stringa
async function searchProductsFunction({ query }) {
    console.log(`Faccio una query per ${query} su Prisma`);
    const products = await client.product.findMany({
        where: {
            OR: [
                { // Prima condizione
                    name: {
                        contains: query
                    }
                },
                { // Seconda condizione
                    descrizione: {
                        contains: query
                    }
                }
            ]
        },
        select: {
            id: true, name: true, descrizione: true, price: true
        },
        take: 10
    });

    if (products.length === 0) {
        return 'Nessun prodotto trovato';
    }

    return JSON.stringify(products);
}

const searchProducts = tool(searchProductsFunction, {
    name: 'search_products',
    description: 'Cerca prodotti del negozio per testo, nel nome e nella descrizione. Restituisce al massimo 10 prodotti. Ogni prodotto è identificato da id, nome, descrizione e prezzo',
    schema: searchProductsSchema
});

export default searchProducts;