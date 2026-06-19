'use client'

import { useChat } from 'ai/react'
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const QUICK_QUESTIONS = [
  'How do I get a new NIC?',
  'How do I renew my passport?',
  'How do I get a driving license?',
  'How do I get a birth certificate copy?',
  'How do I get a police clearance?',
]

const WELCOME_MESSAGE = `👋 **Welcome to GovNav LK!**

I'm your AI guide to Sri Lankan government services. Ask me about:

- 🪪 **NIC** — new application, replacement, or changes
- ✈️ **Passport** — new, renewal, or Tatkal
- 🚗 **Driving License** — learner's, full license, or renewal
- 📋 **Birth, Marriage Certificates** — certified copies
- ⚖️ **Police Clearance** — for jobs or overseas
- 🚘 **Vehicle Registration** — first registration or revenue license
- 🏛️ **Grama Niladhari Certificates** — residency, character, and more

Just tell me what you need — I'll tell you exactly what documents to bring, where to go, and how to get it done. No more wasted trips! 🙌`

export interface ChatInterfaceRef {
  submitMessage: (text: string) => void
}

const ChatInterface = forwardRef<ChatInterfaceRef>((_, ref) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: '/api/chat',
  })

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useImperativeHandle(ref, () => ({
    submitMessage: (text: string) => {
      append({ role: 'user', content: text })
    },
  }))

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (input.trim() && !isLoading) {
        handleSubmit(e as unknown as React.FormEvent)
      }
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Chat messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto chat-scroll px-4 md:px-8 py-6 space-y-5">
        {/* Welcome */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-lk-maroon flex items-center justify-center flex-shrink-0 text-white text-sm font-bold shadow-sm">
            🇱🇰
          </div>
          <div className="ai-message bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 max-w-2xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{WELCOME_MESSAGE}</ReactMarkdown>
          </div>
        </div>

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold shadow-sm ${
                message.role === 'user'
                  ? 'bg-lk-gold text-white'
                  : 'bg-lk-maroon text-white'
              }`}
            >
              {message.role === 'user' ? '👤' : '🇱🇰'}
            </div>

            {/* Bubble */}
            {message.role === 'user' ? (
              <div className="bg-lk-maroon text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-md shadow-sm">
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            ) : (
              <div className="ai-message bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 max-w-2xl text-sm text-gray-800">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}

        {/* Loading dots */}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-lk-maroon flex items-center justify-center flex-shrink-0 text-white text-sm shadow-sm">
              🇱🇰
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100">
              <div className="flex gap-1 items-center h-5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 rounded-full bg-lk-maroon/40 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick questions — only show when no messages */}
      {messages.length === 0 && (
        <div className="px-4 md:px-8 pb-3 flex flex-wrap gap-2">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => append({ role: 'user', content: q })}
              className="text-xs bg-white border border-gray-200 text-gray-600 hover:border-lk-maroon hover:text-lk-maroon px-3 py-1.5 rounded-full transition-colors shadow-sm"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input area */}
      <div className="border-t border-gray-200 bg-white px-4 md:px-8 py-4">
        <form onSubmit={handleSubmit} className="flex gap-3 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask about any government service... (e.g. 'What do I need to renew my passport?')"
            rows={2}
            className="flex-1 resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lk-maroon/30 focus:border-lk-maroon transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex-shrink-0 bg-lk-maroon hover:bg-lk-maroon-dark text-white rounded-xl px-5 py-3 text-sm font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
          >
            Send
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Press <kbd className="bg-gray-100 px-1 rounded text-[10px]">Enter</kbd> to send · <kbd className="bg-gray-100 px-1 rounded text-[10px]">Shift+Enter</kbd> for new line
        </p>
      </div>
    </div>
  )
})

ChatInterface.displayName = 'ChatInterface'

export default ChatInterface
