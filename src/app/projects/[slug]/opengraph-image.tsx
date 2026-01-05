import { ImageResponse } from 'next/og'
import { projects } from '@/data/projects'
 
export const runtime = 'edge'
export const alt = 'Project Detail'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  
  // Fallback jika project tidak ketemu
  if (!project) {
    return new ImageResponse(
      (
        <div style={{ background: '#050505', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          Project Not Found
        </div>
      )
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background Gradients */}
        <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '600px', height: '600px', background: 'rgba(16, 185, 129, 0.2)', filter: 'blur(100px)', borderRadius: '50%' }} />
        
        {/* Subtitle / Tag */}
        <div style={{ fontSize: 24, color: '#10b981', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '4px' }}>
          PROJECT SHOWCASE
        </div>

        {/* Title */}
        <div style={{ fontSize: 80, fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: 30 }}>
          {project.title}
        </div>

        {/* Desc */}
        <div style={{ fontSize: 32, color: '#a1a1aa', maxWidth: '800px', lineHeight: 1.4 }}>
          {project.subtitle}
        </div>

        {/* Footer */}
        <div style={{ position: 'absolute', bottom: 80, left: 80, display: 'flex', alignItems: 'center', gap: 20 }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="https://yunggialyana.dev/me.jpeg" width="60" height="60" style={{ borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 16 }}>
                 <span style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Yunggi Alyana</span>
                 <span style={{ color: '#52525b', fontSize: 18 }}>Software Engineer</span>
              </div>
           </div>
        </div>
      </div>
    ),
    { ...size }
  )
}