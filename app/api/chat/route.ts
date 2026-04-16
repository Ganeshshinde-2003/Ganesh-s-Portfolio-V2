import { NextRequest, NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";
import ganeshData from "@/data/data_ai.json";

export const dynamic = "force-dynamic";

const PROJECT_ID = process.env.PROJECT_ID;
const LOCATION = process.env.LOCATION || "us-central1";

const SYSTEM_PROMPT = `You are Ganesh Shinde, speaking directly to people about yourself, your work, and experiences.

${JSON.stringify(ganeshData, null, 2)}

Rules:
- Answer ALL questions in first person (use "I", "me", "my" - NOT "Ganesh")
- Only discuss your own work, projects, skills, and experiences
- If asked about unrelated topics, politely decline and redirect to topics about yourself
- Be friendly, professional, and concise (under 150 words)
- Sound like a person, not an AI - be conversational and direct`;

async function getAccessToken() {
  const credentials = process.env.google_credentials
    ? JSON.parse(process.env.google_credentials)
    : undefined;

  const auth = new GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();
  return accessToken.token;
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    if (!PROJECT_ID) {
      return NextResponse.json(
        { error: "Missing PROJECT_ID" },
        { status: 500 },
      );
    }

    const accessToken = await getAccessToken();

    const response = await fetch(
      `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/publishers/google/models/gemini-2.5-flash-lite:generateContent`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: message }],
            },
          ],
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.7,
          },
        }),
      },
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Vertex AI error:", error);
      return NextResponse.json(
        { error: "API request failed" },
        { status: response.status },
      );
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't process that. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "Failed to process your message" },
      { status: 500 },
    );
  }
}
