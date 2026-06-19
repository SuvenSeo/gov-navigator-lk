import type { Service } from '@/lib/knowledge'

export type ServiceComparisonRow = {
  label: string
  valueA: string
  valueB: string
  highlight: boolean
}

function mainFee(fees: Record<string, string>): string {
  const first = Object.values(fees)[0]
  return first ?? 'Varies'
}

function documentCount(service: Service): number {
  return service.documents_required.length
}

export function compareServices(serviceA: Service, serviceB: Service): ServiceComparisonRow[] {
  const feeA = mainFee(serviceA.fees)
  const feeB = mainFee(serviceB.fees)
  const docsA = documentCount(serviceA)
  const docsB = documentCount(serviceB)

  return [
    { label: 'Department', valueA: serviceA.department, valueB: serviceB.department, highlight: false },
    { label: 'Processing Time', valueA: serviceA.processing_time, valueB: serviceB.processing_time, highlight: feeA !== feeB },
    { label: 'Documents Required', valueA: String(docsA), valueB: String(docsB), highlight: docsA !== docsB },
    { label: 'Main Fee', valueA: feeA, valueB: feeB, highlight: feeA !== feeB },
    {
      label: 'Online Available',
      valueA: serviceA.online_available ? 'Yes' : 'No',
      valueB: serviceB.online_available ? 'Yes' : 'No',
      highlight: serviceA.online_available !== serviceB.online_available,
    },
    { label: 'Category', valueA: serviceA.category, valueB: serviceB.category, highlight: false },
  ]
}

export function getQuickRecommendation(serviceA: Service, serviceB: Service): string {
  const aWeeks = serviceA.processing_time.toLowerCase().includes('week')
  const bWeeks = serviceB.processing_time.toLowerCase().includes('week')

  if (aWeeks && !bWeeks) {
    return `${serviceB.title} typically finishes faster — consider starting there if you're short on time.`
  }
  if (bWeeks && !aWeeks) {
    return `${serviceA.title} typically finishes faster — consider starting there if you're short on time.`
  }

  if (documentCount(serviceA) < documentCount(serviceB)) {
    return `${serviceA.title} needs fewer documents — a good first step if you're preparing multiple services.`
  }
  if (documentCount(serviceB) < documentCount(serviceA)) {
    return `${serviceB.title} needs fewer documents — a good first step if you're preparing multiple services.`
  }

  return `Both services have similar complexity — gather documents for both before visiting any office.`
}
