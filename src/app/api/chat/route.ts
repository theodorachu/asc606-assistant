import { NextResponse } from 'next/server';

interface ChatRequest {
  message: string;
}

export async function POST(request: Request) {
  try {
    const { message }: ChatRequest = await request.json();
    
    // For now, just echo back the message
    // We'll implement RAG here later
    return NextResponse.json({ 
      message: `[Placeholder] You asked: ${message}` 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}