'use client';

import { motion, Variants } from 'framer-motion';

interface ExperienceSectionProps {
  id: string;
}

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

const lineVariant: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.5, ease: "anticipate" },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function ExperienceSection({ id }: ExperienceSectionProps) {
  const experiences = [
    {
      title: 'Senior Frontend Developer & Frontend Team Leader',
      company: 'NITSAN',
      period: '2019 - PRESENT',
      description: 'Promoted to Frontend Team Lead (May 2025) in recognition of six years of dedicated, results-oriented service.',
      achievements: [
        'Played a key role designing and developing high-performance applications using TYPO3, WordPress, React.js.',
        'Led the technical development of multiple projects, collaborating with cross-functional teams for scalable, secure solutions.',
        'Mentored junior developers and performed rigorous code reviews establishing technical standards.'
      ]
    },
    {
      title: 'Senior Frontend Developer',
      company: 'Accesstive',
      period: '2024 - 2025',
      description: 'Engineered mission-critical web accessibility solutions focusing on automation and compliance monitoring.',
      achievements: [
        'Accesstive Audit: Architected comprehensive automated auditing tool scanning TYPO3 websites for WCAG 2.1/2.2 compliance.',
        'Accesstive Assistant Widget: Engineered high-performance, frontend-agnostic accessibility widget allowing continuous customization.'
      ]
    },
    {
      title: 'Senior Frontend Developer',
      company: 'T3Planet',
      period: '2019 - 2025',
      description: 'Lead developer for marketplace architecture, managing the technical transition and rebranding from T3Terminal.',
      achievements: [
        'Engineered core marketplace logic, licensing systems, and automated delivery workflows with SEO/performance optimization.',
        'Architected a suite of high-impact TYPO3 extensions compatible with TYPO3 v10–v13 (T3AI, License Manager).'
      ]
    },
    {
      title: 'Senior Frontend Developer',
      company: 'NITSAN - TYPO3 Agentur',
      period: '2023 - 2025',
      description: 'Built high-quality TYPO3 solutions focused on fast deployment and premium UIs.',
      achievements: [
        'Developed industry-leading TYPO3 templates using modern frontend frameworks integrated with the TYPO3 backend.',
        'Created robust modular Base Themes for rapid agency deployment ensuring 100% Composer compatibility.'
      ]
    }
  ];

  return (
    <section id={id} className="py-20 relative z-10" suppressHydrationWarning={true}>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Journey
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          A clear progression showing continuous growth from deep technical development into a strategic leadership role.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative pl-4 md:pl-0"
        >
          {/* Animated Timeline Line */}
          <motion.div 
            variants={lineVariant}
            className="absolute left-10 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full origin-top"
          />
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariant}
              className="relative mb-12 group"
            >
              {/* Timeline Dot with Pulse Effect */}
              <div className="absolute left-8 md:left-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-150 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300 z-10">
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              
              {/* Content Card */}
              <motion.div 
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="ml-20 md:ml-16 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-colors duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="text-white/50 font-medium font-mono text-sm bg-black/30 px-3 py-1 rounded-full mt-3 md:mt-0 w-fit">{exp.period}</div>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed text-lg">{exp.description}</p>
                
                <div className="bg-black/20 p-5 rounded-xl border border-white/5">
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-purple-300">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-white/70 group/item">
                        <span className="text-green-400 mr-3 mt-1 scale-110 group-hover/item:text-blue-400 transition-colors">✓</span>
                        <span className="group-hover/item:text-white/90 transition-colors">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
