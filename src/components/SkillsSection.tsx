'use client';

import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DoughnutController, ArcElement } from 'chart.js';
import { motion, Variants } from 'framer-motion';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DoughnutController, ArcElement);

interface SkillsSectionProps {
  id: string;
}

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const tileVariant: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default function SkillsSection({ id }: SkillsSectionProps) {
  // Skills data
  const skillsData = {
    labels: [
      'Problem Solving', 
      'Responsive Design',
      'React & Next.js Ecosystem', 
      'Web Accessibility (WCAG)', 
      'TYPO3 CMS Development', 
      'TypeScript Integration',
      'Team Leadership',
      'Code Review & Standards',
      'Cross-platform Apps', 
      'UI/UX Collaboration'
    ],
    datasets: [{
      label: 'Skill Level',
      data: [9.5, 9.2, 9.0, 8.8, 9.3, 9.1, 8.9, 8.7, 8.5, 8.6],
      backgroundColor: [
        'rgba(197, 160, 89, 0.8)', /* Gold */
        'rgba(148, 163, 184, 0.8)', /* Slate */
        'rgba(6, 78, 59, 0.8)',   /* Emerald */
        'rgba(15, 23, 42, 0.8)',  /* Obsidian */
        'rgba(197, 160, 89, 0.6)',
        'rgba(148, 163, 184, 0.6)',
        'rgba(30, 41, 59, 0.8)',
        'rgba(51, 65, 85, 0.8)',
        'rgba(15, 23, 42, 0.7)'
      ],
      borderColor: [
        'rgba(197, 160, 89, 1)',
        'rgba(148, 163, 184, 1)',
        'rgba(6, 78, 59, 1)',
        'rgba(15, 23, 42, 1)',
        '#c5a059',
        '#94a3b8',
        '#1e293b',
        '#334155',
        '#0f172a'
      ],
      borderWidth: 1,
      borderRadius: 4,
      borderSkipped: false,
    }]
  };

  const techExpertiseData = {
    labels: ['Frontend Architecture', 'Enterprise CMS', 'WCAG Compliance', 'Technical Leadership'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: [
        'rgba(197, 160, 89, 0.8)',
        'rgba(148, 163, 184, 0.8)',
        'rgba(6, 78, 59, 0.8)',
        'rgba(15, 23, 42, 0.8)'
      ],
      borderColor: [
        'rgba(197, 160, 89, 1)',
        'rgba(148, 163, 184, 1)',
        'rgba(6, 78, 59, 1)',
        'rgba(15, 23, 42, 1)'
      ],
      borderWidth: 1,
      cutout: '70%'
    }]
  };

  const chartOptions = {
    indexAxis: 'y' as const,
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart' as const
    },
    plugins: {
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        callbacks: {
          title: function(tooltipItems: unknown[]) {
            const item = tooltipItems[0] as { chart: { data: { labels: string[] } }; dataIndex: number };
            const label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
              return label.join(' ');
            }
            return label;
          }
        }
      },
      legend: { display: false },
      title: {
        display: true,
        text: 'Self-Assessed Proficiency (out of 10)',
        padding: { bottom: 20 },
        font: { size: 14 },
        color: '#ffffff'
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { color: '#ffffff' }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { color: '#ffffff', font: { weight: 'bold' as const } }
      }
    }
  };

  const techExpertiseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 2000,
      easing: 'easeOutBounce' as const
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: { size: 12, weight: 'bold' as const },
          color: '#ffffff'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        callbacks: {
          label: function(context: { label: string; parsed: number }) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    }
  };

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
          <span className="bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            Technical Architectures
          </span>
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
          Deep expertise in bridging the gap between heavy enterprise backend frameworks and fluid modern frontend ecosystems. Strategic implementation of <span className="text-accent-gold">WCAG 2.1/2.2</span> compliance for global organizations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 px-4">
        {/* Skills Chart */}
        <motion.div 
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-400/30 transition-colors duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:bg-white/10"
        >
          <div className="h-96">
            <Bar ref={undefined} data={skillsData} options={chartOptions} />
          </div>
        </motion.div>

        {/* Technology Distribution */}
        <motion.div 
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-purple-400/30 transition-colors duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center opacity-0 h-0 m-0">Technology Distribution</h3>
          <div className="h-96 relative">
             <Doughnut data={techExpertiseData} options={techExpertiseOptions} />
          </div>
        </motion.div>
      </div>

      {/* Skills Categories with Staggered Framer Motion */}
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
      >
        <motion.div variants={tileVariant} whileHover={{ y: -8 }} className="group bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 hover:border-blue-400/40 transition-colors duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-blue-400 text-3xl mb-6 relative z-10 w-fit">
            <svg className="w-10 h-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <h4 className="text-xl font-bold text-white mb-4 relative z-10">Frontend Development</h4>
          <ul className="text-white/70 space-y-3 text-sm relative z-10 font-medium">
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>React.js, Next.js</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>TypeScript, JavaScript</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>HTML5, CSS3, SCSS</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>Tailwind CSS</li>
          </ul>
        </motion.div>

        <motion.div variants={tileVariant} whileHover={{ y: -8 }} className="group bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 hover:border-purple-400/40 transition-colors duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-colors duration-500"></div>
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-purple-400 text-3xl mb-6 relative z-10 w-fit">
            <svg className="w-10 h-10 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <h4 className="text-xl font-bold text-white mb-4 relative z-10">CMS & Tools</h4>
          <ul className="text-white/70 space-y-3 text-sm relative z-10 font-medium">
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>TYPO3 (Senior Level)</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>WordPress</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>Git, GitHub</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>Jira, Vercel</li>
          </ul>
        </motion.div>

        <motion.div variants={tileVariant} whileHover={{ y: -8 }} className="group bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 hover:border-green-400/40 transition-colors duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 hover:bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/30 transition-colors duration-500"></div>
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-green-400 text-3xl mb-6 relative z-10 w-fit">
            <svg className="w-10 h-10 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 4 4 0 015.3-3.7A9.963 9.963 0 0110 4c4.042 0 7.5 2.5 9 6a8.97 8.97 0 01-1 4zM8 9a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm-4 4a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <h4 className="text-xl font-bold text-white mb-4 relative z-10">Accessibility</h4>
          <ul className="text-white/70 space-y-3 text-sm relative z-10 font-medium">
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>WCAG 2.1 & 2.2</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>ARIA Attributes</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>Axe-Core Integration</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>Automated Audit Tools</li>
          </ul>
        </motion.div>

        <motion.div variants={tileVariant} whileHover={{ y: -8 }} className="group bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 hover:border-yellow-400/40 transition-colors duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 hover:bg-white/10 relative overflow-hidden">
           <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl group-hover:bg-yellow-500/30 transition-colors duration-500"></div>
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="text-yellow-400 text-3xl mb-6 relative z-10 w-fit">
            <svg className="w-10 h-10 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <h4 className="text-xl font-bold text-white mb-4 relative z-10">Team Leadership</h4>
          <ul className="text-white/70 space-y-3 text-sm relative z-10 font-medium">
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>Team Management</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>Mentoring</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>Task Distribution</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>Code Review</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
