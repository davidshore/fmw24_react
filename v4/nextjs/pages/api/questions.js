import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowrd" });
  }

  const { prompt } = req.body;

  console.log("prompt", prompt);

  // Skicka prompt till gemini
  const result = await model.generateContent(prompt);
  const answerText = result.response.text();

  console.log("answerText", answerText);

  // Skicka svaret till frontend
  return res.status(200).json({ answer: answerText });
}
