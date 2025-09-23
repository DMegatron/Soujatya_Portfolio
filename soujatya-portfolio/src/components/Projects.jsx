   import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Influencer Marketing Platform",
      status: "Work in Progress",
      description: "Data-driven marketplace connecting brands and creators with real-time insights and authenticity verification.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Dipu-36/Startup"
    },
    {
      title: "Network Quality Monitor",
      description: "React Native app for real-time network monitoring with automated quality assessment and reporting.",
      technologies: ["React Native", "JavaScript"],
      github: "https://github.com/DMegatron/Network-Monitor.git"
    },
    {
      title: "AI Resume Parser & ATS Checker",
      description: "Intelligent system for resume parsing and ATS scoring with detailed feedback and job matching.",
      technologies: ["Python", "AI/ML", "NLP"],
      github: "https://github.com/DMegatron/AI-Resume-Checker"
    },
    {
      title: "Real Time Chat Application",
      description: "Modern communication platform with instant messaging and WebSocket technology.",
      technologies: ["Node.js", "Socket.io", "JavaScript"],
      github: "https://github.com/DMegatron/Real-Time-Chat-App"
    },
    {
      title: "E-Commerce Platform",
      description: "Complete marketplace with user authentication, product management, and order processing.",
      technologies: ["JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/DMegatron/Single-Seller-E-Commerce-Website"
    },
    {
      title: "Weather Web App",
      description: "Dynamic weather application with OpenWeather API integration and real-time forecasting.",
      technologies: ["JavaScript", "API Integration"],
      github: "https://github.com/DMegatron/WeatherSite"
    },
    {
      title: "File Converter",
      description: "Multi-format file conversion tool supporting JPG, PNG, PDF, and Word documents.",
      technologies: ["JavaScript", "File Processing"],
      github: "https://github.com/DMegatron/File-Converter"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="bg-white/80 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-500 p-6 h-full flex flex-col backdrop-blur-sm hover:-translate-y-2 hover:border-blue-300/50 dark:hover:border-blue-600/50 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white flex-1 pr-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
        {project.status && (
          <span className="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap animate-pulse-soft">
            {project.status}
          </span>
        )}
      </div>
      
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">{project.description}</p>
      
      {/* Technologies */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Code
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-8 bg-slate-50 dark:bg-gray-900 w-full scroll-mt-20 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/5 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-purple-500/5 rounded-full animate-float-reverse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 border border-blue-300/20 dark:border-blue-600/20 rotate-45 animate-spin-slow"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A collection of projects showcasing full-stack development and modern technologies.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`animate-fade-in-up delay-${(index % 3 + 1) * 300}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up delay-1000">
            <a 
              href="https://github.com/DMegatron" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium hover:-translate-y-1"
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