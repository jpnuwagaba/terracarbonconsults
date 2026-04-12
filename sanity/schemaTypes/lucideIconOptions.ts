import * as LucideIcons from 'lucide-react'
import type {LucideIcon} from 'lucide-react'

export type LucideIconOption = {
  title: string
  value: string
  Icon: LucideIcon
  searchableText: string
}

const excludedExports = new Set([
  'createLucideIcon',
  'default',
  'dynamicIconImports',
  'Icon',
  'icons',
])

const toKebabCase = (value: string) =>
  value
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')

const isLucideIcon = (name: string) => {
  if (excludedExports.has(name)) {
    return false
  }

  const icon = LucideIcons[name as keyof typeof LucideIcons]

  if (typeof icon !== 'object' || icon === null || !('$$typeof' in icon) || !('render' in icon)) {
    return false
  }

  if (name.startsWith('Lucide') && name.replace('Lucide', '') in LucideIcons) {
    return false
  }

  if (name.endsWith('Icon') && name.replace('Icon', '') in LucideIcons) {
    return false
  }

  return true
}

export const lucideIconOptions: LucideIconOption[] = Object.keys(LucideIcons)
  .filter(isLucideIcon)
  .map((name) => {
    const value = toKebabCase(name)

    return {
      title: value,
      value,
      Icon: LucideIcons[name as keyof typeof LucideIcons] as LucideIcon,
      searchableText: `${name} ${value} ${value.replace(/-/g, ' ')}`.toLowerCase(),
    }
  })

export const lucideIconListOptions = lucideIconOptions.map(({title, value}) => ({
  title,
  value,
}))
