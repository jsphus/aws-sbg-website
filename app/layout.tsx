import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Press_Start_2P } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aws-sbg-ctu.vercel.app'),
  title: {
    default: 'AWS Student Builder Group | CTU',
    template: '%s | AWS SBG CTU',
  },
  description:
    'Student-led AWS community at Cebu Technological University. Learn cloud computing, build projects, and develop industry-ready skills.',
  keywords: [
    'AWS',
    'cloud computing',
    'student group',
    'CTU',
    'Cebu Technological University',
    'cloud skills',
    'AWS Educate',
  ],
  authors: [{ name: 'AWS Student Builder Group CTU' }],
    openGraph: {
    title: 'AWS Student Builder Group | CTU',
    description:
      'Student-led AWS community at Cebu Technological University.',
    url: 'https://aws-sbg-ctu.vercel.app',
    siteName: 'AWS SBG CTU',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/aws-sdg.png', width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Student Builder Group | CTU',
    description:
      'Student-led AWS community at Cebu Technological University.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/aws-sdg.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/aws-sdg.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/aws-sdg.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: '/aws-sdg.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#8b5cf6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${pressStart.variable} bg-background dark`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
