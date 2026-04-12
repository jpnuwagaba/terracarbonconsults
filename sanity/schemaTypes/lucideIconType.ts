import {defineType} from 'sanity'

import {LucideIconInput} from './LucideIconInput'
import {lucideIconListOptions} from './lucideIconOptions'

export const lucideIconType = defineType({
  name: 'lucide-icon',
  title: 'Lucide Icon',
  type: 'string',
  components: {
    input: LucideIconInput,
  },
  options: {
    list: lucideIconListOptions,
  },
})
