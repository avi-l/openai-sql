import { ChatCompletionRequestMessage } from 'openai'
import openaiClient from './api'

export const generate = async (queryDescription: string) => {

    const daVinci = async (queryDescription: string) => {
        const response = await openaiClient.createCompletion({
            model: 'text-davinci-003',
            prompt: `Convert the following natural language description into an SQL query: \n\n${queryDescription}.`,
            max_tokens: 100,
            temperature: 0
        })
        return response.data.choices[0].text
    }
    
    const chatGptApi = async (queryDescription: string) => {
        const messages: ChatCompletionRequestMessage[] = [
            { role: 'system', content: `You are a translator from plain english to SQL` },
            { role: 'user', content: `Convert the following natural language description into an SQL query: \n\nshow all elements from the table users.`, },
            { role: 'assistant', content: `SELECT * FROM users;` },
            { role: 'user', content: `Convert the following natural language description into an SQL query: \n\n${queryDescription}.` }
        ]
        const response = await openaiClient.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: messages,
        })
        return response.data.choices[0].message?.content
    }
    return await chatGptApi(queryDescription)


}