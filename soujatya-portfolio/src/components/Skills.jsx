   import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 90, color: "bg-blue-500" },
        { name: "C++", level: 85, color: "bg-indigo-500" },
        { name: "Java", level: 80, color: "bg-red-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "PHP", level: 85, color: "bg-purple-500" },
        { name: "GO", level: 70, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML", level: 95, color: "bg-orange-500" },
        { name: "CSS", level: 90, color: "bg-blue-600" },
        { name: "React JS", level: 85, color: "bg-cyan-400" },
        { name: "Tailwind CSS", level: 80, color: "bg-teal-500" }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Express", level: 80, color: "bg-gray-600" },
        { name: "MySQL", level: 85, color: "bg-blue-700" },
        { name: "MongoDB", level: 80, color: "bg-green-500" }
      ]
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "Git", level: 85, color: "bg-red-600" },
        { name: "GitHub", level: 90, color: "bg-gray-800" },
        { name: "Visual Paradigm", level: 75, color: "bg-purple-600" },
        { name: "Figma", level: 70, color: "bg-pink-500" },
        { name: "Postman", level: 80, color: "bg-orange-600" }
      ]
    }
  ];

  const languages = [
    { name: "English", level: "Professional Proficiency", flag: "🇺🇸" },
    { name: "Hindi", level: "Professional Proficiency", flag: "🇮🇳" },
    { name: "Bengali", level: "Native Proficiency", flag: "🇧🇩" }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-800">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            A comprehensive overview of my technical skills, programming languages, 
            frameworks, and tools I use to build modern applications.
          </p>
          
          {/* Technical Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-2">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Languages */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 lg:p-12 rounded-lg shadow-md mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-gray-800 text-center">
              Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-3">{language.flag}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{language.name}</h4>
                  <p className="text-gray-600">{language.level}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Strengths */}
          <div className="bg-gray-800 text-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-center">
              Key Strengths
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Full Stack Development</h4>
                <p className="text-gray-300 text-sm">End-to-end web application development</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Problem Solving</h4>
                <p className="text-gray-300 text-sm">Analytical thinking and solution design</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Team Collaboration</h4>
                <p className="text-gray-300 text-sm">Leadership and teamwork skills</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Quick Learning</h4>
                <p className="text-gray-300 text-sm">Adaptability to new technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;