import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { geist, geistMono, instrumentSerif } from '@/lib/fonts'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.perfmonk.in'),
  title: {
    default: 'PerfMonk — AI-Powered Performance Engineering',
    template: '%s | PerfMonk',
  },
  description:
    'PerfMonk automates your entire performance testing lifecycle with AI agents. Works as a platform or as a bot inside Slack, Teams, and Mattermost.',
  openGraph: {
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_US',
    siteName: 'PerfMonk',
  },
  twitter: { card: 'summary_large_image', creator: '@perfmonk' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-[#0c0c0c] text-[#f2f2f2] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
