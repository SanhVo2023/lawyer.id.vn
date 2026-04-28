import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => {
      return user?.role === 'admin'
    },
    update: ({ req: { user } }) => {
      return user?.role === 'admin'
    },
    delete: ({ req: { user } }) => {
      return user?.role === 'admin'
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'country',
      type: 'text',
    },
    {
      name: 'matterType',
      type: 'select',
      options: [
        { label: 'Civil Dispute', value: 'civil' },
        { label: 'Land & Property', value: 'land' },
        { label: 'Family / Divorce', value: 'family' },
        { label: 'Corporate & Commercial', value: 'corporate' },
        { label: 'Criminal Defense', value: 'criminal' },
        { label: 'Labor & Employment', value: 'labor' },
        { label: 'Arbitration', value: 'arbitration' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Reviewed', value: 'reviewed' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
