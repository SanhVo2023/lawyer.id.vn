import type { CollectionConfig } from 'payload'

export const Credentials: CollectionConfig = {
  slug: 'credentials',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Bar Admission', value: 'bar-admission' },
        { label: 'Certification', value: 'certification' },
        { label: 'Membership', value: 'membership' },
        { label: 'Education', value: 'education' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'institution',
      type: 'text',
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'description',
      type: 'textarea',
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
