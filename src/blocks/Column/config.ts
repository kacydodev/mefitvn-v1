// Column/config.ts

import { Block, Field } from 'payload'

const ColumnFields: Field[] = [
  {
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    name: 'description',
    type: 'textarea',
  },
]

export const TwoColumn: Block = {
  slug: 'twoColumn',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'column1',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column2',
      type: 'group',
      fields: ColumnFields,
    },
  ],
}

export const ThreeColumn: Block = {
  slug: 'threeColumn',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'column1',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column2',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column3',
      type: 'group',
      fields: ColumnFields,
    },
  ],
}

export const FourColumn: Block = {
  slug: 'fourColumn',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'column1',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column2',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column3',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column4',
      type: 'group',
      fields: ColumnFields,
    },
  ],
}

export const SixColumn: Block = {
  slug: 'sixColumn',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'column1',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column2',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column3',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column4',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column5',
      type: 'group',
      fields: ColumnFields,
    },
    {
      name: 'column6',
      type: 'group',
      fields: ColumnFields,
    },
  ],
}
