export default function Loading() {
  return (
    <div className="bg-[#050505] min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div className="max-w-3xl mx-auto animate-pulse">
        
        {/* Back Button */}
        <div className="w-32 h-6 bg-zinc-900/50 rounded-lg mb-8"></div>

        {/* Header Journal */}
        <div className="mb-10">
            {/* Meta Row */}
            <div className="flex gap-4 mb-6">
                <div className="w-16 h-4 bg-zinc-900/50 rounded"></div>
                <div className="w-24 h-4 bg-zinc-900/50 rounded"></div>
                <div className="w-20 h-4 bg-zinc-900/50 rounded"></div>
            </div>

            {/* Title Big */}
            <div className="w-full h-12 bg-zinc-900/50 rounded-2xl mb-6"></div>
            <div className="w-2/3 h-12 bg-zinc-900/50 rounded-2xl mb-6"></div>

            {/* Tags */}
            <div className="flex gap-2">
                <div className="w-16 h-6 bg-zinc-900/50 rounded-full"></div>
                <div className="w-16 h-6 bg-zinc-900/50 rounded-full"></div>
            </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 mt-12">
            <div className="space-y-3">
                <div className="w-full h-4 bg-zinc-900/50 rounded"></div>
                <div className="w-full h-4 bg-zinc-900/50 rounded"></div>
                <div className="w-11/12 h-4 bg-zinc-900/50 rounded"></div>
            </div>

            <div className="w-full h-64 bg-zinc-900/50 rounded-xl border border-white/5 my-8"></div>

            <div className="space-y-3">
                <div className="w-full h-4 bg-zinc-900/50 rounded"></div>
                <div className="w-10/12 h-4 bg-zinc-900/50 rounded"></div>
                <div className="w-full h-4 bg-zinc-900/50 rounded"></div>
            </div>
        </div>
        
      </div>
    </div>
  );
}