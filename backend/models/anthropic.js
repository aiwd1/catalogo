import 'dotenv/config';
import { ChatAnthropic } from '@langchain/anthropic';

const model = new ChatAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    model: 'claude-haiku-4-5',
    temperature: 0.2,
    maxTokens: 500,
    maxRetries: 1,
    timeout: 30 * 1000,
});

export default model;
