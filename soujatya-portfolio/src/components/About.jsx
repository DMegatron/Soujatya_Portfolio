import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education Journey
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
              Building a strong foundation in computer science and technology
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full rounded-full"></div>

            {/* Current Education */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">B.Tech Computer Science Engineering</h3>
                  <p className="text-blue-600 font-semibold mb-2">Adamas University</p>
                  <p className="text-gray-500 mb-4">2022 - Pursuing (4th Year)</p>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                    <span className="text-blue-800 font-semibold">CGPA: 8.26</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Higher Secondary */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Higher Secondary Education</h3>
                  <p className="text-green-600 font-semibold mb-2">Asadtala Binode Vidyapith</p>
                  <p className="text-gray-500 mb-4">2019 - 2021</p>
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
                    <span className="text-green-800 font-semibold">95%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary */}
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Secondary Education</h3>
                  <p className="text-purple-600 font-semibold mb-2">Asadtala Binode Vidyapith</p>
                  <p className="text-gray-500 mb-4">2013 - 2019</p>
                  <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full">
                    <span className="text-purple-800 font-semibold">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Years of Academic Excellence</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Highest Academic Score</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">8.26</div>
              <div className="text-gray-600">Current CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;