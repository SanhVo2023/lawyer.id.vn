import type { CollectionConfig } from 'payload'

export const Experience: CollectionConfig = {
  slug: 'experience',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'practiceArea',
      type: 'relationship',
      relationTo: 'practice-areas',
    },
    {
      name: 'country',
      type: 'text',
      admin: {
        description: 'Client country of origin (e.g., Australia, Korea, USA)',
      },
    },
    {
      name: 'challenge',
      type: 'richText',
    },
    {
      name: 'approach',
      type: 'richText',
    },
    {
      name: 'outcome',
      type: 'richText',
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'matterValue',
      type: 'text',
      admin: {
        description: 'Approximate matter value range (e.g., "$500K - $1M")',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
