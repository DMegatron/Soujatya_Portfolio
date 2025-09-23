import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Problem Solving Through Programming in C",
      issuer: "NPTEL",
      date: "2023",
      description: "Comprehensive course covering problem-solving techniques and programming fundamentals using C language.",
      icon: "🏆",
      category: "Programming"
    },
    {
      title: "PHP for Beginners: The Complete PHP MySQL PDO Course",
      issuer: "Online Learning Platform",
      date: "2024",
      description: "Complete course covering PHP fundamentals, MySQL database integration, and PDO for secure database operations.",
      icon: "💻",
      category: "Web Development"
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Adamas University",
      period: "2022 – Pursuing",
      cgpa: "8.26",
      description: "Currently pursuing Bachelor's degree with focus on software development, algorithms, and modern computing technologies."
    },
    {
      degree: "Higher Secondary",
      institution: "Asadtala Binode Vidyapith",
      period: "2019 – 2021",
      percentage: "95%",
      description: "Completed higher secondary education with exceptional performance in science stream."
    },
    {
      degree: "Secondary",
      institution: "Asadtala Binode Vidyapith",
      period: "2013 - 2019",
      percentage: "90%",
      description: "Strong foundational education with excellent academic performance."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Certifications & Education
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            My academic achievements and professional certifications that demonstrate 
            continuous learning and expertise in various technologies.
          </p>
          
          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <div className="text-3xl mr-4">{cert.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-800">{cert.title}</h4>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {cert.category}
                        </span>
                      </div>
                      <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
                      <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                      <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                      <p className="text-blue-600 font-semibold mb-1">{edu.institution}</p>
                      <p className="text-gray-500">{edu.period}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:text-right">
                      {edu.cgpa && (
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block">
                          <span className="font-semibold">CGPA: {edu.cgpa}</span>
                        </div>
                      )}
                      {edu.percentage && (
                        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-block">
                          <span className="font-semibold">{edu.percentage}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Academic Achievements */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Academic Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">8.26</div>
                <p className="text-blue-100">Current CGPA</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-blue-100">Higher Secondary</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2+</div>
                <p className="text-blue-100">Certifications</p>
              </div>
            </div>
          </div>
          
          {/* Learning Goals */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Continuous Learning</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Committed to staying updated with the latest technologies and industry trends. 
              Currently exploring advanced concepts in cloud computing, DevOps, and artificial intelligence 
              to enhance my technical expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;