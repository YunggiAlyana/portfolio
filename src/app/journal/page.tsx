"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock, ArrowRight, Image as ImageIcon, Eye } from 'lucide-react';
import { journalPosts } from '@/data/journal-posts';

export default function JournalPage() {
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
      <div className="max-w-4xl mx-auto relative z-10 mb-16">
        <Link 
            href="/#journal" 
            scroll={false} // MENCEGAH SCROLL OTOMATIS BROWSER
            className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          The Journal<span className="text-pink-500">.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          Thoughts, tutorials, and insights on Software Engineering, Security, and System Architecture.
        </p>
      </div>

      {/* Blog List Loop */}
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {journalPosts.map((post, idx) => {
          const isToggled = toggledImages.has(idx);
          return (
          <article 
            key={idx} 
            className="group relative border-b border-white/5 pb-12 last:border-0"
          >
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                <span className={`text-${post.color}-500 font-bold`}>{post.category}</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <div className="flex items-center gap-2">
                    <Calendar size={12} /> {post.date}
                </div>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <div className="flex items-center gap-2">
                    <Clock size={12} /> {post.readTime}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Image Placeholder */}
                <div 
                   onClick={() => toggleImage(idx)}
                   className="col-span-1 h-48 md:h-full bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden relative cursor-pointer group/image transition-all hover:border-white/20"
                >
                   <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 transform group-hover/image:scale-105 ${isToggled ? 'opacity-0' : 'opacity-100'}`}>
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                      <ImageIcon size={24} className="mb-2 opacity-40 text-zinc-500" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Cover Image</span>
                   </div>
                   
                   <div className={`absolute inset-0 bg-pink-900/20 flex flex-col items-center justify-center transition-all duration-500 transform group-hover/image:scale-105 ${isToggled ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                      <Eye size={32} className="mb-2 text-pink-400" />
                      <span className="text-xs font-bold text-white">Preview</span>
                   </div>
                </div>

                {/* Content */}
                <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors cursor-pointer">
                        <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                        {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="flex items-center gap-1 text-xs text-zinc-500 bg-white/5 px-2 py-1 rounded-md">
                                    <Tag size={10} /> {tag}
                                </span>
                            ))}
                        </div>
                        <Link href={`/journal/${post.slug}`} className="flex items-center gap-2 text-sm font-bold text-white hover:text-pink-400 transition-colors">
                            Read Post <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>
          </article>
        );})}
      </div>

      <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-zinc-600 text-sm relative z-10">
         &copy; {new Date().getFullYear()} Yunggi Alyana. Built with Next.js & Tailwind.
      </div>
    </div>
  );
}