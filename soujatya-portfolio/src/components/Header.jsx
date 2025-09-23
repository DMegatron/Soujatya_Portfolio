import React, { useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  const [isSecretInputFocused, setIsSecretInputFocused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { theme, changeTheme } = useTheme();

  // Handle secret code input
  const handleSecretInput = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (secretCode === import.meta.env.VITE_SECRET_CODE) {
        playSecretSong();
        setSecretCode('');
        setIsSecretInputFocused(false);
      } else {
        setSecretCode('');
      }
    }
  };

  // Handle send button click
  const handleSendClick = () => {
    if (secretCode === import.meta.env.VITE_SECRET_CODE) {
      playSecretSong();
      setSecretCode('');
      setIsSecretInputFocused(false);
    } else {
      setSecretCode('');
    }
  };

  // Play secret song
  const playSecretSong = () => {
    // Try to play custom music file first
    const customMusicPath = `${import.meta.env.VITE_CUSTOM_MUSIC_PATH}nggyu.mp3`;
    
    // Create or reuse audio element
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    // Try to load and play custom music file
    audioRef.current.src = customMusicPath;
    audioRef.current.load();
    
    const playCustomAudio = () => {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          audioRef.current.onended = () => setIsPlaying(false);
        })
        .catch(() => {
          // Fallback to synthesized audio if custom file fails
          playFallbackAudio();
        });
    };

    // Check if custom file exists/loads
    audioRef.current.oncanplaythrough = playCustomAudio;
    audioRef.current.onerror = playFallbackAudio;

    // Fallback synthesized audio function
    function playFallbackAudio() {
      try {
        // Create a simple audio context for beep sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 1);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
        
        oscillator.onended = () => {
          setIsPlaying(false);
          audioContext.close();
        };
        
        setIsPlaying(true);
      } catch (error) {
        console.log('Audio not supported');
        setIsPlaying(false);
      }
    }
  };

  const ThemeIcon = () => {
    switch (theme) {
      case 'light':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        );
      case 'dark':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-white z-50 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 animate-slide-down">
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-pointer">
              Soujatya Bhunia
            </div>
            
            {/* Secret Music Input Field */}
            <div className="relative flex items-center animate-scale-in animation-delay-200">
              <input
                type="text"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                onKeyPress={handleSecretInput}
                onFocus={() => setIsSecretInputFocused(true)}
                onBlur={() => {
                  setTimeout(() => setIsSecretInputFocused(false), 200); // Increased delay
                }}
                className="bg-transparent border-none outline-none text-sm text-gray-600 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-500 w-8 focus:w-12 transition-all duration-300"
              />
              
              {isSecretInputFocused && secretCode && (
                <button
                  onMouseDown={(e) => {
                    e.preventDefault(); // Prevent input from losing focus
                    handleSendClick();
                  }}
                  className="ml-1 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 animate-fade-in-left"
                  title="Send"
                >
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in-up animation-delay-200">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group">
              Certifications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* Theme Toggle */}
            <div className="relative animate-scale-in animation-delay-400">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-md"
                title="Change theme"
              >
                <ThemeIcon />
              </button>
              
              {showThemeMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 animate-fade-in-up">
                  <button
                    onClick={() => {
                      changeTheme('light');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center hover:scale-105 ${
                      theme === 'light' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    Light
                  </button>
                  <button
                    onClick={() => {
                      changeTheme('dark');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center hover:scale-105 ${
                      theme === 'dark' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    Dark
                  </button>
                  <button
                    onClick={() => {
                      changeTheme('system');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center hover:scale-105 ${
                      theme === 'system' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                    System
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 animate-fade-in-up animation-delay-300">
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              title="Change theme"
            >
              <ThemeIcon />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6 fill-current transition-transform duration-300" viewBox="0 0 24 24" style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}>
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
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-100" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-200" onClick={() => setIsOpen(false)}>About</a>
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-300" onClick={() => setIsOpen(false)}>Experience</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-400" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-500" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600" onClick={() => setIsOpen(false)}>Certifications</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-700" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
        
        {/* Mobile Theme Menu */}
        {showThemeMenu && (
          <div className="md:hidden absolute right-4 top-16 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 animate-fade-in-up">
            <button
              onClick={() => {
                changeTheme('light');
                setShowThemeMenu(false);
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center hover:scale-105 ${
                theme === 'light' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
              Light
            </button>
            <button
              onClick={() => {
                changeTheme('dark');
                setShowThemeMenu(false);
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center ${
                theme === 'dark' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              Dark
            </button>
            <button
              onClick={() => {
                changeTheme('system');
                setShowThemeMenu(false);
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center ${
                theme === 'system' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
              System
            </button>
          </div>
        )}
      </nav>
      
      {/* Hidden Audio Element for Secret Song */}
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
        preload="none"
      />
    </header>
  );
};

export default Header;