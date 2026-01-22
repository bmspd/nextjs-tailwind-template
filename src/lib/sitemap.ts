import { MetadataRoute } from 'next'
// языки берутся из '@/app/i18n/settings', если будет подключен i18n
const languages: string[] = []

export const createEntries = <T>(
  data: T[],
  createEntry: (item: T, lang: string) => MetadataRoute.Sitemap[number]
): MetadataRoute.Sitemap => {
  const entries: MetadataRoute.Sitemap = []
  for (const item of data) {
    for (const lang of languages) {
      const entry = createEntry(item, lang)
      entries.push({ lastModified: new Date().toISOString(), priority: 0.8, ...entry })
    }
  }
  return entries
}

export const createAlternates = (url: string) => {
  const alternates: Record<string, string> = {}
  for (const altLang of languages) {
    alternates[altLang] = `${process.env.NEXT_PUBLIC_BASE_URL}/${altLang}${url ? `/${url}` : ''}`
  }
  return { languages: alternates }
}
