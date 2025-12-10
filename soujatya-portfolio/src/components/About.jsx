import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaGlobe, FaLaptopCode, FaCoffee } from 'react-icons/fa';
import SectionBackground from './SectionBackground';

const About = () => {
  return (
    <section id="about" className="relative py-12 md:py-24 bg-sky-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <SectionBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 text-center"
        >
           {/* Header removed from outside, moved inside or simplified if preferred, 
               but usually section headers stay outside. Let's keep a subtle one or remove if 'single tile' implies the header is inside. 
               User said 'single tile', implying the CONTENT is in one tile. I'll keep the main section header simple. */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        {/* The Single Tile / Dossier Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-white/5 shadow-2xl overflow-hidden"
        >
          {/* Tile Header / Banner */}
          <div className="h-32 bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 dark:opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             </div>
             <div className="absolute -bottom-10 -right-10 text-white/10">
                <FaCode className="text-9xl" />
             </div>
          </div>

          <div className="px-6 md:px-10 pb-8 md:pb-12">
             {/* Profile Grid */}
             <div className="flex flex-col md:flex-row gap-8 md:gap-12 -mt-12">
                
                {/* Visual / Left Column */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                   <div className="w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-slate-900 rounded-2xl p-2 shadow-lg rotate-3 transition-transform hover:rotate-0">
                      <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
                         <img src="/soujatya.webp" alt="Soujatya Bhunia" className="w-full h-full object-cover" />
                      </div>
                   </div>
                   
                   <div className="mt-6 text-center md:text-left space-y-1 w-full">
                      <div className="text-xs font-bold tracking-wider text-primary-600 dark:text-primary-400 uppercase">Status</div>
                      <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                         <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                         Open to Work
                      </div>
                   </div>

                   <div className="mt-6 w-full space-y-3 hidden md:block">
                      <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-700">
                         <span className="text-gray-500 dark:text-gray-400">Experience</span>
                         <span className="font-bold text-gray-900 dark:text-white">3+ Years</span>
                      </div>
                      <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-700">
                         <span className="text-gray-500 dark:text-gray-400">Location</span>
                         <span className="font-bold text-gray-900 dark:text-white flex items-center gap-1"><FaGlobe /> India</span>
                      </div>
                      <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100 dark:border-gray-700">
                         <span className="text-gray-500 dark:text-gray-400">Fuel</span>
                         <span className="font-bold text-gray-900 dark:text-white flex items-center gap-1"><FaCoffee /> Coffee</span>
                      </div>
                   </div>
                </div>

                {/* Content / Right Column */}
                <div className="flex-1 pt-4 md:pt-14">
                   <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center md:text-left">
                      Soujatya Bhunia
                   </h3>
                   <p className="text-primary-600 dark:text-primary-400 font-medium mb-6 text-center md:text-left">
                      Full Stack Developer & Problem Solver
                   </p>

                   <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed space-y-4 text-center md:text-left">
                      <p>
                        I'm a passionate Computer Science student and aspiring full-stack developer with a love for creating 
                        innovative digital solutions. My journey in technology is driven by curiosity and a commitment to 
                        continuous learning.
                      </p>
                      <p>
                        I specialize in building modern web applications using cutting-edge technologies 
                        like React, Node.js, and Python, turning complex challenges into elegant solutions.
                      </p>
                   </div>

                   {/* Stats Row Mobile Only */}
                   <div className="mt-8 flex md:hidden items-center justify-between bg-gray-50 dark:bg-slate-700/50 p-4 rounded-xl">
                      <div className="text-center">
                         <div className="text-xl font-bold text-gray-900 dark:text-white">3+</div>
                         <div className="text-xs text-gray-500">Years</div>
                      </div>
                      <div className="w-px h-8 bg-gray-200 dark:bg-gray-600"></div>
                      <div className="text-center">
                         <div className="text-xl font-bold text-gray-900 dark:text-white">7+</div>
                         <div className="text-xs text-gray-500">Projects</div>
                      </div>
                      <div className="w-px h-8 bg-gray-200 dark:bg-gray-600"></div>
                      <div className="text-center">
                         <div className="text-xl font-bold text-gray-900 dark:text-white">India</div>
                         <div className="text-xs text-gray-500">Loc</div>
                      </div>
                   </div>

                   {/* Vision Box */}
                   <div className="mt-8 md:mt-10 p-5 bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/20 rounded-xl relative">
                      <FaRocket className="absolute top-4 right-4 text-primary-200 dark:text-primary-800 text-3xl" />
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary-700 dark:text-primary-400 mb-2">My Vision</h4>
                      <p className="text-gray-700 dark:text-gray-300 italic text-sm md:text-base">
                        "To engineer impactful digital experiences that merge functionality with aesthetics, 
                        solving real-world problems through innovative technology."
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;