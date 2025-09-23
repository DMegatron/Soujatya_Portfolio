import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-gray-900/95 backdrop-blur-sm text-white z-50 border-b border-gray-800">
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Soujatya Bhunia
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
            <a href="#certifications" className="hover:text-blue-400 transition-colors duration-300">Certifications</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#certifications" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Certifications</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;