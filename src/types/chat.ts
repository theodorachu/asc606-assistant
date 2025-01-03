export type MessageRole = 'user' | 'assistant';

export interface Message {
  role: MessageRole;
  content: string;
}

export interface ChatResponse {
  message: string;
  error?: string;
}