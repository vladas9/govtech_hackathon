import type { Metadata } from 'next'
import './globals.css'

import { Onest } from 'next/font/google'
import { ReactQueryProvider } from '@/lib/react-query-provider'

const onest = Onest({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-onest',
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${onest.variable}`}>
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
