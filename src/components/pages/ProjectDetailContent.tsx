"use client";

import React, { Suspense } from 'react';
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, Layers } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown'; 
import { Project } from '@/data/projects'; // IMPORT TIPE

interface Props {
  project: Project; // Menggunakan tipe centralized
}

function ProjectContent({ project }: Props) {
  const searchParams = useSearchParams();

  const fromHome = searchParams.get('from') === 'home';
  const backLink = fromHome ? '/#projects' : '/projects';
  const backLabel = fromHome ? 'Back to Home' : 'Back to All Projects';

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-100 font-sans p-6 md:p-12 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-grid opacity-[0.1] [mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <Link 
            href={backLink} 
            scroll={!fromHome}
            className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          {backLabel}
        </Link>

        {/* Header Project */}
        <div className="mb-12 border-b border-white/5 pb-12">
            <span className={`text-${project.color}-500 font-mono text-sm tracking-widest uppercase mb-4 block`}>
                {project.subtitle}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-zinc-400 text-sm mb-8">
                <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                </div>
                <div className="flex gap-4">
                    {project.github !== "#" && (
                        <Link href={project.github} target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Github size={16} /> Repository
                        </Link>
                    )}
                    {project.demo !== "#" && (
                        <Link href={project.demo} target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                            <ExternalLink size={16} /> Live Demo
                        </Link>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-mono text-zinc-400">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Highlight Box */}
        <div className="mb-12 bg-zinc-900/30 border border-white/5 p-6 rounded-2xl">
            <div className="flex items-center gap-2 text-white font-bold mb-4">
                <Layers className={`text-${project.color}-500`} size={20}/> Key Features
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-600 rounded-full flex-shrink-0" />
                        {feat}
                    </li>
                ))}
            </ul>
        </div>

        {/* Content Render Markdown */}
        <div className="prose prose-invert prose-lg max-w-none text-zinc-300 leading-relaxed 
            prose-headings:text-white prose-a:text-emerald-400 hover:prose-a:text-emerald-300
            prose-ul:list-disc prose-ul:pl-5 prose-li:marker:text-zinc-500">
            <ReactMarkdown>
                {project.content}
            </ReactMarkdown>
        </div>

      </div>
    </div>
  );
}

export default function ProjectDetailContent({ project }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
      <ProjectContent project={project} />
    </Suspense>
  );
}