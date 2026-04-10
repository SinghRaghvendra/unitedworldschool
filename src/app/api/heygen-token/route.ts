import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const apiKey = process.env.HEYGEN_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'HEYGEN_API_KEY is not configured in environment variables' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.heygen.com/v1/streaming.create_token', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('HeyGen Token Error Full:', errorText);
      throw new Error(`Failed to create HeyGen token: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({ token: data.data.token });
    
  } catch (error) {
    console.error('Error fetching HeyGen token:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while generating streaming token' },
      { status: 500 }
    );
  }
}
