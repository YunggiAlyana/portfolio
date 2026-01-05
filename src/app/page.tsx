import type { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'Yunggi Alyana - Full Stack & Security Engineer',
  description: 'Portfolio of Yunggi Alyana, a Full Stack Engineer specialized in Next.js, Secure Architecture, and Scalable Systems.',
};

export default function Home() {
  return <HomeContent />;
}