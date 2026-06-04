import {client} from './client'

export type Service = {
  id: string
  title: string
  description: string
  href: string
  icon?: string
}

type SanityService = {
  _id: string
  title?: string
  description?: string
  slug?: string
  icon?: string
}

const servicesQuery = `*[_type == "servicetype" && defined(name)]|order(orderRank asc, _createdAt asc) {
  _id,
  "title": name,
  "description": briefDescription,
  "slug": slug.current,
  icon
}`

export const getServices = async (): Promise<Service[]> => {
  try {
    const services = await client.fetch<SanityService[]>(servicesQuery)

    return (services || []).map((service) => ({
      id: service._id,
      title: service.title ?? '',
      description: service.description ?? '',
      href: service.slug ? `/services/${service.slug}` : '#',
      icon: service.icon,
    }))
  } catch (err) {
    // Fail gracefully in dev if the external fetch fails (network, invalid config, etc.)
    // Log the error so the developer can inspect details in the terminal.
    // Return an empty array so the page can render without crashing.
    // eslint-disable-next-line no-console
    console.error('Failed to fetch services from Sanity:', err)
    return []
  }
}
