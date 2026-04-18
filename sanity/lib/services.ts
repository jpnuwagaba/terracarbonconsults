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
  const services = await client.fetch<SanityService[]>(servicesQuery)

  return services.map((service) => ({
    id: service._id,
    title: service.title ?? '',
    description: service.description ?? '',
    href: service.slug ? `/services/${service.slug}` : '#',
    icon: service.icon,
  }))
}
