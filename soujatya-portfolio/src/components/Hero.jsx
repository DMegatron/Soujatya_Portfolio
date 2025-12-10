import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import SectionBackground from './SectionBackground';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Full Stack Developer',
    'Software Engineer',
    'React Specialist',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting, texts]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden bg-sky-50 dark:bg-slate-950 transition-colors duration-300">
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 md:mb-6">
            <span className="text-gray-900 dark:text-white">Soujatya</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
              Bhunia
            </span>
          </h1>

          <div className="h-10 sm:h-16 mb-8 flex items-center justify-center">
            <span className="text-lg sm:text-3xl text-gray-600 dark:text-gray-300 font-light">
              I'm a{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {displayedText}
              </span>
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8 md:mb-10 leading-relaxed">
            Passionate about creating innovative web solutions and building the future of technology. 
            Specializing in full-stack development with modern technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/DMegatron"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaGithub className="text-xl" />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/soujatya-bhunia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-blue-500/30 transition-shadow"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1hF0olm2KVE1NaEj-Z0R1uZxl0-oCpfb2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-medium shadow-lg hover:shadow-primary-500/30 transition-shadow"
            >
              <FaFileAlt className="text-xl" />
              Resume
            </motion.a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-4xl mx-auto">
            {[
              { label: 'CGPA', value: '8.26', color: 'text-primary-500' },
              { label: 'Projects', value: '7+', color: 'text-secondary-500' },
              { label: 'Internship', value: '1', color: 'text-green-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-3 sm:p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-primary-500">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-base text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;