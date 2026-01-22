import { MetadataRoute } from 'next'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}

// для случая с i18n
// const staticPages = ['']
// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const entries = createEntries(staticPages, (page, lang) => ({
//     url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}${page ? `/${page}` : ''}`,
//     alternates: createAlternates(page),
//     priority: page === '' ? 1 : 0.8,
//   }))
//   return entries
// }
