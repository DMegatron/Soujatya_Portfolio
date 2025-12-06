import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from 'react-icons/fa';
import SectionBackground from './SectionBackground';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
      
      <footer className="relative bg-sky-100 dark:bg-slate-900 pt-20 pb-10 overflow-hidden">
        <SectionBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Soujatya Bhunia
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating innovative web solutions and contributing to technology advancement.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6">Connect</h4>
              <div className="flex gap-4 mb-6">
                <a 
                  href="https://github.com/DMegatron" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/soujatya-bhunia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>soujatyabhunia2003@gmail.com</p>
                <p>+91 8250776861</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; {currentYear} Soujatya Bhunia. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;