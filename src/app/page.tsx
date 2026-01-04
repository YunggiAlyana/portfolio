"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  User, Briefcase, Mail, Github, Linkedin, 
  ArrowDown, Sparkles, PenTool, Terminal, MapPin, Calendar 
} from 'lucide-react';
import Link from "next/link";
import Image from "next/image"; 

// --- IMPORT DATA & KOMPONEN ---
import { journalPosts } from '@/data/journal-posts';
import { projects } from '@/data/projects';
import { timelineData } from '@/data/timeline'; 
import ContactForm from "@/components/ContactForm";

// --- Types & Refs ---
type SectionRefs = {
  hero: React.RefObject<HTMLDivElement | null>;
  about: React.RefObject<HTMLDivElement | null>;
  services: React.RefObject<HTMLDivElement | null>;
  projects: React.RefObject<HTMLDivElement | null>;
  journal: React.RefObject<HTMLDivElement | null>;
  contact: React.RefObject<HTMLDivElement | null>;
  [key: string]: React.RefObject<HTMLDivElement | null>;
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const sectionsRef: SectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    journal: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  // Effect 1: Parallax Mouse
  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      frameId = requestAnimationFrame(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth) * 10 - 5,
          y: (e.clientY / window.innerHeight) * 10 - 5,
        });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Effect 2: Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Hysteresis Logic
      if (!isScrolled && scrollY > 100) {
        setIsScrolled(true);
      } else if (isScrolled && scrollY < 80) { 
        setIsScrolled(false);
      }

      const scrollPosition = scrollY + window.innerHeight / 3;
      if (scrollPosition < (sectionsRef.about.current?.offsetTop || 0)) setActiveSection('hero');
      else if (scrollPosition < (sectionsRef.services.current?.offsetTop || 0)) setActiveSection('about');
      else if (scrollPosition < (sectionsRef.projects.current?.offsetTop || 0)) setActiveSection('services');
      else if (scrollPosition < (sectionsRef.journal.current?.offsetTop || 0)) setActiveSection('projects');
      else if (scrollPosition < (sectionsRef.contact.current?.offsetTop || 0)) setActiveSection('journal');
      else setActiveSection('contact');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Effect 3: Handle URL Hash
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1); 
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            window.history.replaceState(null, '', window.location.pathname); 
          }, 1000);
        }
      }, 100);
    }
  }, []);

  // Effect 4: Console Easter Egg 🟢
  useEffect(() => {
    console.log(
      "%c SYSTEM SECURE %c \n\nLooking for a Full Stack Engineer? Email me at: me@yunggialyana.dev",
      "color: #10b981; font-weight: bold; font-size: 24px; background: #050505; padding: 10px; border: 2px solid #10b981; border-radius: 4px;",
      "color: #a1a1aa; font-size: 14px; margin-top: 5px;"
    );
  }, []);

  const scrollToSection = (key: string) => {
    sectionsRef[key].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const latestJournal = journalPosts.slice(0, 2);
  const latestProjects = projects.slice(0, 2);

  return (
    <div className="bg-[#050505] text-zinc-100 font-sans selection:bg-emerald-500/30 min-h-screen relative overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className={`absolute inset-0 bg-grid z-[-1] [mask-image:linear-gradient(to_bottom,black_20%,transparent_90%)] transition-opacity duration-500
            ${isScrolled ? 'opacity-0' : 'opacity-[0.4]'}
          `} 
        />
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-out will-change-transform"
          style={{ transform: `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 0)` }}
        >
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-emerald-900/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-900/10 rounded-full blur-[120px]" />
        </div>
      </div>

      {/* --- NAVIGATION SYSTEM --- */}
      <nav 
        className={`fixed top-0 left-0 z-50 flex flex-col transition-all duration-[800ms] ease-[cubic-bezier(0.2,1,0.2,1)] will-change-transform
          ${isScrolled 
            ? 'h-[80px] w-full bg-zinc-950/90 border-b md:border-b-0 md:border-r border-white/5 backdrop-blur-md md:h-full md:w-[280px]' 
            : 'w-full h-full items-center justify-center p-4'
          }
        `}
      >
        <div 
          className={`absolute inset-0 bg-grid pointer-events-none z-0 transition-opacity duration-500
            ${isScrolled ? 'opacity-[0.3]' : 'opacity-0'}
          `} 
        />

        <div 
          className={`w-full transition-all duration-[800ms] ease-[cubic-bezier(0.2,1,0.2,1)] flex relative z-10
            ${isScrolled 
              ? 'flex-row items-center px-4 h-full gap-4 md:flex-col md:px-6 md:py-10 md:gap-0' 
              : 'flex-col max-w-5xl items-center'
            }
          `}
        >
          {/* BENTO LAYOUT CONTAINER */}
          <div 
            className={`transition-all duration-[800ms] ease-[cubic-bezier(0.2,1,0.2,1)] w-full
              ${isScrolled 
                ? 'flex flex-row items-center gap-2 overflow-x-auto no-scrollbar md:grid md:grid-cols-1 md:gap-3 md:overflow-visible' 
                : 'grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-3 md:gap-4 grid-flow-dense' 
              }
            `}
          >
            {/* 1. IDENTITY CARD (Header) */}
            <div 
              onClick={() => scrollToSection('hero')}
              className={`group relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-[2.5rem] cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.2,1,0.2,1)]
                ${isScrolled 
                  ? 'p-2 flex-shrink-0 flex items-center border-transparent bg-transparent hover:bg-white/5 md:p-3 md:mb-6 md:w-full md:gap-4' 
                  // Desktop Grid: Col 2-3 (Width 2), Row 1
                  : 'col-span-2 p-6 md:px-10 md:py-6 flex flex-col justify-center shadow-2xl md:col-start-2 md:col-span-2 md:row-start-1'
                }
              `}
            >
              <div className={`flex transition-all duration-700 ${isScrolled ? 'flex-row items-center gap-3 md:gap-4' : 'flex-row items-center gap-6'}`}>
                
                {/* --- AVATAR LOGIC --- */}
                <div className={`overflow-hidden border border-white/10 shadow-xl transition-all duration-700 flex items-center justify-center relative
                    ${isScrolled 
                        ? 'w-10 h-10 bg-zinc-800 rounded-full' // SIDEBAR: Bulat + Foto
                        : 'w-16 h-16 bg-emerald-500/10 rounded-3xl' // HOME: Kotak Tumpul + Icon Terminal
                    }
                `}>
                   {isScrolled ? (
                      <Image 
                        src="/me.jpeg" 
                        alt="Yunggi Alyana" 
                        fill 
                        className="object-cover"
                        sizes="40px" // FIX: Ukuran kecil untuk sidebar
                      />
                   ) : (
                      <Terminal className="text-emerald-500 w-8 h-8" />
                   )}
                </div>
                {/* --------------------- */}

                <div className="block">
                  <h1 className={`font-bold text-white transition-all duration-700 ${isScrolled ? 'text-sm md:text-lg' : 'text-2xl md:text-3xl tracking-tighter'}`}>
                    Yunggi Alyana<span className="text-emerald-500">.</span>
                  </h1>
                  {!isScrolled && <p className="text-zinc-500 font-mono text-xs mt-1 tracking-[0.2em] uppercase">Full Stack & Security</p>}
                </div>
              </div>
            </div>

            {/* 2. FACE CARD (FULL VERTICAL DESKTOP) */}
            <div 
               className={`group relative overflow-hidden bg-zinc-800/50 border border-white/10 rounded-[2.5rem] transition-all duration-[800ms] ease-[cubic-bezier(0.2,1,0.2,1)] hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 hover:z-20
                ${isScrolled 
                  ? 'hidden' 
                  // Desktop: Kolom 1, Row 1-3 (FULL HEIGHT). Mobile: Col 1, Row 2-3 (Portrait)
                  : 'col-span-1 row-span-2 md:col-start-1 md:row-start-1 md:row-span-3 block' 
                }
               `}
            >
               <Image 
                 src="/me.jpeg"  
                 alt="Yunggi Alyana" 
                 fill 
                 className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                 priority
                 sizes="(max-width: 768px) 100vw, 33vw" // FIX: Responsive sizes (Desktop ~33vw/25vw)
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>

            {/* --- NAV ITEMS (REORDERED: About -> Skills -> Projects -> Journal -> Contact) --- */}
            
            {/* 3. ABOUT */}
            {/* Urutan 1 di Sidebar */}
            <NavItem 
                isScrolled={isScrolled} activeSection={activeSection} scrollTo={scrollToSection} 
                sectionKey="about" label="About" icon={<User />} 
                // Desktop: Kanan Atas (Col 4, Row 1)
                className={!isScrolled ? 'col-span-1 md:col-start-4 md:row-start-1' : ''} 
            />

            {/* 4. SKILLS */}
            {/* Urutan 2 di Sidebar. Desktop: Kanan Bawah (Col 4, Row 2-3) */}
            <NavItem 
                isScrolled={isScrolled} activeSection={activeSection} scrollTo={scrollToSection} 
                sectionKey="services" label="Skills" icon={<Sparkles />} 
                className={!isScrolled ? 'col-span-2 md:col-span-1 md:col-start-4 md:row-start-2 md:row-span-2' : ''} 
            />

            {/* 5. PROJECTS */}
            {/* Urutan 3 di Sidebar. Desktop: Tengah Kiri (Col 2, Row 2) */}
            <NavItem 
                isScrolled={isScrolled} activeSection={activeSection} scrollTo={scrollToSection} 
                sectionKey="projects" label="Projects" icon={<Briefcase />} 
                className={!isScrolled ? 'col-span-2 md:col-span-1 md:col-start-2 md:row-start-2' : ''} 
            />

            {/* 6. JOURNAL */}
            {/* Urutan 4 di Sidebar. Desktop: Tengah Kanan (Col 3, Row 2) */}
            <NavItem 
                isScrolled={isScrolled} activeSection={activeSection} scrollTo={scrollToSection} 
                sectionKey="journal" label="Journal" icon={<PenTool />} 
                className={!isScrolled ? 'col-span-1 md:col-span-1 md:col-start-3 md:row-start-2' : ''} 
            />

            {/* 7. CONTACT */}
            {/* Urutan 5 di Sidebar. Desktop: Tengah Bawah (Col 2-3, Row 3) */}
            <NavItem 
                isScrolled={isScrolled} activeSection={activeSection} scrollTo={scrollToSection} 
                sectionKey="contact" label="Contact" icon={<Mail />} 
                className={!isScrolled ? 'col-span-2 md:col-span-2 md:col-start-2 md:row-start-3' : ''} 
            />

          </div>

          {isScrolled && (
            <div className="mt-auto hidden md:flex gap-4 pt-6 border-t border-white/5 animate-fadeIn justify-start">
               <Link href="https://github.com/yunggialyana" target="_blank"><Github size={18} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" /></Link>
               <Link href="https://linkedin.com/in/yunggialyana" target="_blank"><Linkedin size={18} className="text-zinc-600 hover:text-blue-400 cursor-pointer transition-colors" /></Link>
            </div>
          )}
        </div>
      </nav>

      {/* --- CONTENT AREA --- */}
      <main className={`transition-all duration-[800ms] ease-[cubic-bezier(0.2,1,0.2,1)] ${isScrolled ? 'pt-24 md:pt-0 md:pl-[280px]' : 'pl-0'}`}>
        
        <div ref={sectionsRef.hero} className="h-screen flex items-center justify-center relative pointer-events-none">
          {!isScrolled && (
            <div className="absolute bottom-12 animate-bounce text-zinc-600 flex flex-col items-center gap-2">
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase">Scroll Down</span>
              <ArrowDown size={14} />
            </div>
          )}
        </div>

        {/* --- ABOUT SECTION WITH TIMELINE --- */}
        <Section sectionRef={sectionsRef.about} id="about" tag="01. ABOUT" title="Secure & Scalable." color="text-emerald-500">
            <div className="space-y-12">
                <p>
                    Crafting secure & scalable digital experiences. Specialized in <span className="text-emerald-400">Next.js Architecture</span> and <span className="text-emerald-400">Vulnerability Assessment</span>. 
                    Former Retail Leader turned Software Engineer with a passion for building systems that are not just functional, but resilient.
                </p>

                {/* TIMELINE VISUALIZATION */}
                <div className="border-l-2 border-white/10 ml-2 md:ml-4 space-y-12">
                    {timelineData.map((item) => (
                        <div key={item.id} className="relative pl-8 md:pl-12 group">
                            {/* Dot Indicator */}
                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-[#050505] transition-all duration-300
                                ${item.type === 'work' ? 'border-emerald-500 group-hover:bg-emerald-500' : 'border-blue-500 group-hover:bg-blue-500'}
                            `} />
                            
                            {/* Date Badge */}
                            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">
                                <Calendar size={12} />
                                {item.date}
                            </div>

                            {/* Role & Company */}
                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                                {item.role}
                            </h3>
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-sm text-zinc-400 mb-3">
                                <span className="flex items-center gap-1"><Briefcase size={12} /> {item.company}</span>
                                <span className="hidden md:inline">•</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                            </div>
                            
                            {/* Description */}
                            <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                                {item.desc}
                            </p>

                            {/* Skills Tags */}
                            {item.skills && (
                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill, idx) => (
                                        <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-500 border border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        {/* SKILLS SECTION */}
        <Section sectionRef={sectionsRef.services} id="services" tag="02. SKILLS" title="Technical Arsenal." color="text-yellow-500">
             <div className="space-y-6">
                <p>Specializing in <b>Full Stack Engineering</b> with a focus on scalability and security.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-400 text-sm">
                   <ul className="space-y-2 border-l border-white/10 pl-4">
                      <li className="text-white font-bold mb-2">Frontend & Core</li>
                      <li>Next.js & React 19</li>
                      <li>TypeScript (Strict Mode)</li>
                      <li>Tailwind CSS & Shadcn/UI</li>
                   </ul>
                   <ul className="space-y-2 border-l border-white/10 pl-4">
                      <li className="text-white font-bold mb-2">Backend & AI</li>
                      <li>Node.js & Hapi.js</li>
                      <li>Python & FastAPI (ML Integration)</li>
                      <li>Supabase (PostgreSQL) & MongoDB</li>
                   </ul>
                </div>
             </div>
        </Section>

        {/* PROJECTS SECTION TEASER */}
        <Section sectionRef={sectionsRef.projects} id="projects" tag="03. WORKS" title="Selected Works." color="text-blue-500">
            <div className="space-y-8">
               <p>
                 Building real-world solutions: from YouTube-based Certificate Generators to ML-powered Telco Recommendation Systems.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestProjects.map((project, idx) => (
                    <Link 
                        key={idx} 
                        href={`/projects/${project.slug}?from=home`} 
                        className={`group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 transition-all block
                            ${project.color === 'emerald' ? 'hover:border-emerald-500/30' : 
                              project.color === 'blue' ? 'hover:border-blue-500/30' : 
                              project.color === 'yellow' ? 'hover:border-yellow-500/30' : 'hover:border-white/30'}
                        `}
                    >
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-zinc-500 mb-4 line-clamp-2">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 text-xs font-mono">
                            {project.tags.slice(0, 2).map((tag, t) => (
                                 <span key={t} className={`
                                    ${project.color === 'emerald' ? 'text-emerald-400' : 
                                      project.color === 'blue' ? 'text-blue-400' : 'text-zinc-400'}
                                 `}>{tag}</span>
                            ))}
                        </div>
                    </Link>
                  ))}
               </div>
               <Link href="/projects" className="inline-flex items-center gap-3 text-white border-b border-white/20 pb-1 hover:border-white transition-all group">
                  View All Projects & Case Studies 
                  <ArrowDown size={16} className="rotate-[-90deg] group-hover:translate-x-2 transition-transform"/>
               </Link>
            </div>
        </Section>

        {/* JOURNAL SECTION TEASER */}
        <Section sectionRef={sectionsRef.journal} id="journal" tag="04. JOURNAL" title="Latest Thoughts." color="text-pink-500">
            <div className="space-y-8">
               <p>
                 Writing about code security, system architecture, and the evolving landscape of web development.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestJournal.map((post, idx) => (
                    <Link 
                      key={idx} 
                      href={`/journal/${post.slug}?from=home`} 
                      className={`group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 transition-all block
                        ${post.color === 'pink' ? 'hover:border-pink-500/30' : 
                          post.color === 'emerald' ? 'hover:border-emerald-500/30' : 
                          post.color === 'blue' ? 'hover:border-blue-500/30' : 'hover:border-white/30'}
                      `}
                    >
                      <div className={`flex items-center gap-2 text-xs font-mono mb-3 
                         ${post.color === 'pink' ? 'text-pink-400' : 
                           post.color === 'emerald' ? 'text-emerald-400' : 
                           post.color === 'blue' ? 'text-blue-400' : 'text-zinc-400'}
                      `}>
                          <span>{post.date}</span> • <span>{post.category}</span>
                      </div>
                      <h3 className={`text-xl font-bold text-white mb-2 transition-colors
                         ${post.color === 'pink' ? 'group-hover:text-pink-400' : 
                           post.color === 'emerald' ? 'group-hover:text-emerald-400' : 
                           post.color === 'blue' ? 'group-hover:text-blue-400' : 'group-hover:text-white'}
                      `}>
                          {post.title}
                      </h3>
                      <p className="text-sm text-zinc-500 line-clamp-2">
                          {post.excerpt || "Read this article to learn more about my latest findings in software engineering."}
                      </p>
                    </Link>
                  ))}
               </div>
               <Link href="/journal" className="inline-flex items-center gap-3 text-white border-b border-white/20 pb-1 hover:border-white transition-all group">
                  Read All Articles 
                  <ArrowDown size={16} className="rotate-[-90deg] group-hover:translate-x-2 transition-transform"/>
               </Link>
            </div>
        </Section>

        {/* --- CONTACT SECTION --- */}
        <div ref={sectionsRef.contact} className="min-h-screen flex items-center justify-center p-8 md:p-20 border-t border-white/5 bg-black">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="text-center md:text-left">
                    <span className="text-emerald-500 font-mono tracking-widest text-sm mb-6 block">05. GET IN TOUCH</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-none">Let's build something secure.</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        Have a project in mind or want to discuss security architecture? 
                        I'm currently available for freelance projects and consulting.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start text-sm font-mono text-zinc-500">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            Open to Work
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            Depok, Indonesia (GMT+7)
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-900/20 border border-white/5 p-6 md:p-8 rounded-3xl backdrop-blur-sm">
                    <ContactForm />
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

