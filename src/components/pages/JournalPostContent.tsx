"use client";

import React, { Suspense } from 'react';
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown'; 
import { JournalPost } from '@/data/journal-posts'; // IMPORT TIPE

interface Props {
  post: JournalPost; // Menggunakan tipe centralized
}

function JournalContent({ post }: Props) {
  const searchParams = useSearchParams();

  const fromHome = searchParams.get('from') === 'home';
  const backLink = fromHome ? '/#journal' : '/journal';
  const backLabel = fromHome ? 'Back to Home' : 'Back to Journal';

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-100 font-sans p-6 md:p-12 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-grid opacity-[0.1] [mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Tombol Back Dinamis */}
        <Link 
            href={backLink} 
            scroll={!fromHome} 
            className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          {backLabel}
        </Link>

        {/* Header */}
        <div className="mb-10">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
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

            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-tight">
                {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-mono text-zinc-400">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Konten Markdown */}
        <div className="prose prose-invert prose-lg max-w-none text-zinc-300 leading-relaxed 
            prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-img:w-full
            prose-headings:text-white prose-a:text-emerald-400 hover:prose-a:text-emerald-300
            prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10">
            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center text-zinc-500 text-sm">
            <span>Thanks for reading.</span>
            <Link href="/journal" className="hover:text-white transition-colors">Read more articles &rarr;</Link>
        </div>

      </div>
    </div>
  );
}

export default function JournalPostContent({ post }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
      <JournalContent post={post} />
    </Suspense>
  );
}