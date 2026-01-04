export default function Loading() {
  return (
    <div className="bg-[#050505] min-h-screen flex items-center justify-center p-4">
      {/* Container Skeleton yang meniru layout Bento Grid Home:
        - Mobile: Grid 2 kolom (sesuai request terakhir)
        - Desktop: Grid 4 kolom
      */}
      <div className="w-full max-w-5xl h-full md:h-auto grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-3 md:gap-4 animate-pulse">
        
        {/* 1. Identity Skeleton (Top Center/Left) */}
        {/* Desktop: Col 2-3, Row 1 */}
        <div className="col-span-2 md:col-start-2 md:col-span-2 md:row-start-1 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] h-32 md:h-full"></div>

        {/* 2. Face Card Skeleton (Portrait Left) */}
        {/* Desktop: Col 1, Row 1-2 */}
        <div className="col-span-1 row-span-2 md:col-start-1 md:row-start-1 md:row-span-2 bg-zinc-800/50 border border-white/5 rounded-[2.5rem] aspect-[3/4] md:aspect-auto h-full"></div>

        {/* 3. About Skeleton (Top Right) */}
        {/* Desktop: Col 4, Row 1 */}
        <div className="col-span-1 md:col-start-4 md:row-start-1 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] h-32 md:h-full"></div>

        {/* 4. Skills Skeleton (Tall Right) */}
        {/* Desktop: Col 4, Row 2-3 */}
        <div className="col-span-2 md:col-span-1 md:col-start-4 md:row-start-2 md:row-span-2 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] h-48 md:h-full"></div>

        {/* 5. Projects Skeleton (Wide Center) */}
        {/* Desktop: Col 2-3, Row 2 */}
        <div className="col-span-2 md:col-span-2 md:col-start-2 md:row-start-2 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] h-32 md:h-full"></div>

        {/* 6. Journal Skeleton (Bottom Left) */}
        {/* Desktop: Col 1, Row 3 */}
        <div className="col-span-1 md:col-span-1 md:col-start-1 md:row-start-3 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] h-32 md:h-full"></div>

        {/* 7. Contact Skeleton (Bottom Center) */}
        {/* Desktop: Col 2-3, Row 3 */}
        <div className="col-span-2 md:col-span-2 md:col-start-2 md:row-start-3 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] h-32 md:h-full"></div>

      </div>
    </div>
  );
}