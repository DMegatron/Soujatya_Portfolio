import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Problem Solving Through Programming in C",
      provider: "NPTEL",
      date: "2023",
      description: "Comprehensive course covering problem-solving techniques and programming fundamentals using C language.",
      certificateUrl: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs42/Course/NPTEL24CS42S65190029530739062.pdf",
      skills: ["C Programming", "Problem Solving", "Algorithms", "Data Structures"]
    },
    {
      title: "PHP for Beginners: The Complete PHP MySQL PDO Course",
      provider: "Udemy",
      date: "2024",
      description: "Complete course covering PHP fundamentals, MySQL database integration, and PDO for secure database operations.",
      certificateUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-e1f6d487-958b-4495-9808-caf4319d6b8f.pdf",
      skills: ["PHP", "MySQL", "PDO", "Web Development", "Database Security"]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Adamas University",
      period: "2022 – Pursuing",
      cgpa: "8.26",
      description: "Currently pursuing Bachelor's degree with focus on software development, algorithms, and modern computing technologies."
    },
    {
      degree: "Higher Secondary",
      institution: "Asadtala Binode Vidyapith",
      period: "2019 – 2021",
      percentage: "95%",
      description: "Completed higher secondary education with exceptional performance in science stream."
    },
    {
      degree: "Secondary",
      institution: "Asadtala Binode Vidyapith",
      period: "2013 - 2019",
      percentage: "90%",
      description: "Strong foundational education with excellent academic performance."
    }
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 w-full scroll-mt-20 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications & Education
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              My academic achievements and professional certifications that demonstrate 
              continuous learning and expertise in various technologies.
            </p>
          </div>
          
          {/* Certifications */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Certifications</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 hover:shadow-lg dark:hover:shadow-gray-900/70 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 leading-tight">{cert.title}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">{cert.provider}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.date}</p>
                      </div>
                      <a 
                        href={cert.certificateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        View Certificate
                      </a>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{cert.description}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Education</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline circle */}
                    <div className="absolute left-3 top-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 hover:shadow-lg dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{edu.degree}</h4>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">{edu.institution}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.period}</p>
                          </div>
                          <div className="mt-3 lg:mt-0 lg:ml-4">
                            {edu.cgpa && (
                              <div className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg inline-block">
                                <span className="font-semibold text-sm">CGPA: {edu.cgpa}</span>
                              </div>
                            )}
                            {edu.percentage && (
                              <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg inline-block">
                                <span className="font-semibold text-sm">{edu.percentage}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Academic Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">8.26</div>
                <p className="text-blue-700 dark:text-blue-300 text-sm font-medium">Current CGPA</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg p-4 border border-green-200 dark:border-green-700">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">95%</div>
                <p className="text-green-700 dark:text-green-300 text-sm font-medium">Higher Secondary</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">2+</div>
                <p className="text-purple-700 dark:text-purple-300 text-sm font-medium">Professional Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;