import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

// Extract only the "prompt" string inside ```json { "prompt": "..." } ```
function extractPromptText(text) {
  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/);
  if (!jsonMatch) return null;

  
  try {
    const parsed = JSON.parse(jsonMatch[1]);
    return parsed.prompt || null;
  } catch {
    return null;
  }
}

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const model = 'gemini-2.5-flash-preview-04-17';
    const config = { responseMimeType: 'text/plain' };

    const history = [
      {
        role: 'user',
        parts: [
          {
            text: `Generate a text prompt to create Logo for Logo Title/Brand name: adarsh, 
with description: adarsh is a boy, with Color combination of Earthy Browns, 
also include the Vintage compass adarsh emblem and include Vintage Custom Logos design idea. 
Refer to this Logo Prompt: 
"Generate a vintage, hand-drawn logo in a circular format. The logo should feature a central illustration, 
such as a symbol, icon, or image related to the brand's identity. The illustration should be detailed and stylized, 
with a focus on linework and shading. The logo should also include the brand name, 
written in a vintage, decorative font. The overall aesthetic should be retro and nostalgic, 
evoking a sense of tradition and quality." 
Give me result in JSON format with only "prompt" field.`,
          },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: `\`\`\`json
{
  "prompt": "Generate a vintage, hand-drawn logo in a circular format. The central illustration is a detailed and stylized vintage compass emblem designed to represent 'adarsh', focusing on intricate linework and shading to evoke a sense of reliability, direction, and classic quality. The brand name 'adarsh' is incorporated into the design in a vintage, decorative font. The color palette is restricted to earthy browns. The overall aesthetic is retro and nostalgic, symbolizing tradition, trustworthiness, and enduring quality."
}
\`\`\``,
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ];

    const responseStream = await ai.models.generateContentStream({
      model,
      config,
      contents: history,
    });

    let fullText = '';

    for await (const chunk of responseStream) {
      fullText += chunk.text;
    }

    const extractedPrompt = extractPromptText(fullText);

    return NextResponse.json(
      extractedPrompt
        ? { prompt: extractedPrompt }
        : { result: fullText } // fallback
    );
  } catch (error) {
    console.error('Gemini logo prompt error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
