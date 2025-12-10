import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionBackground from './SectionBackground';


const projects = [
  {
    title: "Influencer Marketing Platform",
    status: "Work in Progress",
    description: "Data-driven marketplace connecting brands and creators with real-time insights and authenticity verification.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Dipu-36/Startup"
  },
  {
    title: "Hostel Pass Management System",
    status: "Work in Progress",
    description: "Web platform for students to apply for gate and leave passes with multi-level approvals. QR-based tracking for entry and exit verification.",
    technologies: ["Laravel", "React", "MongoDB"],
    github: "https://github.com/DMegatron/HPMS"
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const ProjectCard = ({ project }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10 }}
    className="group h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 flex flex-col"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {project.title}
      </h3>
      {project.status && (
        <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full whitespace-nowrap">
          {project.status}
        </span>
      )}
    </div>

    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded-lg"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="pt-4 border-t border-gray-100 dark:border-slate-700 mt-auto">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <FaGithub className="text-lg" />
        View Source
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-12 md:py-20 bg-sky-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <SectionBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development and modern technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/DMegatron"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <FaGithub className="text-xl" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;