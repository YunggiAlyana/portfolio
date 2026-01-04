export default function Loading() {
  return (
    <div className="bg-[#050505] min-h-screen p-6 md:p-12 relative overflow-hidden">
      
      {/* Header Skeleton */}
      <div className="max-w-6xl mx-auto mb-16 animate-pulse">
        <div className="w-32 h-6 bg-zinc-900/50 rounded-lg mb-8"></div> {/* Back Button */}
        <div className="w-64 h-16 bg-zinc-900/50 rounded-2xl mb-4"></div> {/* Title */}
        <div className="w-full max-w-xl h-6 bg-zinc-900/50 rounded-lg"></div> {/* Desc */}
      </div>

      {/* Projects Grid Skeleton */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-3xl p-6 md:p-8 h-auto flex flex-col">
            
            {/* Image Placeholder */}
            <div className="w-full h-64 bg-zinc-800/50 rounded-2xl mb-8"></div>

            {/* Title & Meta */}
            <div className="flex justify-between items-start mb-4">
              <div className="w-full">
                <div className="w-24 h-4 bg-zinc-800/50 rounded mb-3"></div> {/* Subtitle */}
                <div className="w-3/4 h-8 bg-zinc-800/50 rounded-xl mb-3"></div> {/* Title */}
                <div className="w-32 h-4 bg-zinc-800/50 rounded"></div> {/* Date */}
              </div>
              <div className="w-10 h-10 bg-zinc-800/50 rounded-full flex-shrink-0"></div> {/* Github Icon */}
            </div>

            {/* Desc Lines */}
            <div className="space-y-3 mb-6">
               <div className="w-full h-4 bg-zinc-800/50 rounded"></div>
               <div className="w-full h-4 bg-zinc-800/50 rounded"></div>
               <div className="w-2/3 h-4 bg-zinc-800/50 rounded"></div>
            </div>

            {/* Footer Tags */}
            <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                <div className="flex gap-2">
                   <div className="w-16 h-6 bg-zinc-800/50 rounded"></div>
                   <div className="w-16 h-6 bg-zinc-800/50 rounded"></div>
                </div>
                <div className="w-32 h-6 bg-zinc-800/50 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}