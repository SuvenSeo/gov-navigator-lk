import { anthropic } from '@ai-sdk/anthropic'
import { streamText } from 'ai'
import { buildSystemPrompt } from '@/lib/knowledge'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({
        error: 'AI service is not configured. Add ANTHROPIC_API_KEY to environment variables.',
      }),
      { status: 503, headers: { 'Content-Type': 'application/json' } },
    )
  }

  const { messages } = await req.json()

  const result = streamText({
    model: anthropic('claude-haiku-4-5-20251001'),
    system: buildSystemPrompt(),
    messages,
    maxTokens: 1024,
  })

  return result.toDataStreamResponse()
}