// --- Sub Components ---

interface NavItemProps {
    isScrolled: boolean;
    activeSection: string;
    sectionKey: string;
    icon: React.ReactElement;
    label: string;
    scrollTo: (key: string) => void;
    className?: string;
}

const NavItem = ({ isScrolled, activeSection, sectionKey, icon, label, scrollTo, className }: NavItemProps) => (
  <div 
    onClick={() => scrollTo(sectionKey)}
    className={`group relative cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.2,1,0.2,1)] overflow-hidden will-change-transform
      ${isScrolled
        ? `p-2 md:p-3 flex items-center justify-center md:justify-start gap-3 border-transparent rounded-xl hover:bg-white/5 flex-shrink-0
           ${activeSection === sectionKey ? 'bg-white/10 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`
        : `flex flex-col items-center justify-center text-center p-4 md:p-8 bg-zinc-900/50 border border-white/10 rounded-[2.5rem]
           hover:border-emerald-500/30 hover:bg-zinc-800/80 hover:scale-[1.02] shadow-xl ${className}`
      }
    `}
  >
    <div className={`relative z-10 transition-all duration-700 ${isScrolled && activeSection === sectionKey ? 'text-emerald-400 scale-110' : 'text-zinc-500 group-hover:text-white'}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { size: isScrolled ? 18 : 28 })}
    </div>
    <h3 className={`font-bold transition-all duration-700 relative z-10 ${isScrolled ? 'hidden md:block text-sm' : 'text-sm md:text-lg text-white mt-3'}`}>
      {label}
    </h3>
    {isScrolled && activeSection === sectionKey && (
      <div className="absolute bottom-1 md:bottom-auto md:ml-auto md:relative w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981] animate-pulse" />
    )}
  </div>
);

interface SectionProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
    id: string;
    tag: string;
    title: string;
    color: string;
    children: React.ReactNode;
}

const Section = ({ sectionRef, id, tag, title, color, children }: SectionProps) => (
    <section id={id} ref={sectionRef} className="min-h-screen flex items-center p-8 md:p-24 border-t border-white/5 bg-[#050505]">
        <div className="max-w-4xl w-full">
            <span className={`${color} font-mono tracking-[0.5em] text-xs mb-8 block uppercase`}>{tag}</span>
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tighter leading-[0.9]">{title}</h2>
            <div className="text-xl text-zinc-500 leading-relaxed max-w-xl">
                {children}
            </div>
        </div>
    </section>
);