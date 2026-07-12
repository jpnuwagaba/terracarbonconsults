import {client} from './client'

export type Sector = {
  id: string
  title: string
  summary: string
  heroBigTxt?: string
  description: string
  href: string
  image?: string
  imageAlt: string
}

type SanitySector = {
  _id: string
  title?: string
  summary?: string
  heroBigTxt?: string
  description?: string
  slug?: string
  image?: string
}

const sectorsQuery = `*[_type == "sectorType" && defined(name)]|order(orderRank asc, _createdAt asc) {
  _id,
  "title": name,
  "summary": briefDescription,
  "heroBigTxt": heroBigTxt,
  "description": detailedDescription,
  "slug": slug.current,
  "image": sectorImage.asset->url
}`

export const getSectors = async (): Promise<Sector[]> => {
  const sectors = await client.fetch<SanitySector[]>(sectorsQuery)

  return sectors.map((sector) => ({
    id: sector._id,
    title: sector.title ?? '',
    summary: sector.summary ?? '',
    heroBigTxt: sector.heroBigTxt ?? '',
    description: sector.description ?? '',
    href: sector.slug ? `/sectors/${sector.slug}` : '#',
    image: sector.image,
    imageAlt: sector.title ? `${sector.title} illustration` : 'Sector illustration',
  }))
}
