import * as LucideIcons from 'lucide-react'
import {defineType} from 'sanity'

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

const lucideIconOptions = Object.keys(LucideIcons)
  .filter(isLucideIcon)
  .map((name) => {
    const value = toKebabCase(name)

    return {
      title: value,
      value,
    }
  })

export const lucideIconType = defineType({
  name: 'lucide-icon',
  title: 'Lucide Icon',
  type: 'string',
  options: {
    list: lucideIconOptions,
    layout: 'dropdown',
  },
})
