import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import { type SchemaTypeDefinition } from 'sanity'

import {lucideIconType} from './lucideIconType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    lucideIconType,
    {
      name: 'servicetype',
      title: 'Service',
      type: 'document',
      orderings: [orderRankOrdering],
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'briefDescription',
          title: 'Brief Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'detailedDescription',
          title: 'Detailed Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'icon',
          title: 'Icon',
          type: 'lucide-icon',
        },
        {
          name: 'serviceImage',
          title: 'Service Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 96,
          },
        },
        orderRankField({ type: 'servicetype' }),
      ],
    },
    {
      name: 'aboutUsType',
      title: 'About Us',
      type: 'document',
      fields: [
        {
          name: 'ourMission',
          title: 'Our Mission',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'ourVision',
          title: 'Our Vision',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'details',
          title: 'Details',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'teamType',
      title: 'Team Member',
      type: 'document',
      orderings: [orderRankOrdering],
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'department',
          title: 'Department',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
