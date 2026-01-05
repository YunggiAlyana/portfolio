import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { journalPosts } from '@/data/journal-posts';
import JournalPostContent from '@/components/pages/JournalPostContent'; // Pastikan file ini sudah dibuat dari chat sebelumnya

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Generate Metadata Dinamis (Server-side)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Yunggi Alyana Journal`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date, // Pastikan format tanggal valid jika memungkinkan
        authors: ['Yunggi Alyana'],
    }
  };
}

// 2. Server Component Utama
export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema Markup (JSON-LD) untuk Artikel Blog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://yunggialyana.dev/journal/${post.slug}/opengraph-image`, // URL Image otomatis
    "datePublished": post.date, 
    "author": {
      "@type": "Person",
      "name": "Yunggi Alyana",
      "url": "https://yunggialyana.dev"
    },
    "keywords": post.tags.join(", "),
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://yunggialyana.dev/journal/${post.slug}`
    }
  };

  return (
    <>
      {/* Inject JSON-LD Script untuk Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Render UI Component (Client Side) */}
      <JournalPostContent post={post} />
    </>
  );
}