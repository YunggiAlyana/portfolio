"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { ArrowLeft, Github, Calendar, Image as ImageIcon, Eye, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects'; 

export default function ProjectListContent() {
  const [toggledImages, setToggledImages] = useState<Set<number>>(new Set());

  const toggleImage = (index: number) => {
    setToggledImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-100 font-sans p-6 md:p-12 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-grid opacity-[0.1] [mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)]" />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto relative z-10 mb-16">
        <Link 
            href="/#projects" 
            scroll={false} 
            className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          All Projects<span className="text-emerald-500">.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          A collection of my work in Full Stack Engineering, Machine Learning Integration, and System Architecture.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, idx) => {
          const isToggled = toggledImages.has(idx);
          return (
          <div 
            key={idx} 
            className="group bg-zinc-900/30 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-zinc-900/50 hover:border-white/20 transition-all hover:-translate-y-1 flex flex-col"
          >
            {/* Image Placeholder */}
            <div 
               onClick={() => toggleImage(idx)}
               className="w-full h-64 rounded-2xl mb-8 border border-white/5 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative group/image transition-all"
            >
               <div className={`absolute inset-0 bg-zinc-900/80 flex flex-col items-center justify-center transition-all duration-500 transform group-hover/image:scale-105 ${isToggled ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  <ImageIcon size={32} className="mb-2 opacity-50 text-zinc-500" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600">Click to Preview</span>
               </div>
               <div className={`absolute inset-0 bg-emerald-900/20 flex flex-col items-center justify-center transition-all duration-500 transform group-hover/image:scale-105 ${isToggled ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                  <Eye size={40} className="mb-3 text-emerald-400" />
                  <span className="text-sm font-bold text-white">Live Preview Mode</span>
               </div>
            </div>

            {/* Title & Link */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className={`text-${project.color}-500 font-mono text-xs tracking-widest uppercase mb-2 block`}>
                  {project.subtitle}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h2>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                   <Calendar size={14} />
                   <span>{project.date}</span>
                </div>
              </div>
              
              {project.github !== "#" && (
                <Link href={project.github} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors flex-shrink-0">
                   <Github size={20} />
                </Link>
              )}
            </div>

            <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base line-clamp-3">
              {project.desc}
            </p>

            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 bg-white/5 rounded text-xs text-zinc-500">
                        {tag}
                        </span>
                    ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                    View Case Study <ArrowRight size={14} />
                </Link>
            </div>
          </div>
        );})}
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-zinc-600 text-sm relative z-10">
         &copy; {new Date().getFullYear()} Yunggi Alyana. Built with Next.js & Tailwind.
      </div>
    </div>
  );
}