import { ComponentProps } from 'react'
import NextLink from 'next/link'
import { getT } from '@/app/i18n'
import { LinkBase } from './link-base'

export const Link = async ({ children, ...props }: ComponentProps<typeof NextLink>) => {
  const { i18n } = await getT()
  return (
    <LinkBase lng={i18n.resolvedLanguage} {...props}>
      {children}
    </LinkBase>
  )
}
