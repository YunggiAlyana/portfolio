import { MetadataRoute } from 'next';
import { journalPosts } from '@/data/journal-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  // Gunakan env variable, fallback ke domain utama jika tidak ada
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yunggialyana.dev';

  const routes = ['', '/journal', '/projects'].map((route) => ({ // Tambahkan /projects juga
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const posts = journalPosts.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: new Date(post.date), 
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...posts];
}