import OpenAI from 'openai';

export const openaiClient = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});
