import type { CollectionConfig } from 'payload'

export const Insights: CollectionConfig = {
  slug: 'insights',
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
      name: 'content',
      type: 'richText',
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'For Foreign Investors', value: 'investor' },
        { label: 'For Expats & Individuals', value: 'expat' },
        { label: 'For Foreign Law Firms', value: 'lawfirm' },
        { label: 'Industry-Specific', value: 'industry' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'practiceArea',
      type: 'relationship',
      relationTo: 'practice-areas',
    },
    {
      name: 'targetAudience',
      type: 'select',
      options: [
        { label: 'Foreign Investors', value: 'investor' },
        { label: 'Expats & Individuals', value: 'expat' },
        { label: 'Foreign Law Firms', value: 'lawfirm' },
        { label: 'Industry Professionals', value: 'industry' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
