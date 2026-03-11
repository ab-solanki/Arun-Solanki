'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useSpring, Variants } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ImageGallery from '@/components/ImageGallery';
import EducationContactSection from '@/components/EducationContactSection';
import ScrollProgress from '@/components/ScrollProgress';

// Disable SSR to prevent hydration mismatches with browser extensions
const NoSSR = dynamic(() => Promise.resolve(HomeComponent), { ssr: false });

function HomeComponent() {
  const [activeSection, setActiveSection] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // Smooth scroll progress bar at the top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Client-side hydration check
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track exact mouse position for custom cursor orb and interactive background
  useEffect(() => {
    if (!isClient) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isClient]);

  // Observer for active section navigation highlighting
  useEffect(() => {
    if (!isClient) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Fade Up variant for sections reveal
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white selection:bg-blue-500/30 overflow-x-hidden" suppressHydrationWarning={true} data-theme="dark">
      
      {/* Top Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Advanced Animated Environment */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '20px 20px', animation: 'shimmer 20s linear infinite' }}></div>
        
        {/* Interactive Smooth Cursor Orbs using Framer Motion Springs */}
        {isClient && (
          <>
            <motion.div
              animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
              transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
              className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen"
            />
            <motion.div
              animate={{ x: mousePosition.x - 100, y: mousePosition.y - 100 }}
              transition={{ type: "spring", damping: 40, stiffness: 150, mass: 0.8 }}
              className="absolute w-[200px] h-[200px] bg-indigo-500/10 rounded-full blur-[80px] mix-blend-screen"
            />
          </>
        )}
      </div>

      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="container mx-auto px-4 md:px-8 max-w-7xl pt-20 relative z-10">
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <HeroSection id="overview" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <SkillsSection id="skills" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <ExperienceSection id="experience" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <ProjectsSection id="projects" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <ImageGallery id="gallery" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <EducationContactSection id="education" />
        </motion.div>

        {/* Premium Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-16 text-center"
        >
          <div className="glass-card p-8 relative overflow-hidden group max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Let&apos;s Build Something Extraordinary</h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Passionate about creating exceptional user experiences through innovative frontend solutions and robust architectural design.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.linkedin.com/in/solanki-arun/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/ab-solanki" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="mailto:arunsolanki1463@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-green-500/20 hover:text-green-400 transition-all hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/></svg>
              </a>
            </div>
            
            <div className="border-t border-white/10 pt-6">
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} Arun Solanki. Built with Next.js & Framer Motion.
              </p>
            </div>
          </div>
        </motion.footer>
      </main>
      
      <ScrollProgress />
    </div>
  );
}

export default NoSSR;