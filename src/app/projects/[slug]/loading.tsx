export default function Loading() {
  return (
    <div className="bg-[#050505] min-h-screen p-6 md:p-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto animate-pulse">
        
        {/* Back Button */}
        <div className="w-32 h-6 bg-zinc-900/50 rounded-lg mb-8"></div>

        {/* Header Project */}
        <div className="mb-12 border-b border-white/5 pb-12">
            <div className="w-24 h-4 bg-zinc-900/50 rounded mb-4"></div> {/* Subtitle */}
            <div className="w-3/4 h-16 bg-zinc-900/50 rounded-2xl mb-6"></div> {/* Title Big */}

            <div className="flex gap-6 mb-8">
                <div className="w-32 h-5 bg-zinc-900/50 rounded"></div>
                <div className="w-32 h-5 bg-zinc-900/50 rounded"></div>
            </div>

            <div className="flex gap-2">
                <div className="w-20 h-8 bg-zinc-900/50 rounded-full"></div>
                <div className="w-20 h-8 bg-zinc-900/50 rounded-full"></div>
                <div className="w-20 h-8 bg-zinc-900/50 rounded-full"></div>
            </div>
        </div>

        {/* Highlight Box Skeleton */}
        <div className="mb-12 bg-zinc-900/30 border border-white/5 p-6 rounded-2xl h-48">
            <div className="w-32 h-6 bg-zinc-800/50 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full h-4 bg-zinc-800/50 rounded"></div>
                <div className="w-full h-4 bg-zinc-800/50 rounded"></div>
                <div className="w-full h-4 bg-zinc-800/50 rounded"></div>
                <div className="w-full h-4 bg-zinc-800/50 rounded"></div>
            </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-4">
            <div className="w-full h-4 bg-zinc-900/50 rounded"></div>
            <div className="w-full h-4 bg-zinc-900/50 rounded"></div>
            <div className="w-5/6 h-4 bg-zinc-900/50 rounded"></div>
            <div className="w-full h-4 bg-zinc-900/50 rounded mt-8"></div>
            <div className="w-4/5 h-4 bg-zinc-900/50 rounded"></div>
        </div>

      </div>
    </div>
  );
}