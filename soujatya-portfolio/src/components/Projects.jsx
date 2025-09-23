   import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Influencer Marketing Platform",
      status: "Work in Progress",
      description: "Connects brands and creators through a clean, data-driven marketplace designed for transparency and trust. Provides brands with real-time insights into creators' views, subscribers, watch time, and retention to ensure authenticity. Helps brands avoid fake engagement while enabling creators to showcase genuine growth and credibility.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Dipu-36/Startup",
      featured: true
    },
    {
      title: "Network Quality Monitor",
      description: "Cross-platform React Native app for real-time network connectivity monitoring with built-in quality assessment. Automated metrics include ping response times, packet loss detection, and performance categorization (Excellent/Good/Fair/Poor). Comprehensive logging system with custom timestamp formatting and Excel export for uptime analysis and reporting.",
      technologies: ["React Native", "JavaScript", "Android"],
      github: "https://github.com/DMegatron/Network-Monitor.git",
      featured: true
    },
    {
      title: "AI Resume Parser & ATS Checker",
      description: "Intelligent resume parsing system that easily transfers data from multiple CVs into Excel format. Features include general ATS score checking with feedback and ATS score evaluation against specific job descriptions with detailed feedback.",
      technologies: ["Python", "AI/ML", "Excel", "Natural Language Processing"],
      github: "https://github.com/DMegatron/AI-Resume-Checker",
      featured: true
    },
    {
      title: "Real Time Chat Application",
      description: "Modern real-time communication platform enabling seamless interaction between multiple users. Features include instant messaging, private messaging capabilities, and real-time message delivery using WebSocket technology.",
      technologies: ["Node.js", "Socket.io", "JavaScript", "HTML/CSS"],
      github: "https://github.com/DMegatron/Real-Time-Chat-App",
      featured: false
    },
    {
      title: "E-Commerce Platform",
      description: "Comprehensive e-commerce solution supporting multiple user types and seller profiles. Complete marketplace functionality with user authentication, product management, and order processing capabilities.",
      technologies: ["JavaScript", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/DMegatron/Single-Seller-E-Commerce-Website",
      featured: false
    },
    {
      title: "Weather Checking Web App",
      description: "Dynamic weather application that handles API responses from OpenWeather and displays comprehensive weather information for any given location. Clean interface with real-time weather data and forecasting.",
      technologies: ["JavaScript", "API Integration", "HTML/CSS"],
      github: "https://github.com/DMegatron/WeatherSite",
      featured: false
    },
    {
      title: "File Converter",
      description: "Versatile file conversion tool supporting multi-format conversions including JPG, PNG, PDF, and Word documents. Features a simple UI with fast, secure processing and easy download functionality.",
      technologies: ["JavaScript", "File Processing", "HTML/CSS"],
      github: "https://github.com/DMegatron/File-Converter",
      featured: false
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 ${project.featured ? 'lg:col-span-2 xl:col-span-1' : ''}`}>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-start justify-between mb-4 gap-2">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
          {project.status && (
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
              {project.status}
            </span>
          )}
          {project.featured && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Code
          </a>
          
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-800">
            Projects
          </h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            A collection of projects showcasing my skills in full-stack development, 
            mobile applications, AI integration, and modern web technologies.
          </p>
          
          {/* Featured Projects */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-gray-800">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
          
          {/* Other Projects */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-gray-800">Other Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/DMegatron" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;