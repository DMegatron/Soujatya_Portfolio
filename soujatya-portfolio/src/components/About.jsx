import React from 'react';
import { motion } from 'framer-motion';
import { FaLayerGroup, FaLightbulb, FaPalette, FaUsers, FaCode, FaRocket } from 'react-icons/fa';
import SectionBackground from './SectionBackground';

const About = () => {
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

  return (
    <section id="about" className="relative py-20 bg-sky-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <SectionBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting innovative solutions with a focus on user experience and performance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Bio - Spans 2 columns */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate Computer Science student and aspiring full-stack developer with a love for creating 
              innovative digital solutions. My journey in technology is driven by curiosity and a commitment to 
              continuous learning.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in building modern web applications using cutting-edge technologies 
              like React, Node.js, and Python, turning complex challenges into elegant solutions.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="bg-primary-600 text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg"
          >
            <FaCode className="text-4xl mb-4 opacity-80" />
            <div className="text-4xl font-bold mb-2">3+</div>
            <div className="text-primary-100">Years Coding</div>
          </motion.div>

          {/* Core Strengths Grid */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: FaLayerGroup, title: 'Full Stack', desc: 'End-to-end solutions', color: 'text-blue-500' },
              { icon: FaLightbulb, title: 'Problem Solving', desc: 'Analytical thinking', color: 'text-yellow-500' },
              { icon: FaPalette, title: 'UI/UX Design', desc: 'User-centered', color: 'text-purple-500' },
              { icon: FaUsers, title: 'Collaboration', desc: 'Team player', color: 'text-green-500' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-full bg-gray-50 dark:bg-slate-700 flex items-center justify-center mb-4 ${item.color}`}>
                  <item.icon className="text-2xl" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Goal/Vision */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 bg-gradient-to-r from-secondary-600 to-primary-600 p-8 rounded-2xl text-white flex items-center justify-between gap-6 shadow-lg"
          >
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-2">My Vision</h3>
              <p className="text-white/90">
                To build scalable, impactful applications that solve real-world problems and enhance user experiences through clean code and intuitive design.
              </p>
            </div>
            <FaRocket className="text-6xl text-white/20 hidden sm:block" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;