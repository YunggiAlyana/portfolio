import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin-recovery',
    },
    sitemap: 'https://yunggialyana.dev/sitemap.xml',
  }
}