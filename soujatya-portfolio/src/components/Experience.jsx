import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import SectionBackground from './SectionBackground';

const Experience = () => {
  return (
    <section id="experience" className="relative py-12 md:py-20 bg-teal-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and key contributions to the tech industry.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500"></div>
          
          <div className="relative pl-12 sm:pl-24">
            {/* Experience Item */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[2.75rem] sm:-left-[4.75rem] top-6 w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full border-4 border-white dark:border-slate-950 shadow-lg flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Software Development Intern</h3>
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">KATSI Canada</h4>
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20 px-4 py-1.5 rounded-full text-sm w-fit">
                    Sept 2024 – April 2025
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Co-developed an OFAC List Checking Web Application",
                    "Developed and maintained the backend using PHP",
                    "Designed and managed the database with MySQL",
                    "Built and enhanced the frontend using HTML, CSS, and JavaScript",
                    "Assisted in business documentation using Visual Paradigm",
                    "Contributed to team management and project coordination"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["PHP", "MySQL", "JavaScript", "HTML/CSS", "Visual Paradigm"].map((tech, index) => (
                    <span key={index} className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-gray-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="https://ofac.aucseapp.in/OFAC/OFAC_Prototype_1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                >
                  <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                  View Project Live
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Currently seeking new opportunities to grow and contribute to innovative projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;