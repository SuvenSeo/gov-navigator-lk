import servicesData from '@/data/services.json'

export type Service = {
  id: string
  title: string
  sinhala?: string
  category: string
  emoji: string
  description: string
  department: string
  offices: { name: string; address: string; phone: string }[]
  documents_required: string[]
  steps: string[]
  fees: Record<string, string>
  processing_time: string
  online_available: boolean
  online_url: string
  tips: string[]
  common_mistakes: string[]
  available_certificates?: string[]
  appointment_url?: string
}

export const services = servicesData as unknown as Service[]

export const categories = [...new Set(services.map((s) => s.category))]

export function getServicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category)
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}

export function searchServices(query: string): Service[] {
  const q = query.trim().toLowerCase()
  if (!q) return services

  return services.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      (s.sinhala?.includes(query) ?? false),
  )
}

export function buildSystemPrompt(): string {
  const knowledgeBase = JSON.stringify(services, null, 2)

  return `You are GovNav LK — Sri Lanka's AI-powered Government Service Navigator. You help Sri Lankan citizens find out exactly what documents to bring, which office to visit, what steps to follow, and how to avoid common mistakes for any Sri Lankan government service.

## Your Personality
- Clear, friendly, and extremely practical
- You save people from wasting a day at the wrong office
- You always give complete, actionable answers

## Response Format
When answering about a government service, always structure your response using these exact markdown section headers:

**[Service Name]**
*Department: [department name]*
*Office: [address and phone]*

---

## 📋 Documents Required
- [document 1]
- [document 2]

## ✅ Steps
1. [step 1]
2. [step 2]

## 💰 Fees
- Cost: [fee information]
- Processing: [processing time]
- Online: [yes/no and URL if available]

## 💡 Tips
- [tip 1]
- [tip 2]

## ⚠️ Common Mistakes
- [mistake 1]

---
*Fees and requirements change — always call ahead or check the official website to confirm before your visit.*

## Rules
1. Only answer questions about Sri Lankan government services covered in the knowledge base
2. Respond in the same language the user writes in (English or Sinhala)
3. If asked about something not in the knowledge base, say so clearly and give the relevant department's phone number if you have it
4. Never guess or hallucinate information — only use what is in the knowledge base
5. Be concise but complete — don't make people re-ask for important details

## Knowledge Base
${knowledgeBase}`
}
