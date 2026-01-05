import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectDetailContent from '@/components/pages/ProjectDetailContent';

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Generate Metadata Dinamis
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Cari project (Exact match atau Case-insensitive match)
  const project = projects.find((p) => p.slug === slug) || 
                  projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Yunggi Alyana Projects`,
    description: project.desc,
    openGraph: {
        title: project.title,
        description: project.desc,
        // Jika nanti mau tambah gambar OG khusus project, bisa di sini
    }
  };
}

// 2. Server Component Wrapper
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  // Logic pencarian data yang Robust
  const project = projects.find((p) => p.slug === slug) || 
                  projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!project) {
    notFound();
  }

  // Render Client Component
  return <ProjectDetailContent project={project} />;
}