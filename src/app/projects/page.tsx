import type { Metadata } from 'next';
import ProjectListContent from '@/components/pages/ProjectListContent';

export const metadata: Metadata = {
  title: 'Projects | Yunggi Alyana',
  description: 'Collection of Full Stack Engineering and Machine Learning Integration projects by Yunggi Alyana.',
};

export default function ProjectsPage() {
  return <ProjectListContent />;
}