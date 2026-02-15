import {DocumentTextIcon} from '@sanity/icons'

export const postType = {
  name: 'post',
  title: 'Blog Yazıları',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (rule) => rule.required().error('Başlık şart!'),
    },
    {
      name: 'slug',
      title: 'Link (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    },
    {
      name: 'overview',
      title: 'Kısa Özet (Kartlarda Görünür)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200).warning('Çok uzun olmasın.'),
    },
    {
      name: 'mainImage',
      title: 'Kapak Resmi',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Resim Açıklaması (Google SEO için)',
        }
      ]
    },
    {
      name: 'categories',
      title: 'Kategori',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Yayınlanma Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    // Zengin Metin Editörü (Block Content) Buraya Gömüldü 👇
    {
      name: 'body',
      title: 'Makale İçeriği',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Başlık 2 (H2)', value: 'h2'},
            {title: 'Başlık 3 (H3)', value: 'h3'},
            {title: 'Alıntı', value: 'blockquote'},
          ],
          lists: [{title: 'Madde İşareti', value: 'bullet'}, {title: 'Numaralı', value: 'number'}],
          marks: {
            decorators: [
              {title: 'Kalın', value: 'strong'},
              {title: 'İtalik', value: 'em'},
            ],
            annotations: [
              {
                title: 'Link',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        // Yazı içine resim ekleme özelliği
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}