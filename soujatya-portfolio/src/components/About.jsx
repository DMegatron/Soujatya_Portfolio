import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-6 sm:py-8 bg-slate-50 dark:bg-gray-900 w-full min-h-screen flex items-center transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
              Passionate developer crafting innovative solutions
            </p>
          </div>

          {/* Profile Summary */}
          <div className="space-y-8">
            {/* Who I Am */}
            <div className="bg-white/80 dark:bg-gray-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-600 text-center transition-colors duration-300 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto">
                I'm a passionate Computer Science student and aspiring full-stack developer with a love for creating 
                innovative digital solutions. My journey in technology is driven by curiosity and a commitment to 
                continuous learning. I specialize in building modern web applications using cutting-edge technologies 
                like React, Node.js, and Python, turning complex challenges into elegant solutions.
              </p>
            </div>

            {/* Core Strengths */}
            <div className="bg-white/80 dark:bg-gray-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-600 transition-colors duration-300 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Core Strengths</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Full-Stack Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">End-to-end web solutions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Problem Solving</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Creative & analytical thinking</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">UI/UX Design</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">User-centered interfaces</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Team Collaboration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Effective communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;