import type { Metadata, Viewport } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import { logger } from '@/lib/logger'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter-var' })

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito-var' })

export const metadata: Metadata = {
  title: 'Template Next.js',
  description: 'Template Next.js',
  other: {
    'apple-mobile-web-app-title': 'Template Next.js',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  logger.info('ROOT LAYOUT')
  return (
    <html lang="en" data-scroll-behavior="smooth" className={clsx(inter.variable, nunito.variable)}>
      <body>{children}</body>
    </html>
  )
}
