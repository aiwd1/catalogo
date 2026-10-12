import 'dotenv/config';
import { createAgent } from 'langchain';
import anthropicModel from '../models/anthropic.js';
import { client } from '../prisma-client.js';

// I prodotti cambiano: l'agente viene creato a ogni richiesta, così il catalogo nel prompt è aggiornato
export default async function createCatalogPromptAgent() {
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

    // 1 | Mouse | 20.89 € | Descrizione del mouse
    const catalog = products
        .map((p) => `${p.id} | ${p.name} | ${p.price} € | ${p.descrizione}`)
        .join('\n');

    return createAgent({
        model: anthropicModel,
        tools: [],
        systemPrompt: `Sei l'assistente del negozio My Store. Rispondi in italiano.
Usa SOLO i prodotti del catalogo qui sotto. Se un prodotto non c'è, dillo.

CATALOGO (id | nome | prezzo | descrizione):
${catalog}`
    });
}
