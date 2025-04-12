import { fallbackLng } from '@/app/i18n/settings'
import Link from 'next/link'
import { ComponentProps } from 'react'
export const LinkBase = ({
  lng = fallbackLng,
  href,
  children,
  ...props
}: ComponentProps<typeof Link> & { lng?: string }) => {
  return (
    <Link {...props} href={`/${lng}/${href}`}>
      {children}
    </Link>
  )
}
