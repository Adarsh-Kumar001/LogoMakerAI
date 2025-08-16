import { NextResponse } from 'next/server';
import { Client } from '@gradio/client';

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // Connect to the Hugging Face Space via Gradio client
    const client = await Client.connect("multimodalart/Qwen-Image-Fast");

    // Call the /run endpoint with parameters, including the prompt
    const result = await client.predict("/infer", {
      prompt: prompt,
      seed: 0,
      randomize_seed: true,
      aspect_ratio: "1:1",
      guidance_scale: 1,
      num_inference_steps: 4,
      prompt_enhance: true,
    });

    // result.data contains the response (likely base64 image or URL)
    return NextResponse.json({ data: result.data });

  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}
