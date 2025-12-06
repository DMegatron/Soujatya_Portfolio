import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaCloud, FaMobileAlt } from 'react-icons/fa';

const SectionBackground = () => {
  const icons = [
    { Icon: FaCode, color: "text-blue-500", delay: 0, x: "10%", y: "20%" },
    { Icon: FaLaptopCode, color: "text-purple-500", delay: 2, x: "80%", y: "15%" },
    { Icon: FaServer, color: "text-green-500", delay: 4, x: "20%", y: "80%" },
    { Icon: FaDatabase, color: "text-red-500", delay: 1, x: "70%", y: "70%" },
    { Icon: FaCloud, color: "text-cyan-500", delay: 3, x: "40%", y: "40%" },
    { Icon: FaMobileAlt, color: "text-orange-500", delay: 5, x: "90%", y: "50%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Blobs */}
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-300/50 dark:bg-primary-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply dark:mix-blend-normal" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-300/50 dark:bg-secondary-900/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 mix-blend-multiply dark:mix-blend-normal" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-300/40 dark:bg-purple-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply dark:mix-blend-normal" />

      {/* Floating Icons */}
      {icons.map(({ Icon, color, delay, x, y }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-10 dark:opacity-5 text-4xl`}
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>
      ))}
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
    </div>
  );
};

export default SectionBackground;
