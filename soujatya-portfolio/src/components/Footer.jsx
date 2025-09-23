import React, { useState, useEffect } from 'react';

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
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group animate-bounce-in hover:scale-110"
          aria-label="Back to top"
        >
          <svg 
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
      )}
      
      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-100 dark:text-white py-8 sm:py-12 lg:py-16 border-t border-gray-300 dark:border-gray-700 w-full transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] text-blue-400/10 animate-float">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-[15%] text-purple-400/10 animate-float-delayed">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 12a8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8c1.8 0 3.4.6 4.7 1.7L12 10l8 2z"/>
          </svg>
        </div>
        <div className="absolute top-1/2 left-[5%] w-6 h-6 border border-cyan-400/20 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-10 left-[80%] w-4 h-4 border border-green-400/20 rounded-full animate-pulse-soft animation-delay-1000"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand */}
            <div className="text-center md:text-left animate-fade-in-up">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                Soujatya Bhunia
              </h3>
              <p className="text-gray-300 dark:text-gray-300 mb-4 animate-fade-in-up animation-delay-200">
                Full Stack Developer passionate about creating innovative web solutions and contributing to technology advancement.
              </p>
              <p className="text-gray-400 dark:text-gray-400 text-sm animate-fade-in-up animation-delay-400">
                B.Tech CSE Student | Software Development Intern
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center animate-fade-in-up animation-delay-300">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:translate-x-1">
                  Home
                </a>
                <a href="#about" className="block text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:translate-x-1">
                  About
                </a>
                <a href="#experience" className="block text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:translate-x-1">
                  Experience
                </a>
                <a href="#projects" className="block text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:translate-x-1">
                  Projects
                </a>
                <a href="#skills" className="block text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:translate-x-1">
                  Skills
                </a>
                <a href="#contact" className="block text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:translate-x-1">
                  Contact
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-right animate-fade-in-up animation-delay-600">
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:soujatyabhunia2003@gmail.com" 
                  className="block text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
                >
                  soujatyabhunia2003@gmail.com
                </a>
                <a 
                  href="tel:+918250776861" 
                  className="block text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
                >
                  +91 8250776861
                </a>
                <p className="text-gray-400 dark:text-gray-400 text-sm">
                  Purba Medinipur, West Bengal, India
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-end space-x-4 mt-4 animate-fade-in-up animation-delay-800">
                <a 
                  href="https://github.com/DMegatron" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12"
                  title="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/soujatya-bhunia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 animate-fade-in-up animation-delay-1000">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 dark:text-gray-400 text-sm mb-4 md:mb-0 hover:text-gray-200 transition-colors duration-300">
                &copy; {currentYear} Soujatya Bhunia. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400 dark:text-gray-400">
                <span className="hover:text-gray-200 transition-colors duration-300">Built with React & Tailwind CSS</span>
                <span>•</span>
                <span className="hover:text-gray-200 transition-colors duration-300">Made with ❤️ in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;