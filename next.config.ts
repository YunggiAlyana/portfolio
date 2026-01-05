import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Prioritaskan AVIF
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Izinkan gambar dari sumber luar (jika ada)
      },
    ],
  },

  // 3. Kompresi & Security Basic
  compress: true,
  poweredByHeader: false,

  // 4. Security Headers (PENTING untuk Security Engineer)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Anti-Clickjacking
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Anti-MIME Sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy', // Batasi akses fitur browser
            value: "camera=(), microphone=(), geolocation=()"
          }
        ],
      },
    ];
  },
};

export default nextConfig;