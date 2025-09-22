import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-slate-100 dark:bg-gray-950 w-full transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-gray-800 dark:text-white">
            Experience
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-500 dark:bg-blue-400"></div>
            
            <div className="relative pl-16 sm:pl-20">
              {/* Experience Item */}
              <div className="mb-12">
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-6 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg hover:shadow-xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-shadow duration-300 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">Software Development Intern</h3>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full text-sm w-fit">
                      Sept 2024 – April 2025
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">KATSI Canada</h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-gray-600 dark:text-gray-300">Co-developed an OFAC List Checking Web Application</p>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-gray-600 dark:text-gray-300">Developed and maintained the backend using PHP</p>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-gray-600 dark:text-gray-300">Designed and managed the database with MySQL</p>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-gray-600 dark:text-gray-300">Built and enhanced the frontend using HTML, CSS, and JavaScript</p>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-gray-600 dark:text-gray-300">Assisted in business documentation using Visual Paradigm</p>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-gray-600 dark:text-gray-300">Contributed to team management and project coordination</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">PHP</span>
                    <span className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                    <span className="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">HTML/CSS</span>
                    <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">Visual Paradigm</span>
                  </div>
                  
                  <a 
                    href="https://ofac.aucseapp.in/OFAC/OFAC_Prototype_1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    View Project Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Currently seeking new opportunities to grow and contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;