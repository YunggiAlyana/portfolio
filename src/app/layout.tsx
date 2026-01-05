import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://yunggialyana.dev'), 
  alternates: {
    canonical: '/', // Best practice SEO
  },
  title: {
    default: "Yunggi Alyana (Yunggi Alyana Rahman) | Full Stack & Security Researcher",
    template: "%s | Yunggi Alyana Rahman" 
  },
  description: "Portfolio of Yunggi Alyana Rahman. Former Retail Leader turned Software Engineer. Specializing in Next.js, Microservices, and Web Security.",
  keywords: [
    "Yunggi Alyana", 
    "Yunggi Alyana Rahman", 
    "yunggialyana",         
    "Software Engineer", 
    "Next.js", 
    "Web Security", 
    "Depok", 
    "Portfolio", 
    "Full Stack Developer", 
    "Security Researcher"
  ],
  authors: [{ name: "Yunggi Alyana Rahman", url: "https://yunggialyana.dev" }],
  creator: "Yunggi Alyana Rahman",
  
  openGraph: {
    title: "Yunggi Alyana Rahman | Full Stack & Security Researcher",
    description: "Explorer of code and vulnerabilities. Welcome to my digital lab.",
    url: "https://yunggialyana.dev",
    siteName: "Yunggi Alyana Rahman Portfolio",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yunggi Alyana Rahman",
  "alternateName": ["Yunggi Alyana", "yunggialyana", "Yunggi A. Rahman"],
  "url": "https://yunggialyana.dev",
  "image": "https://yunggialyana.dev/me.jpeg",
  "jobTitle": "Software Engineer & Security Researcher",
  "worksFor": {
    "@type": "Organization",
    "name": "Indomaret Group",
    "sameAs": "https://indomaret.co.id"
  },
  "sameAs": [
    "https://www.linkedin.com/in/yunggialyana",
    "https://github.com/yunggialyana",
    "https://twitter.com/yunggialyana",
    "https://www.instagram.com/yunggialyana",
    "https://www.dicoding.com/users/yunggialyana",
    "https://www.tiktok.com/@yunggialyana",
    "https://www.youtube.com/@yunggialyana",
    "https://www.facebook.com/yunggialyana",
    "https://stockbit.com/Yunggi"
  ],
  "knowsAbout": ["Next.js", "Web Security", "React", "System Architecture", "Machine Learning", "OSINT"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}> 
      <body className="bg-neutral-950 text-neutral-200 antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}