import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yunggialyana.dev';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}