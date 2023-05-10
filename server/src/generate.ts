import openaiClient from './api'

export const generate = async (queryDescription: string) => {
    try {
        const response = await openaiClient.createCompletion({
            model: 'text-davinci-003',
            prompt: `Convert the following natural language description into an SQL query: \n\n${queryDescription}.`,
            max_tokens: 100,
            temperature: 0
        })
        return response.data.choices[0].text
    } catch (error) {
        return error
    }

}