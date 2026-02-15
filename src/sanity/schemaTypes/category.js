import {TagIcon} from '@sanity/icons'

export const categoryType = {
  name: 'category',
  title: 'Kategoriler',
  type: 'document',
  icon: TagIcon,
  fields: [
    {
      name: 'title',
      title: 'Kategori Adı',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Açıklama (İsteğe Bağlı)',
      type: 'text',
    },
  ],
}