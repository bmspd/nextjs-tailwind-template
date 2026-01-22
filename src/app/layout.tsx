import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter-var' })

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito-var' })

export const metadata: Metadata = {
  title: 'Template Next.js',
  description: 'Template Next.js',
  other: {
    'apple-mobile-web-app-title': 'Template Next.js',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={clsx(inter.variable, nunito.variable)}>
      <body>{children}</body>
    </html>
  )
}
