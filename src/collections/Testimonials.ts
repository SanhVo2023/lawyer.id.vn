import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'clientName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'clientCountry',
      type: 'text',
    },
    {
      name: 'matterType',
      type: 'text',
    },
    {
      name: 'approved',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
