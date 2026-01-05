import { ImageResponse } from 'next/og'
import { journalPosts } from '@/data/journal-posts'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = journalPosts.find((p) => p.slug === slug)
  
  // Fallback jika post tidak ketemu (seharusnya tidak terjadi jika di handle page.tsx)
  const title = post?.title || 'Yunggi Alyana Journal'
  const category = post?.category || 'Article'
  const color = post?.color || 'zinc'

  // Mapping warna sederhana
  const colorMap: Record<string, string> = {
    emerald: '#10b981',
    blue: '#3b82f6',
    pink: '#ec4899',
    yellow: '#eab308',
    zinc: '#a1a1aa'
  }
  const accentColor = colorMap[color] || '#a1a1aa'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#050505',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
          padding: '80px',
        }}
      >
        {/* Background Grid Accent */}
        <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, height: '10px',
            backgroundColor: accentColor,
            boxShadow: `0 0 60px 20px ${accentColor}40`
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                marginBottom: '24px',
                color: accentColor,
                fontSize: 24,
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
            }}>
                <span>{category}</span>
                <span>•</span>
                <span>Yunggi Alyana Journal</span>
            </div>

            <h1 style={{ 
                fontSize: 80, 
                fontWeight: 900, 
                lineHeight: 1.1, 
                margin: 0,
                color: '#fff',
                letterSpacing: '-0.03em'
            }}>
              {title}
            </h1>
            
            <p style={{
                fontSize: 32,
                color: '#a1a1aa',
                marginTop: '32px',
                lineHeight: 1.4,
                maxWidth: '90%'
            }}>
                {post?.excerpt?.slice(0, 150)}...
            </p>
        </div>
        
        {/* Footer */}
        <div style={{ position: 'absolute', bottom: 60, left: 80, display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#333', marginRight: 16, border: '2px solid #555' }} />
            <span style={{ fontSize: 24, color: '#71717a' }}>yunggialyana.dev</span>
        </div>
      </div>
    ),
    { ...size }
  )
}