import type { CollectionConfig } from 'payload'

export const NationalityGuides: CollectionConfig = {
  slug: 'nationality-guides',
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
      name: 'country',
      type: 'text',
      required: true,
    },
    {
      name: 'flagIcon',
      type: 'text',
      admin: {
        description: 'Country flag emoji or icon identifier',
      },
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'keyTopics',
      type: 'array',
      fields: [
        {
          name: 'topic',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'relatedInsights',
      type: 'relationship',
      relationTo: 'insights',
      hasMany: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
