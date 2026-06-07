import {client} from './client'

export type PortableTextBlock = {
  _key?: string
  _type: string
  children?: Array<{
    _key?: string
    _type: string
    text?: string
    bold?: boolean
    italic?: boolean
    underline?: boolean
    code?: boolean
    marks?: string[]
  }>
  level?: number
  listItem?: string
  style?: string
  markDefs?: unknown[]
}

export type Service = {
  id: string
  title: string
  summary: string
  description: string | PortableTextBlock[]
  href: string
  icon?: string
}

type SanityService = {
  _id: string
  title?: string
  summary?: string
  description?: unknown
  slug?: string
  icon?: string
}

const isPortableTextBlockArray = (value: unknown): value is PortableTextBlock[] => {
  return Array.isArray(value) && value.every((block) => (
    block !== null &&
    typeof block === 'object' &&
    '_type' in block
  ))
}

const toServiceDescription = (value: unknown): Service['description'] => {
  if (typeof value === 'string') {
    return value
  }

  if (isPortableTextBlockArray(value)) {
    return value
  }

  return ''
}

const servicesQuery = `*[_type == "servicetype" && defined(name)]|order(orderRank asc, _createdAt asc) {
  _id,
  "title": name,
  "summary": briefDescription,
  "description": detailedDescription,
  "slug": slug.current,
  icon
}`

export const getServices = async (): Promise<Service[]> => {
  try {
    const services = await client.fetch<SanityService[]>(servicesQuery)

    return (services || []).map((service) => ({
      id: service._id,
      title: service.title ?? '',
      summary: service.summary ?? '',
      description: toServiceDescription(service.description),
      href: service.slug ? `/services/${service.slug}` : '#',
      icon: service.icon,
    }))
  } catch (err) {
    // Fail gracefully in dev if the external fetch fails (network, invalid config, etc.)
    // Log the error so the developer can inspect details in the terminal.
    // Return an empty array so the page can render without crashing.
    console.error('Failed to fetch services from Sanity:', err)
    return []
  }
}
