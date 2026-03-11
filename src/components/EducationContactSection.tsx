'use client';

interface EducationContactSectionProps {
  id: string;
}

export default function EducationContactSection({ id }: EducationContactSectionProps) {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      field: 'Computer Science & Applications',
      institution: 'Maharaja Krishnakumarsinhji Bhavnagar University (M.K.B.U)',
      period: '2016 - 2019',
      description: 'Focused on software engineering, data structures, algorithms, and web technologies.'
    },
    {
      degree: 'Gujarat Secondary and Higher Secondary Education Board',
      field: 'Commerce',
      institution: 'Shree Bajarangdas Bapa High School',
      period: '2014 - 2016',
      description: 'Completed with distinction in Commerce Stream.'
    }
  ];

  const certifications = [
    {
      title: 'Shining Star of the Year',
      issuer: 'NITSAN',
      year: '2023',
      description: 'Award recognized for exceptional leadership, frontend development innovation, and consistent project delivery excellence.'
    }
  ];

  return (
    <section id={id} className="py-20 relative z-10" suppressHydrationWarning={true}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Certifications
          </span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Academic background and professional certifications that validate expertise
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Education */}
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-300 font-semibold mb-1">{edu.field}</p>
                    <p className="text-white/80 mb-2">{edu.institution}</p>
                    <p className="text-white/60 text-sm mb-3">{edu.period}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
                {index < education.length - 1 && (
                  <div className="mt-6 border-b border-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications & Awards</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <span className="text-purple-300 font-semibold text-sm">{cert.year}</span>
                </div>
                <p className="text-blue-300 font-semibold text-sm mb-2">{cert.issuer}</p>
                <p className="text-white/70 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Get In Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="text-green-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="3" y="5" width="18" height="14" rx="3" fill="none"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.5l9 7 9-7" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Email</h4>
            <p className="text-white/80 hover:text-white transition-colors">arunsolanki1463@gmail.com</p>
          </div>
          
          <div className="text-center group">
            <div className="text-blue-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.618 7-11A7 7 0 0 0 5 10c0 4.382 7 11 7 11z" />
                <circle cx="12" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Location</h4>
            <p className="text-white/80 hover:text-white transition-colors">Bhavnagar, Gujarat, India</p>
          </div>
          
          <div className="text-center group">
            <div className="text-purple-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Company</h4>
            <p className="text-white/80 hover:text-white transition-colors">NITSAN TECHNOLOGY</p>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-6 border-t border-white/20">
          <p className="text-white/80 text-lg mb-2">
            <strong className="text-green-300">Open for new opportunities</strong>
          </p>
          <p className="text-white/60">
            Available for freelance projects, consulting, and full-time positions
          </p>
        </div>
      </div>
    </section>
  );
}
