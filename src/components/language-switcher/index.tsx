'use client'

import { languages } from '@/app/i18n/settings'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export const LanguageSwitcher = () => {
  const { lng } = useParams<{ lng: string }>()
  const pathname = usePathname()

  const basePath = pathname.replace(/^\/[a-z]{2}(\/|$)/, '')

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Link
          className={cn('cursor-pointer uppercase', lng !== lang && 'text-gray-500')}
          key={lang}
          href={`/${lang}/${basePath}`}
        >
          {lang}
        </Link>
      ))}
    </div>
  )
}
