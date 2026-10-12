import { Router } from "express";
//import proxyAgent from '../agents/proxy.js';
//import createCatalogPromptAgent from '../agents/catalogPrompt.js';
import storeAgent from '../agents/store.js';
import { HumanMessage, AIMessage } from "langchain";

const router = Router();

const MAX_MESSAGES = 20;
const MAX_CONTENT = 2000;

// messages: da 1 a 20 elementi { role: 'user' | 'assistant', content }, l'ultimo è dell'utente
function isValidMessages(messages) {
    return Array.isArray(messages)
        && messages.length > 0
        && messages.length <= MAX_MESSAGES
        && messages.every((message) =>
            ['user', 'assistant'].includes(message?.role)
            && typeof message.content === 'string'
            && message.content.trim() !== ''
            && message.content.length <= MAX_CONTENT
        )
        && messages.at(-1).role === 'user';
}

// Il client manda { role, content }: LangChain vuole HumanMessage / AIMessage
function toLangChainMessages(messages) {
    return messages.map((message) => {
        if (message.role === "user") {
            return new HumanMessage(message.content);
        } else {
            return new AIMessage(message.content);
        }
    });
}

router.post('/chat', async (req, res) => {
    const { messages } = req.body ?? {};

    if (!isValidMessages(messages)) {
        return res.status(400).json({
            success: false,
            message: 'messages deve essere un elenco di {role, content} che termina con un messaggio user',
            data: null
        });
    }

    try {
        // Con catalogPromptAgent l'agente va creato a ogni richiesta:
        // const agent = await createCatalogPromptAgent();
        const response = await storeAgent.invoke({
            messages: toLangChainMessages(messages)
        });

        // per vedere cosa è successo davvero (chiamate ai tool comprese)
        for (const message of response.messages) {
            console.log(message.type, message.tool_calls ?? '');
        }
        console.log(response.messages.at(-1).usage_metadata);

        return res.json({
            success: true,
            message: '',
            data: {
                reply: response.messages.at(-1).content
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(502).json({
            success: false,
            message: 'Il servizio AI non è disponibile, riprova tra poco',
            data: null
        });
    }
});

export default router;