"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa6";
import { VscTerminal } from "react-icons/vsc";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    console.clear();
    console.log("%cSYSTEM SECURE.", "color: #10b981; font-weight: bold; font-size: 14px;");
    console.log("%cLooking for a dev? Email me: me@yunggialyana.dev", "color: #a3a3a3;");
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col bg-[#050505] text-neutral-200 overflow-x-hidden selection:bg-emerald-500/30 font-sans">
      
      <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="fixed left-0 right-0 -top-20 z-0 m-auto h-[400px] w-[400px] rounded-full bg-emerald-500/15 blur-[120px] pointer-events-none"></div>

      <div className="z-10 flex-1 flex flex-col items-center justify-center px-4 py-20 w-full max-w-3xl mx-auto space-y-10">
        
        <div className="inline-flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-900/80 px-6 py-2 text-xs font-bold tracking-[0.2em] text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-500/10 transition-all hover:scale-105 hover:border-emerald-500/50 cursor-default">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          AVAILABLE FOR HIRE
        </div>

        <div className="space-y-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
            Yunggi Alyana<span className="text-emerald-500">.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-neutral-400 text-sm md:text-base font-mono tracking-tight">
            <span className="hover:text-emerald-400 transition-colors cursor-default">Full Stack Developer</span>
            <span className="hidden md:inline text-neutral-800">/</span>
            <span className="hover:text-emerald-400 transition-colors cursor-default">Security Researcher</span>
          </div>
        </div>

        <p className="max-w-xl text-center text-neutral-500 text-sm md:text-base leading-7 font-normal">
          Crafting secure & scalable digital experiences. Specialized in <span className="text-neutral-200 font-medium">Next.js Architecture</span> and <span className="text-neutral-200 font-medium">Vulnerability Assessment</span>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 w-full mt-6">
          <SocialLink href="https://github.com/yunggialyana" icon={<FaGithub size={20} />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/yunggialyana" icon={<FaLinkedin size={20} />} label="LinkedIn" />
          <EmailButton />
        </div>
      </div>

      <footer className="z-10 w-full py-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[10px] md:text-xs text-neutral-600 font-mono border border-transparent hover:border-neutral-900 transition-colors cursor-default">
          <VscTerminal size={14} />
          <span>v1.0.0 • Secure System</span>
        </div>
      </footer>
    </main>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex items-center gap-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 px-5 py-3 text-sm font-medium text-neutral-400 transition-all hover:border-emerald-500/30 hover:bg-neutral-900 hover:text-white active:scale-95"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function EmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "me@yunggialyana.dev"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <button
      onClick={handleCopy}
      className={`group flex items-center gap-2.5 rounded-lg border px-5 py-3 text-sm font-medium transition-all active:scale-95 cursor-pointer ${
        copied 
          ? "border-emerald-500/50 bg-emerald-950/10 text-emerald-400" 
          : "border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-emerald-500/30 hover:bg-neutral-900 hover:text-white"
      }`}
    >
      {copied ? <FaCheck size={16} /> : <FaEnvelope size={18} />}
      <span>{copied ? "Copied!" : "Email Me"}</span>
    </button>
  );
}