import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is missing' }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(prompt);

    const text = await result.response.text();

    return NextResponse.json({ script: text });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
  }
}
