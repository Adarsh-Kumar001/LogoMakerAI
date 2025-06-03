import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

function extractIdeasArray(text) {
  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/);
  if (!jsonMatch) return null;

  try {
    const parsed = JSON.parse(jsonMatch[1]);
    return parsed.ideas || null;
  } catch {
    return null;
  }
}

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const model = 'gemini-2.5-flash-preview-04-17';
    const config = { responseMimeType: 'text/plain' };
    const contents = [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ];


    const responseStream = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let fullText = '';

    // Accumulate all chunks of text
    for await (const chunk of responseStream) {
      fullText += chunk.text;
    }

    const ideasArray = extractIdeasArray(fullText);

    if (ideasArray) {
      return NextResponse.json({ ideas: ideasArray });
    } else {
      // fallback: return full text if no ideas found
      return NextResponse.json({ result: fullText });
    }

  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
