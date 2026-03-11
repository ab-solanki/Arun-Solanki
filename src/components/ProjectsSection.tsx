'use client';

import { motion, Variants } from 'framer-motion';

interface ProjectsSectionProps {
  id: string;
}

// Animation variants
const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariant: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 15 },
  },
};

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  // SVG icons data
  const projectIcons = {
    'NovaOrbit - Shopping App': {
      viewBox: '0 0 22.82 19.446',
      path: 'M10.671 16.507a1.47 1.47 0 11-1.47 1.47 1.47 1.47 0 011.47-1.47zm6.392 0a1.47 1.47 0 11-1.471 1.47 1.47 1.47 0 011.471-1.47zM.913 1.827h2.079a.9.9 0 01.867.66L6.77 12.972a2.743 2.743 0 002.642 2.009h8.873a2.743 2.743 0 002.661-2.079c.619-2.471 1.846-7.383 1.846-7.383a.914.914 0 00-.886-1.13H9.202a.913.913 0 100 1.827h11.535l-1.562 6.249a.915.915 0 01-.889.693H9.413a.917.917 0 01-.883-.671L5.617 1.998a2.727 2.727 0 00-2.628-2H.913a.913.913 0 100 1.827z'
    },
    'T3AC - TYPO3 AI Chatbot': {
      viewBox: '0 0 20 20',
      path: 'M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
    },
    'T3AI - TYPO3 AI Assistant': {
      viewBox: '0 0 20 20',
      path: 'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
    },
    'T3Planet - TYPO3 Shop': {
      viewBox: '0 0 20 20',
      path: 'M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z'
    },
    'HDNET Client Project': {
      viewBox: '0 0 20 20',
      path: 'M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.666.804 4.332a1 1 0 01-1.53 1.057L10 18.5l-3.617 1.555a1 1 0 01-1.53-1.057l.804-4.332L6.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z'
    },
    'Accesstive Accessibility Widget': {
      viewBox: '0 0 20 20',
      path: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
    },
    'Accesstive Live Audit Tool': {
      viewBox: '0 0 20 20',
      path: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
    },
    'Accesstive Dashboard': {
      viewBox: '0 0 20 20',
      path: 'M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
    }
  };

  const projects = [
    {
      title: 'T3Planet - TYPO3 Shop',
      description: 'E-commerce platform showcasing deep integration and custom development within the TYPO3 CMS ecosystem. Official T3Planet website with comprehensive TYPO3 solutions.',
      technologies: ['TYPO3', 'E-commerce', 'Custom Extensions', 'PHP', 'TYPO3 Templates', 'Frontend Development', 'Backend Administration'],
      impact: 'Demonstrated advanced TYPO3 CMS capabilities in e-commerce solutions and served as flagship platform for T3Planet services.',
      color: 'indigo',
      url: 'https://t3planet.de/'
    },
    {
      title: 'Accesstive Live Audit Tool',
      description: 'AI-powered live accessibility audit tool providing real-time WCAG 2.1/2.2 compliance scanning and detailed accessibility reports for websites.',
      technologies: ['AI Audits', 'WCAG 2.0/2.1/2.2', 'React', 'TypeScript', 'Axe-Core API Integration', 'Shadow-dom Templating'],
      impact: 'Delivered instant accessibility compliance reports with AI-powered scanning, establishing continuous compliance for clients.',
      color: 'emerald',
      url: 'https://accesstive.com/free-accessibility-checker'
    },
    {
      title: 'Accesstive Accessibility Widget',
      description: 'Mission-critical accessibility widget built with Vite and TypeScript allowing users to adjust accessibility profiles and UI live on client websites.',
      technologies: ['Vite', 'TypeScript', 'WCAG', 'Real-time UI Overrides', 'Frontend Development', 'Automatic Alt Text Generation'],
      impact: 'Enabled powerful live accessibility compliance rendering seamlessly across thousands of active sessions.',
      color: 'orange',
      url: 'https://accesstive.com/'
    },
    {
      title: 'T3AC - TYPO3 AI Chatbot',
      description: 'Native TYPO3 AI Chatbot extension providing 24/7 support with instant engagement. First-ever TYPO3 AI Chatbot from TYPO3 AI Universe.',
      technologies: ['TYPO3', 'AI Models Integration', 'Shadow-dom Templating', 'LLM Prompt Engineering'],
      impact: 'Delivered round-the-clock customer support with instant, relevant responses, reducing typical response times significantly.',
      color: 'yellow',
      url: 'https://t3planet.de/en/t3ac-typo3-extension'
    },
    {
      title: 'T3AI - TYPO3 AI Assistant',
      description: 'Complete TYPO3 AI Assistant extension mapping AI to Backend tasks, enabling rapid content creation and generation directly in the Editor.',
      technologies: ['TYPO3', 'AI Content Generation', 'Backend Module Design', 'AI Models Integration'],
      impact: 'Accelerated editor workflows resulting in drastically faster content lifecycle publishing in TYPO3.',
      color: 'pink',
      url: 'https://t3planet.de/en/t3ai-typo3-extension'
    },
    {
      title: 'NovaOrbit - Shopping App',
      description: 'Comprehensive full-stack shopping application featuring mobile app, admin dashboard for data management, and Node.js Express API with MongoDB integration.',
      technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'React', 'AI-Assisted Development'],
      impact: 'Delivered complete e-commerce solution with AI-powered development approach, showcasing mobile app proficiency.',
      color: 'blue',
      url: 'https://github.com/ab-solanki/NovaOrbit'
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
            Project Portfolio
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          A comprehensive portfolio showcasing my most impactful projects spanning complex TYPO3 integrations, powerful web accessibility platforms, AI automation tools, and full-stack mobile e-commerce solutions.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ y: -5 }}
            className="group glass-card p-8 border-slate-800 hover:border-accent-gold/30 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
          >
            {/* Subtle Gold Accent Top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Project Icon */}
            <motion.div 
              className="text-4xl mb-6 relative z-10 text-accent-gold/80"
            >
              {(() => {
                const iconData = projectIcons[project.title as keyof typeof projectIcons];
                if (!iconData) return null;

                return (
                  <svg
                    className="w-10 h-10 drop-shadow-lg"
                    fill="currentColor"
                    viewBox={iconData.viewBox}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d={iconData.path}
                      clipRule="evenodd"
                    />
                  </svg>
                );
              })()}
            </motion.div>

            {/* Project Title */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 relative z-10">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-white/80 mb-6 leading-relaxed flex-grow relative z-10">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6 relative z-10">
              <h4 className="text-white font-semibold mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact and Link - Always at bottom */}
            <div className="border-t border-white/20 pt-4 mt-auto relative z-10">
              <h4 className="text-white font-semibold mb-2">Impact:</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {project.impact}
              </p>

              {/* Project Link - Always at the very bottom */}
              {project.url && (
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-sm font-semibold rounded-lg hover:bg-accent-gold/20 transition-all duration-300 group/btn"
                >
                  <span className="relative z-10">View Enterprise Case</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
