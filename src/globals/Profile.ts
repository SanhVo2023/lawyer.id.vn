import type { GlobalConfig } from 'payload'

export const Profile: GlobalConfig = {
  slug: 'profile',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'tagline',
      type: 'textarea',
    },
    {
      name: 'yearsExperience',
      type: 'number',
    },
    {
      name: 'casesHandled',
      type: 'number',
    },
    {
      name: 'countriesServed',
      type: 'number',
    },
    {
      name: 'internationalCases',
      type: 'number',
    },
    {
      name: 'portrait',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'whatsapp',
      type: 'text',
    },
  ],
}
