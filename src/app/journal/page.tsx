import type { Metadata } from 'next';
import JournalListContent from '@/components/pages/JournalListContent';

export const metadata: Metadata = {
  title: 'Journal | Yunggi Alyana',
  description: 'Thoughts, tutorials, and insights on Software Engineering, Security, and System Architecture.',
};

export default function JournalPage() {
  return <JournalListContent />;
}