"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  User, Briefcase, Mail, Github, Linkedin, 
  ArrowDown, Sparkles, PenTool, Terminal, MapPin, Calendar, Shield 
} from 'lucide-react';
import Link from "next/link";
import Image from "next/image"; 
import { journalPosts, type JournalPost } from '@/data/journal-posts'; 
import { projects, type Project } from '@/data/projects';
import { timelineData } from '@/data/timeline'; 
import { skillsData } from '@/data/skills';
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

export default function HomeContent() {
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
      
      if (!isScrolled && scrollY > 100) {
        setIsScrolled(true);
      } else if (isScrolled && scrollY < 80) { 
        setIsScrolled(false);
      }

      // Kalkulasi Active Section
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

  // Effect 3: Handle URL Hash (Smooth Scroll pada navigasi manual)
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1); 
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Hapus hash agar URL bersih
          setTimeout(() => {
            window.history.replaceState(null, '', window.location.pathname); 
          }, 1000);
        }
      }, 100);
    }
  }, []);

  // Effect 4: Console Easter Egg
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

  // Mengambil 2 data terbaru untuk ditampilkan di Home
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
          <div 
            className={`transition-all duration-[800ms] ease-[cubic-bezier(0.2,1,0.2,1)] w-full
              ${isScrolled 
                ? 'flex flex-row items-center gap-2 overflow-x-auto no-scrollbar md:grid md:grid-cols-1 md:gap-3 md:overflow-visible' 
                : 'grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-3 md:gap-4 grid-flow-dense' 
              }
            `}
          >
            {/* 1. IDENTITY CARD */}
            <div 
              onClick={() => scrollToSection('hero')}
              className={`group relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-[2.5rem] cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.2,1,0.2,1)]
                ${isScrolled 
                  ? 'p-2 flex-shrink-0 flex items-center border-transparent bg-transparent hover:bg-white/5 md:p-3 md:mb-6 md:w-full md:gap-4' 
                  : 'col-span-2 p-6 md:px-10 md:py-6 flex flex-col justify-center shadow-2xl md:col-start-2 md:col-span-2 md:row-start-1'
                }
              `}
            >
              <div className={`flex transition-all duration-700 ${isScrolled ? 'flex-row items-center gap-3 md:gap-4' : 'flex-row items-center gap-6'}`}>
                
                <div className={`overflow-hidden border border-white/10 shadow-xl transition-all duration-700 flex items-center justify-center relative
                    ${isScrolled 
                        ? 'w-10 h-10 bg-zinc-800 rounded-full' 
                        : 'w-16 h-16 bg-emerald-500/10 rounded-3xl' 
                    }
                `}>
                   {isScrolled ? (
                      <Image 
                        src="/me.jpeg" 
                        alt="Yunggi Alyana" 
                        fill 
                        className="object-cover"
                        sizes="40px"
                      />
                   ) : (
                      <Terminal className="text-emerald-500 w-8 h-8" />
                   )}
                </div>

                <div className="block">
                  <h1 className={`font-bold text-white transition-all duration-700 ${isScrolled ? 'text-sm md:text-lg' : 'text-2xl md:text-3xl tracking-tighter'}`}>
                    Yunggi Alyana<span className="text-emerald-500">.</span>
                  </h1>
                  {!isScrolled && <p className="text-zinc-500 font-mono text-xs mt-1 tracking-[0.2em] uppercase">Full Stack & Security</p>}
                </div>
              </div>
            </div>

            {/* 2. FACE CARD */}
            <div 
               className={`group relative overflow-hidden bg-zinc-800/50 border border-white/10 rounded-[2.5rem] transition-all duration-[800ms] ease-[cubic-bezier(0.2,1,0.2,1)] hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 hover:z-20
                ${isScrolled 
                  ? 'hidden' 
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
                 sizes="(max-width: 768px) 100vw, 33vw"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>

            {/* NAV ITEMS */}
            <NavItem 
                isScrolled={isScrolled} activeSection={activeSection} scrollTo={scrollToSection} 
                sectionKey="about" label="About" icon={<User />} 
                className={!isScrolled ? 'col-span-1 md:col-start-4 md:row-start-1' : ''} 
            />
            <NavItem 
                isScrolled={isScrolled} activeSection={activeSection} scrollTo={scrollToSection} 
                sectionKey="services" label="Skills" icon={<Sparkles />} 
                className={!isScrolled ? 'col-span-2 md:col-span-1 md:col-start-4 md:row-start-2 md:row-span-2' : ''} 
            />
            <NavItem 
                isScrolled={isScrolled} activeSection={activeSection} scrollTo={scrollToSection} 
                sectionKey="projects" label="Projects" icon={<Briefcase />} 
                className={!isScrolled ? 'col-span-2 md:col-span-1 md:col-start-2 md:row-start-2' : ''} 
            />
            <NavItem 
                isScrolled={isScrolled} activeSection={activeSection} scrollTo={scrollToSection} 
                sectionKey="journal" label="Journal" icon={<PenTool />} 
                className={!isScrolled ? 'col-span-1 md:col-span-1 md:col-start-3 md:row-start-2' : ''} 
            />
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

        {/* SECTIONS */}
        <Section sectionRef={sectionsRef.about} id="about" tag="01. ABOUT" title="Secure & Scalable." color="text-emerald-500">
            <div className="space-y-12">
                <p>
                    Crafting secure & scalable digital experiences. Specialized in <span className="text-emerald-400">Next.js Architecture</span> and <span className="text-emerald-400">Vulnerability Assessment</span>. 
                    Currently a <b>Project Drafter</b> at Indomaret Group, having transitioned from retail operations, I bring a unique blend of technical design, resilience, and operational empathy to build secure applications that solve real-world friction.
                </p>
                <div className="border-l-2 border-white/10 ml-2 md:ml-4 space-y-12">
                    {timelineData.map((item) => (
                        <div key={item.id} className="relative pl-8 md:pl-12 group">
                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-[#050505] transition-all duration-300
                                ${item.type === 'work' ? 'border-emerald-500 group-hover:bg-emerald-500' : 'border-blue-500 group-hover:bg-blue-500'}
                            `} />
                            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">
                                <Calendar size={12} /> {item.date}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                                {item.role}
                            </h3>
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-sm text-zinc-400 mb-3">
                                <span className="flex items-center gap-1"><Briefcase size={12} /> {item.company}</span>
                                <span className="hidden md:inline">•</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                            </div>
                            <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                                {item.desc}
                            </p>
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

        <Section sectionRef={sectionsRef.services} id="services" tag="02. SKILLS" title="Technical Arsenal." color="text-yellow-500">
             <div className="space-y-6">
                <p>Specializing in <b>Full Stack Engineering</b>, accompanied by a strong foundation in commercial spatial design and infrastructure security.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-400 text-sm">
                   {skillsData.map((category) => (
                       <ul key={category.id} className="space-y-2 border-l border-white/10 pl-4">
                          <li className="text-white font-bold mb-2 flex items-center gap-2">
                              {category.iconName === 'Terminal' && <Terminal size={14} className={category.iconColor}/>}
                              {category.iconName === 'Sparkles' && <Sparkles size={14} className={category.iconColor}/>}
                              {category.iconName === 'PenTool' && <PenTool size={14} className={category.iconColor}/>}
                              {category.iconName === 'Shield' && <Shield size={14} className={category.iconColor}/>}
                              {category.title}
                          </li>
                          {category.items.map((item, idx) => (
                              <li key={idx}>{item}</li>
                          ))}
                       </ul>
                   ))}
                </div>
             </div>
        </Section>

        <Section sectionRef={sectionsRef.projects} id="projects" tag="03. WORKS" title="Selected Works." color="text-blue-500">
            <div className="space-y-8">
               <p>Building real-world solutions: from YouTube-based Certificate Generators to ML-powered Telco Recommendation Systems.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestProjects.map((project: Project, idx: number) => (
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

        <Section sectionRef={sectionsRef.journal} id="journal" tag="04. JOURNAL" title="Latest Thoughts." color="text-pink-500">
            <div className="space-y-8">
               <p>Writing about code security, system architecture, and the evolving landscape of web development.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestJournal.map((post: JournalPost, idx: 
