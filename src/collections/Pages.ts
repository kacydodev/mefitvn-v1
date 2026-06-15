import { TwoColumn, ThreeColumn, FourColumn, SixColumn } from '@/blocks/Column/config'
import { Link } from '@/components/Link/config'
import type { CollectionConfig, Tab } from 'payload'

const Hero: Tab = {
  label: 'Hero',
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'heroDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Call to Action',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'blocks',
          blocks: [Link],
        },
      ],
    },
    {
      name: 'whatsNew',
      type: 'group',
      label: "What's New?",
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'link',
          type: 'blocks',
          blocks: [Link],
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

const Content: Tab = {
  label: 'Content',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [TwoColumn, ThreeColumn, FourColumn, SixColumn],
    },
  ],
}
export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: ({ req: { user } }) => Boolean(user),
    read: ({ req: { user } }) => {
      if (!user) return { _status: { equals: 'published' } }
      return true
    },
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
  },
  defaultPopulate: {
    // title: true,
    slug: true,
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 20,
  },
  // slugField()
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'New Page',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [Hero, Content],
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
