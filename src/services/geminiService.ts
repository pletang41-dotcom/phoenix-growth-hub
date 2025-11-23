import { GoogleGenerativeAI } from "@google/generative-ai";
import { IndustryType, GeneratedStrategy } from "../types";

// Initialize Gemini Client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const generateStrategy = async (industry: IndustryType): Promise<GeneratedStrategy> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    
    const prompt = `Generate a marketing automation strategy hook for a ${industry}.
    
Return ONLY valid JSON in this exact format:
{
  "headline": "A powerful 1-sentence value proposition for automating their bookings",
  "bonuses": ["Bonus 1", "Bonus 2", "Bonus 3"],
  "estimatedLift": "30-40%"
}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error("No response from AI");
    }
    
    return JSON.parse(text) as GeneratedStrategy;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback in case of API failure or missing key
    return {
      headline: `Automate your ${industry} bookings and reclaim your time.`,
      bonuses: ["Smart Follow-ups", "Review Booster", "Calendar Sync"],
      estimatedLift: "25%"
    };
  }
};