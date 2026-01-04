export default function Loading() {
  return (
    <div className="bg-[#050505] min-h-screen p-6 md:p-12 relative overflow-hidden">
      
      {/* Header Skeleton */}
      <div className="max-w-4xl mx-auto mb-16 animate-pulse">
        <div className="w-32 h-6 bg-zinc-900/50 rounded-lg mb-8"></div>
        <div className="w-64 h-16 bg-zinc-900/50 rounded-2xl mb-4"></div>
        <div className="w-full max-w-xl h-6 bg-zinc-900/50 rounded-lg"></div>
      </div>

      {/* Blog List Skeleton */}
      <div className="max-w-4xl mx-auto space-y-12 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-b border-white/5 pb-12 last:border-0">
            
            {/* Meta Top */}
            <div className="flex gap-4 mb-4">
               <div className="w-20 h-4 bg-zinc-900/50 rounded"></div>
               <div className="w-24 h-4 bg-zinc-900/50 rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-48">
                {/* Image Left */}
                <div className="col-span-1 bg-zinc-900/50 rounded-2xl h-full border border-white/5"></div>

                {/* Content Right */}
                <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                    <div className="w-3/4 h-8 bg-zinc-800/50 rounded-xl mb-4"></div> {/* Title */}
                    
                    <div className="space-y-3 mb-6">
                        <div className="w-full h-4 bg-zinc-900/50 rounded"></div>
                        <div className="w-5/6 h-4 bg-zinc-900/50 rounded"></div>
                    </div>
                    
                    <div className="flex justify-between mt-auto">
                        <div className="flex gap-2">
                            <div className="w-12 h-6 bg-zinc-900/50 rounded"></div>
                            <div className="w-12 h-6 bg-zinc-900/50 rounded"></div>
                        </div>
                        <div className="w-24 h-6 bg-zinc-900/50 rounded"></div>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}