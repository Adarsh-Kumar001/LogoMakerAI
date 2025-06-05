import { NextResponse } from 'next/server';
import { Client } from '@gradio/client';

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // Connect to the Hugging Face Space via Gradio client
    const client = await Client.connect("Dagfinn1962/Midjourney-Free");

    // Call the /run endpoint with parameters, including the prompt
    const result = await client.predict("/run", {
      prompt: prompt,
      negative_prompt: "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck",
      use_negative_prompt: true,
      style: "2560 x 1440",
      seed: 0,
      width: 512,
      height: 512,
      guidance_scale: 0.1,
      randomize_seed: true,
    });

    // result.data contains the response (likely base64 image or URL)
    return NextResponse.json({ data: result.data });

  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}
