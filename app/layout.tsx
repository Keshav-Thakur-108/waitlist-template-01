import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-Powered Web Summarizer | Join the Waitlist',
  description: 'Instantly summarize any webpage with our Chrome extension. Join the waitlist for early access to our AI-powered web summarizer!',
  keywords: 'AI, web summarizer, Chrome extension, productivity, waitlist',
  openGraph: {
    title: 'AI-Powered Web Summarizer | Join the Waitlist',
    description: 'Instantly summarize any webpage with our Chrome extension. Join the waitlist for early access!',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI-Powered Web Summarizer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Web Summarizer | Join the Waitlist',
    description: 'Instantly summarize any webpage with our Chrome extension. Join the waitlist for early access!',
    images: ['/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

