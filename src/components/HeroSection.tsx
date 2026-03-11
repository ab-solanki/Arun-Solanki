'use client';

import { motion, Variants } from 'framer-motion';
import ProfessionalImage from './ProfessionalImage';

interface HeroSectionProps {
  id: string;
}

// Animation Variants
const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariant: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

const cardVariant: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <section id={id} className="py-20 md:py-32 relative z-10" suppressHydrationWarning={true}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="text-center mb-16"
      >
        {/* Professional Image */}
        <motion.div variants={itemVariant} className="mb-12">
          <ProfessionalImage size="xl" />
        </motion.div>

        {/* Epic Main Title */}
        <motion.h1
          variants={itemVariant}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 sm:mb-8"
        >
          <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            ARUN SOLANKI
          </span>
        </motion.h1>

        {/* Dynamic Subtitle */}
        <motion.div variants={itemVariant} className="relative mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 text-slate-300 tracking-tight px-4">
            Senior Frontend Lead & Enterprise Architect
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
            className="w-32 h-1 bg-accent-gold mx-auto rounded-full shadow-lg"
          />
        </motion.div>

        {/* Compelling Description */}
        <motion.div variants={itemVariant} className="max-w-4xl mx-auto mb-20 px-4">
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
            With over <span className="text-white font-semibold">6.7 years of expertise</span> in professional frontend engineering, I specialize in architecting high-performance, accessible digital solutions. Bridging the gap between <span className="text-white">Enterprise TYPO3 CMS</span> and modern <span className="text-white">React ecosystems</span> for global markets.
          </p>
        </motion.div>

        {/* Stunning Stats Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20 px-4"
        >
          <motion.div variants={cardVariant} className="group glass-card p-6 sm:p-8 cursor-default border-slate-800 hover:border-accent-gold/40">
            <div className="text-3xl sm:text-5xl font-bold text-white mb-2">6.7+</div>
            <div className="text-slate-500 font-medium text-xs sm:text-sm uppercase tracking-widest">Years Experience</div>
          </motion.div>

          <motion.div variants={cardVariant} className="group glass-card p-6 sm:p-8 cursor-default border-slate-800 hover:border-accent-gold/40">
            <div className="text-3xl sm:text-5xl font-bold text-accent-gold mb-2">Lead</div>
            <div className="text-slate-500 font-medium text-xs sm:text-sm uppercase tracking-widest">Frontend Position</div>
          </motion.div>

          <motion.div variants={cardVariant} className="group glass-card p-6 sm:p-8 cursor-default border-slate-800 hover:border-accent-gold/40">
            <div className="text-3xl sm:text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-500 font-medium text-xs sm:text-sm uppercase tracking-widest">Enterprise Projects</div>
          </motion.div>

          <motion.div variants={cardVariant} className="group glass-card p-6 sm:p-8 cursor-default border-slate-800 hover:border-accent-gold/40">
            <div className="text-3xl sm:text-5xl font-bold text-white mb-2">A11y</div>
            <div className="text-slate-500 font-medium text-xs sm:text-sm uppercase tracking-widest">WCAG Specialist</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Premium Contact Info Cards */ }
  <motion.div
    variants={containerVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16 px-4"
  >
    <motion.a
      variants={itemVariant}
      whileHover={{ y: -8, scale: 1.02 }}
      href="mailto:arunsolanki1463@gmail.com"
      className="group bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-600/20 hover:border-blue-500/50 transition-colors duration-500 shadow-lg hover:shadow-blue-500/20 block"
    >
      <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} className="text-blue-400 text-3xl sm:text-5xl mb-4 sm:mb-6">
        <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </motion.div>
      <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Email</h3>
      <p className="text-white/80 group-hover:text-white transition-colors text-sm sm:text-lg">arunsolanki1463@gmail.com</p>
    </motion.a>

    <motion.div
      variants={itemVariant}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-gradient-to-br from-emerald-800/20 to-green-900/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-emerald-600/20 hover:border-green-400/50 transition-colors duration-500 shadow-lg hover:shadow-green-500/20 cursor-default"
    >
      <motion.div whileHover={{ y: -5 }} className="text-green-400 text-3xl sm:text-5xl mb-4 sm:mb-6">
        <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      </motion.div>
      <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Location</h3>
      <p className="text-white/80 transition-colors text-sm sm:text-lg">Bhavnagar, Gujarat, India</p>
    </motion.div>

    <motion.a
      variants={itemVariant}
      whileHover={{ y: -8, scale: 1.02 }}
      href="https://www.nitsantech.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gradient-to-br from-indigo-800/20 to-purple-900/20 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-indigo-600/20 hover:border-purple-400/50 transition-colors duration-500 shadow-lg hover:shadow-purple-500/20 block"
    >
      <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }} className="text-purple-400 text-3xl sm:text-5xl mb-4 sm:mb-6">
        <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      </motion.div>
      <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Company</h3>
      <p className="text-white/80 group-hover:text-white transition-colors text-sm sm:text-lg">NITSAN TECHNOLOGY</p>
    </motion.a>
  </motion.div>
    </section >
  );
}
