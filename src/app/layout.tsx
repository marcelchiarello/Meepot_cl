import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Meepot - Modern Event Management',
  description: 'Plan and manage your events with ease. From intimate dinners to large celebrations.',
  keywords: 'event management, party planning, cost splitting, rsvp, social gatherings',
  authors: [{ name: 'Meepot Team' }],
  openGraph: {
    title: 'Meepot - Modern Event Management',
    description: 'Plan and manage your events with ease',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}