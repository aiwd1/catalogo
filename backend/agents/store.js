import 'dotenv/config';
import { createAgent } from 'langchain';
import anthropicModel from '../models/anthropic.js';
import searchProducts from '../tools/searchProducts.js';
import getCheapestProducts from '../tools/getCheapestProducts.js';

const agent = createAgent({
    model: anthropicModel,
    tools: [
        searchProducts,
        getCheapestProducts,
    ],
    systemPrompt: `Sei l'assistente del negozio My Store. Rispondi in italiano.
Per qualsiasi domanda sui prodotti usa il tool search_products.
Per i prodotti più economici usa get_cheapest_products.
Non inventare prodotti: se il tool non trova nulla, dillo.`
});

export default agent;