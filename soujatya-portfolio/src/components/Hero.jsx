import React, { useState, useEffect } from 'react';

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
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting, texts]);
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900 text-gray-900 dark:text-white min-h-screen w-full flex items-center justify-center transition-colors duration-300 pt-20 sm:pt-24 md:pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-indigo-400 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-float-reverse"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-blue-200/30 dark:border-blue-600/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-purple-200/30 dark:border-purple-600/30 rotate-12 animate-float"></div>
        
        {/* Large Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Animated Name with letter-by-letter reveal */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            {['S','O','U','J','A','T','Y','A',' ','B','H','U','N','I','A'].map((letter, index) => (
              <span 
                key={index}
                className="inline-block animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
          
          {/* Typewriter effect for role */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light mb-3 sm:mb-4 text-gray-700 dark:text-gray-300 min-h-[2em] flex items-center justify-center">
            <span className="animate-fade-in-up animation-delay-1600">I'm a </span>
            <span className="ml-2 text-blue-600 dark:text-blue-400 font-medium">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          
          {/* Animated subtitle with word reveal */}
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            {['B.Tech', 'CSE', '4th', 'Year', 'Student', '|', 'Software', 'Development', 'Intern', 'at', 'KATSI', 'Canada'].map((word, index) => (
              <span 
                key={index}
                className="inline-block mr-2 animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${2000 + index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                {word}
              </span>
            ))}
          </div>
          
          {/* Animated description with sliding effect */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 overflow-hidden">
            <span className="inline-block animate-fade-in-left animation-delay-3800">
              Passionate about creating innovative web solutions and building the future of technology
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base">
            <div className="flex items-center gap-2 animate-slide-in-left animation-delay-4200">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 animate-bounce-subtle" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span className="text-gray-700 dark:text-gray-300 break-all sm:break-normal">soujatyabhunia2003@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 animate-slide-in-right animation-delay-4400">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 animate-bounce-subtle animation-delay-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span className="text-gray-700 dark:text-gray-300">+91 8250776861</span>
            </div>
          </div>

          <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
            <a 
              href="https://github.com/DMegatron" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base hover:-translate-y-1 hover:shadow-lg animate-bounce-in animation-delay-4600"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/soujatya-bhunia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base hover:-translate-y-1 hover:shadow-lg animate-bounce-in animation-delay-4800"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="https://drive.google.com/file/d/1hF0olm2KVE1NaEj-Z0R1uZxl0-oCpfb2/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base hover:-translate-y-1 hover:shadow-lg animate-bounce-in animation-delay-5000"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span className="hidden xs:inline">View Resume</span>
              <span className="xs:hidden">Resume</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center max-w-5xl mx-auto">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 hover:-translate-y-2 hover:shadow-xl animate-scale-in animation-delay-5200">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 animate-number-count">8.26</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base animate-fade-in-up animation-delay-5400">CGPA</p>
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 hover:-translate-y-2 hover:shadow-xl animate-scale-in animation-delay-5400">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 animate-number-count">7+</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base animate-fade-in-up animation-delay-5600">Projects</p>
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 sm:col-span-2 lg:col-span-1 border border-gray-200/50 dark:border-gray-600/50 hover:-translate-y-2 hover:shadow-xl animate-scale-in animation-delay-5600">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-2 animate-number-count">1</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base animate-fade-in-up animation-delay-5800">Internship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;