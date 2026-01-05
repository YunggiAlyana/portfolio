import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { journalPosts } from '@/data/journal-posts';
import JournalPostContent from '@/components/pages/JournalPostContent';

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Generate Metadata Dinamis di Server
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Yunggi Alyana Journal`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: ['Yunggi Alyana']
    }
  };
}

// 2. Server Component Fetch Logic
export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Pass data 'post' ke Client Component
  return <JournalPostContent post={post} />;
}