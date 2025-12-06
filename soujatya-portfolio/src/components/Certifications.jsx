import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import SectionBackground from './SectionBackground';

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
    <section id="certifications" className="relative py-20 bg-sky-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Certifications & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic achievements and professional certifications that demonstrate 
            continuous learning and expertise.
          </p>
        </motion.div>
        
        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaAward className="text-2xl text-primary-600 dark:text-primary-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{cert.title}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">{cert.provider}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{cert.date}</p>
                  </div>
                  <a 
                    href={cert.certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-colors"
                    title="View Certificate"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaGraduationCap className="text-2xl text-primary-600 dark:text-primary-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1 sm:left-5 top-6 w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full border-4 border-white dark:border-slate-950 shadow-lg flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.institution}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.period}</p>
                      </div>
                      <div className="flex gap-2">
                        {edu.cgpa && (
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap h-fit">
                            CGPA: {edu.cgpa}
                          </span>
                        )}
                        {edu.percentage && (
                          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap h-fit">
                            {edu.percentage}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 sm:p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-white text-center">Academic Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">8.26</div>
              <p className="text-blue-700 dark:text-blue-300 text-sm font-medium">Current CGPA</p>
            </div>
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">95%</div>
              <p className="text-green-700 dark:text-green-300 text-sm font-medium">Higher Secondary</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">2+</div>
              <p className="text-purple-700 dark:text-purple-300 text-sm font-medium">Professional Certifications</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;