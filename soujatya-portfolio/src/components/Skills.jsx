import React from 'react';

const Skills = () => {
  // Technical Skills
  const technicalSkills = [
    { name: "C", color: "bg-blue-600" },
    { name: "C++", color: "bg-indigo-500" },
    { name: "Java", color: "bg-red-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "PHP", color: "bg-purple-500" },
    { name: "GO", color: "bg-cyan-600" },
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "React JS", color: "bg-cyan-500" },
    { name: "Node", color: "bg-green-600" },
    { name: "Express", color: "bg-gray-700" },
    { name: "MySQL", color: "bg-blue-700" },
    { name: "MongoDB", color: "bg-green-500" }
  ];

  // Software Proficiency
  const softwareProficiency = [
    { name: "Git", color: "bg-red-600" },
    { name: "GitHub", color: "bg-slate-700" },
    { name: "Postman", color: "bg-orange-600" },
    { name: "Visual Paradigm", color: "bg-purple-600" },
    { name: "Figma", color: "bg-pink-500" }
  ];

  const languages = [
    { name: "English", level: "Professional Proficiency"},
    { name: "Hindi", level: "Professional Proficiency"},
    { name: "Bengali", level: "Native Proficiency"}
  ];

  const SkillBadge = ({ skill, index = 0 }) => (
    <div className={`${skill.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-scale-in cursor-pointer`} 
         style={{ animationDelay: `${index * 100}ms` }}>
      {skill.name}
    </div>
  );

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-slate-100 dark:bg-gray-950 w-full transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-500/10 rounded-full animate-float-reverse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-green-500/10 rounded-full animate-bounce delay-2000"></div>
        
        {/* Code-like Elements */}
        <div className="absolute top-20 right-20 text-6xl text-blue-300/10 dark:text-blue-600/10 animate-float-slow">&lt;/&gt;</div>
        <div className="absolute bottom-20 left-20 text-4xl text-purple-300/10 dark:text-purple-600/10 animate-float-reverse">{}</div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/2 left-10 w-14 h-14 border border-blue-300/20 dark:border-blue-600/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-10 w-10 h-10 border border-purple-300/20 dark:border-purple-600/20 rotate-12 animate-float"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white animate-fade-in-up">
            Skills & Technologies
          </h2>
          
          {/* Technical Skills */}
          <div className="mb-8 bg-slate-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300/50 dark:hover:border-blue-600/50 group animate-fade-in-up delay-300">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technicalSkills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          {/* Software Proficiency */}
          <div className="mb-8 bg-gray-200 dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-purple-300/50 dark:hover:border-purple-600/50 group animate-fade-in-up delay-500">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800 dark:text-white text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              Software Proficiency
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softwareProficiency.map((skill, index) => (
                <SkillBadge key={index} skill={skill} index={index + technicalSkills.length} />
              ))}
            </div>
          </div>
          
          {/* Languages */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-white text-center">
              Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((language, index) => {
                const colors = [
                  "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-800/60 dark:to-blue-700/60 border-blue-200 dark:border-blue-500",
                  "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-800/60 dark:to-green-700/60 border-green-200 dark:border-green-500", 
                  "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-800/60 dark:to-purple-700/60 border-purple-200 dark:border-purple-500"
                ];
                return (
                  <div key={index} className={`${colors[index]} p-6 rounded-xl shadow-md dark:shadow-gray-900/50 text-center border-2 hover:shadow-lg dark:hover:shadow-gray-900/70 transition-all duration-300 transform hover:scale-105`}>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{language.name}</h4>
                    <p className="text-gray-600 dark:text-gray-200 text-sm font-medium">{language.level}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;