import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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
  title: {
    default: "Yunggi Alyana | Full Stack & Security Enthusiast",
    template: "%s | Yunggi Alyana" 
  },
  description: "Portfolio of Yunggi Alyana Rahman. Former Retail Leader turned Software Engineer. Specializing in Next.js, Microservices, and Web Security.",
  keywords: ["Yunggi Alyana", "Software Engineer", "Next.js", "Web Security", "Depok", "Portfolio", "Full Stack Developer", "Security Researcher"],
  authors: [{ name: "Yunggi Alyana Rahman", url: "https://yunggialyana.dev" }],
  creator: "Yunggi Alyana",
  
  openGraph: {
    title: "Yunggi Alyana | Full Stack & Security Enthusiast",
    description: "Explorer of code and vulnerabilities. Welcome to my digital lab.",
    url: "https://yunggialyana.dev",
    siteName: "Yunggi Alyana Portfolio",
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
  "url": "https://yunggialyana.dev",
  "image": "https://yunggialyana.dev/me.jpeg",
  "jobTitle": "Software Engineer",
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
  "knowsAbout": ["Next.js", "Web Security", "React", "System Architecture", "Machine Learning"]
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