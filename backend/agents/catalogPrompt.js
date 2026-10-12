import 'dotenv/config';
import { createAgent } from 'langchain';
import anthropicModel from '../models/anthropic.js';
import { client } from '../prisma-client.js';

const products = await client.product.findMany({
    select: {
        id: true,
        name: true,
        descrizione: true,
        price: true
    },
    orderBy: {
        id: 'asc'
    }
});

// 1 | Mouse | 20.89 | Descrizione del mouse
const productStrings = products.map((product => {
    return `${product.id} | ${product.name} | ${product.price} | ${product.descrizione}`;
}));

const productStringsJoined = productStrings.join("\n");

const agent = createAgent({
    model: anthropicModel,
    tools: [],
    systemPrompt: `
Sei l'assistente del negozio My Store. Rispondi in italiano.
Usa SOLO i prodotti del catalogo qui sotto. Se un prodotto non c'è, dillo.

CATALOGO (id | nome | prezzo | descrizione):
${productStringsJoined}
    `
});

export default agent;