import type { CollectionConfig } from 'payload'

export const LegalGuides: CollectionConfig = {
  slug: 'legal-guides',
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
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'relatedGuides',
      type: 'relationship',
      relationTo: 'legal-guides',
      hasMany: true,
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
