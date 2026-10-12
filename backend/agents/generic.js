import 'dotenv/config';
import { createAgent } from 'langchain';
import anthropicModel from '../models/anthropic.js';

const agent = createAgent({
    model: anthropicModel,
    tools: [],
    systemPrompt: "Sei un assistente disponibile e sintetico"
});

export default agent;