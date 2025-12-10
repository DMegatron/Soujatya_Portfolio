import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaProjectDiagram } from 'react-icons/fa';
import { SiC, SiCplusplus, SiJavascript, SiPhp, SiGo, SiHtml5, SiCss3, SiExpress, SiMysql, SiMongodb, SiPostman } from 'react-icons/si';
import SectionBackground from './SectionBackground';

const technicalSkills = [
  { name: "C", color: "bg-blue-600", icon: <SiC className="text-xl" /> },
  { name: "C++", color: "bg-indigo-500", icon: <SiCplusplus className="text-xl" /> },
  { name: "Java", color: "bg-red-500", icon: <FaJava className="text-xl" /> },
  { name: "JavaScript", color: "bg-yellow-500", icon: <SiJavascript className="text-xl" /> },
  { name: "PHP", color: "bg-purple-500", icon: <SiPhp className="text-xl" /> },
  { name: "GO", color: "bg-cyan-600", icon: <SiGo className="text-xl" /> },
  { name: "HTML", color: "bg-orange-500", icon: <SiHtml5 className="text-xl" /> },
  { name: "CSS", color: "bg-blue-500", icon: <SiCss3 className="text-xl" /> },
  { name: "React JS", color: "bg-cyan-500", icon: <FaReact className="text-xl" /> },
  { name: "Node", color: "bg-green-600", icon: <FaNodeJs className="text-xl" /> },
  { name: "Express", color: "bg-gray-700", icon: <SiExpress className="text-xl" /> },
  { name: "MySQL", color: "bg-blue-700", icon: <SiMysql className="text-xl" /> },
  { name: "MongoDB", color: "bg-green-500", icon: <SiMongodb className="text-xl" /> }
];

const softwareProficiency = [
  { name: "Git", color: "bg-red-600", icon: <FaGitAlt className="text-xl" /> },
  { name: "GitHub", color: "bg-slate-700", icon: <FaGithub className="text-xl" /> },
  { name: "Postman", color: "bg-orange-600", icon: <SiPostman className="text-xl" /> },
  { name: "Visual Paradigm", color: "bg-purple-600", icon: <FaProjectDiagram className="text-xl" /> },
  { name: "Figma", color: "bg-pink-500", icon: <FaFigma className="text-xl" /> }
];

const languages = [
  { name: "English", level: "Professional Proficiency" },
  { name: "Hindi", level: "Professional Proficiency" },
  { name: "Bengali", level: "Native Proficiency" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const SkillBadge = ({ skill }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.1, rotate: 3 }}
    whileTap={{ scale: 0.95 }}
    className={`${skill.color} text-white px-4 py-2 md:px-5 md:py-3 rounded-xl text-sm font-medium shadow-lg cursor-pointer flex items-center gap-3 hover:shadow-xl transition-shadow`}
  >
    {skill.icon}
    <span>{skill.name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative py-12 md:py-20 bg-teal-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <SectionBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I use to build digital solutions.
          </p>
        </motion.div>

        <div className="space-y-10 md:space-y-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 md:mb-8 text-center text-gray-800 dark:text-gray-200">
              Technical Skills
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {technicalSkills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Software Proficiency */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 md:mb-8 text-center text-gray-800 dark:text-gray-200">
              Software Proficiency
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {softwareProficiency.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 md:mb-8 text-center text-gray-800 dark:text-gray-200">
              Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 text-center"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{lang.name}</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;