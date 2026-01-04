import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { journalPosts } from "@/data/journal-posts";
import type { Metadata } from "next";

// 1. Generate Metadata Dinamis (Biar SEO-nya jalan per artikel)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = journalPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: ["Yunggi Alyana"],
      publishedTime: post.date, // Format date sebaiknya ISO 8601 di real app, tapi string gpp buat display
    },
  };
}

// 2. Render Halaman Artikel
export default function JournalPostPage({ params }: { params: { slug: string } }) {
  const post = journalPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // Lari ke halaman 404 kalau slug gak ketemu
  }

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-100 font-sans selection:bg-pink-500/30">
      
      {/* Progress Bar (Optional - bisa ditambah nanti) */}
      
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Back Button */}
        <Link 
            href="/journal" 
            className="inline-flex items-center text-zinc-500 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>

        {/* Header Artikel */}
        <header className="mb-16 border-b border-white/5 pb-12">
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

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
            {post.title}
          </h1>

          <div className="flex gap-2">
            {post.tags.map((tag, i) => (
               <span key={i} className="text-xs border border-white/10 px-2 py-1 rounded text-zinc-400">
                 #{tag}
               </span>
            ))}
          </div>
        </header>

        {/* CONTENT RENDERER */}
        <article 
          className="prose prose-invert prose-zinc max-w-none 
          prose-headings:font-bold prose-headings:text-white 
          prose-a:text-pink-400 prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl prose-img:border prose-img:border-white/10
          prose-code:text-blue-400 prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* Footer Artikel */}
        <div className="mt-20 pt-10 border-t border-white/5">
           <p className="text-zinc-500 italic text-sm text-center">
             Thanks for reading. Connecting dots between Security & Engineering.
           </p>
        </div>

      </div>
    </div>
  );
}