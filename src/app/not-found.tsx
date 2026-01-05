import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg">
        <h1 className="text-[150px] font-bold text-white/5 leading-none select-none">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-[-40px]">Page Not Found</h2>
        <p className="text-zinc-400 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </div>
  )
}