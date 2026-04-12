import {client} from './client'

export type Sector = {
  id: string
  title: string
  description: string
  href: string
  image?: string
  imageAlt: string
}

type SanitySector = {
  _id: string
  title?: string
  description?: string
  slug?: string
  image?: string
}

const sectorsQuery = `*[_type == "sectorType" && defined(name)]|order(orderRank asc, _createdAt asc) {
  _id,
  "title": name,
  "description": briefDescription,
  "slug": slug.current,
  "image": sectorImage.asset->url
}`

export const getSectors = async (): Promise<Sector[]> => {
  const sectors = await client.fetch<SanitySector[]>(sectorsQuery)

  return sectors.map((sector) => ({
    id: sector._id,
    title: sector.title ?? '',
    description: sector.description ?? '',
    href: sector.slug ? `/sectors/${sector.slug}` : '#',
    image: sector.image,
    imageAlt: sector.title ? `${sector.title} illustration` : 'Sector illustration',
  }))
}
