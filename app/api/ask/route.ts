// app/api/ask/route.ts

import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // or replace with your actual key for testing
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
      store: true,
    });

    return NextResponse.json({ answer: response.output_text });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
