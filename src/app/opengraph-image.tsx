import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Yunggi Alyana - Full Stack & Security Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505',
          color: 'white',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Mockup Terminal Window Styling */}
          <div style={{
            display: 'flex',
            border: '2px solid #333',
            borderRadius: '16px',
            padding: '40px 60px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            boxShadow: '0 0 80px rgba(16, 185, 129, 0.15)',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h1 style={{ fontSize: 72, fontWeight: 'bold', margin: 0, letterSpacing: '-0.05em' }}>
              Yunggi Alyana<span style={{ color: '#10b981' }}>.</span>
            </h1>
            <p style={{ fontSize: 32, color: '#a1a1aa', marginTop: 20 }}>
              Full Stack Engineer & Security Researcher
            </p>
            <div style={{ display: 'flex', marginTop: 40, gap: '20px', fontSize: 24, color: '#52525b' }}>
               <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>Next.js</span>
               <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>Security</span>
               <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>System Design</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}