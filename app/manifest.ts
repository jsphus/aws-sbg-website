import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AWS Student Builder Group | CTU',
    short_name: 'AWS SBG CTU',
    description:
      'Student-led AWS community at Cebu Technological University. Learn cloud computing, build projects, and develop industry-ready skills.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#8b5cf6',
    icons: [
      { src: '/aws-sdg.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/aws-sdg.png', sizes: '192x192', type: 'image/png' },
      { src: '/aws-sdg.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}