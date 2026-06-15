import { Block, FilterOptionsProps } from 'payload'

export const Link: Block = {
  slug: 'link',
  interfaceName: 'Link',
  fields: [
    {
      name: 'type',
      type: 'radio',
      options: [
        {
          label: 'Internal',
          value: 'internal',
        },
        {
          label: 'External',
          value: 'external',
        },
      ],
      defaultValue: 'internal',
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'internalLink',
      label: 'URL',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
      filterOptions: ({ id }: FilterOptionsProps) => {
        if (id) {
          return {
            id: {
              not_equals: id,
            },
          }
        }
        return {}
      },
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'internal',
        allowCreate: false,
      },
    },
    {
      name: 'externalLink',
      label: 'URL',
      type: 'text',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'external',
      },
    },
  ],
}
