import { Router } from "express";
//import proxyAgent from '../agents/proxy.js';
//import catalogPromptAgent from '../agents/catalogPrompt.js';
import storeAgent from '../agents/store.js';
import { HumanMessage, AIMessage } from "langchain";

const router = Router();

/*
{
    "messages": [
        { "role": "user", "content": "Avete dei mouse?" },
        { "role": "assistant", "content": "Sì, ne abbiamo tre modelli." },
        { "role": "user", "content": "Quanto costa il primo?" }
    ]
}

{
    "messages": [
        new HumanMessage("Avete dei mouse?"),
        new AIMessage("Sì, ne abbiamo tre modelli."),
        new HumanMessage("content": "Quanto costa il primo?")
    ]
}
*/

const MAX_MESSAGES = 20;
const MAX_CONTENT = 2000;

function isValidMessages(messages) {
    // Non mi è stato passato un array
    if (!Array.isArray(messages) || messages.length > MAX_MESSAGES) {
        return false;
    }

    for (let i = 0; i < messages.length; i++) {
        const currentMessage = messages[i];

        // Check del ruolo
        const messageRole = currentMessage.role;
        if (messageRole === undefined || (messageRole !== 'user' && messageRole !== 'assistant')) {
            return false;
        }

        // Check del contenuto
        const messageContent = currentMessage.content;
        if (
            messageContent === undefined ||
            typeof messageContent !== 'string' ||
            messageContent > MAX_CONTENT ||
            messageContent.trim() === ''
        ) {
            return false;
        }
    }

    return true;
}

function toLangChainMessages(messages) {    
    return messages.map(message => {
        if (message.role === "user") {
            // { "role": "user", "content": "Avete dei mouse?" }
            return new HumanMessage(message.content);
        } else {
            // { "role": "assistant", "content": "Sì, ne abbiamo tre modelli." }
            return new AIMessage(message.content);
        }
    });
}

router.post('/chat', async (req, res) => {
    const { messages } = req.body || {};

    if (isValidMessages(messages) === false) {
        return res.status(400).json({
            success: false,
            message: 'formato di "messages" errato',
            data:  null
        });
    }

    try {
        const response = await storeAgent.invoke({
            messages: toLangChainMessages(messages)
        });
    
        console.log(response.messages.at(-1).usage_metadata);

        const responseMessage = response.messages.at(-1).content;

        return res.json({
            success: true,
            message: '',
            data: {
                reply: responseMessage
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data:  null
        });
    }
});

export default router;