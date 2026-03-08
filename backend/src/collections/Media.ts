import type { CollectionConfig } from 'payload'

export const Media = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        crop: 'center',
      },
    ],
    adminThumbnail: 'thumbnail', 
    mimeTypes: ['image/*'],
  },
  fields: [],
}
