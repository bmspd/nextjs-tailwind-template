'use client'

import { ComponentProps } from 'react'
import NextLink from 'next/link'
import { LinkBase } from './link-base'
import { useParams } from 'next/navigation'

export const Link = ({ children, ...props }: ComponentProps<typeof NextLink>) => {
  const { lng } = useParams<{ lng: string }>()
  return (
    <LinkBase lng={lng} {...props}>
      {children}
    </LinkBase>
  )
}
