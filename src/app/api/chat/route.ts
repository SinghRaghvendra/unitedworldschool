import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

    // If Gemini API Key is missing, provide a simulated fallback response so the demo doesn't crash completely.
    if (!apiKey) {
      console.warn("Gemini API key is missing. Returning fallback response.");
      return NextResponse.json({
        reply: `You said: "${message}". I am eager to respond as an intelligent AI teacher, but my administrator has not configured the Google Gemini API key yet. Please add it to the environment variables to activate my brain.`
      });
    }

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `You are the AI Teacher for UnitedWorldSchool. Your goal is to be encouraging, knowledgeable, and speak concisely as if you're a real human talking on video. A student asked: ${message}` }]
        }]
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Gemini API Error:", errText);
      throw new Error("Failed to get response from Gemini");
    }

    const data = await res.json();
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't formulate a response.";

    return NextResponse.json({ reply: textResponse });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to process chat" }, { status: 500 });
  }
}
