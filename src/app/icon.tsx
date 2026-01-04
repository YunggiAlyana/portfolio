import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: '#0a0a0a', // Warna background tema lu
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '4px', // Sedikit rounded biar modern, set 0 kalau mau kotak tajam
          fontFamily: 'monospace', // Font terminal
          fontWeight: 900,
        }}
      >
        Y_
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}