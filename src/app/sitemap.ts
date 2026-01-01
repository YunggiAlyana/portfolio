import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yunggialyana.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // {
    //   url: 'https://yunggialyana.dev/about', 
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.8,
    // },
  ]
}