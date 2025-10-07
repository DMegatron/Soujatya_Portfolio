import { useEffect } from 'react';

const SEO = ({ 
  title = "Soujatya Bhunia - Full Stack Developer | React, Node.js, PHP Expert",
  description = "Experienced Full Stack Developer & B.Tech CSE Student specializing in React, Node.js, PHP, MySQL, and modern web technologies. Software Development Intern at KATSI Canada.",
  keywords = "Soujatya Bhunia, Full Stack Developer, React Developer, Node.js, PHP, MySQL, MongoDB, JavaScript, Web Developer, Software Engineer, KATSI Canada, Portfolio, B.Tech CSE, Computer Science, Programming, Software Development, Algorithm, Data Structures, Database Management, Web Technologies, Machine Learning, Artificial Intelligence, Python, Java, C++, HTML, CSS, Bootstrap, Tailwind, Git, GitHub, DevOps, Cloud Computing, AWS, Azure, REST API, GraphQL, Microservices, Agile, Scrum, Object Oriented Programming, System Design, Software Architecture, Mobile Development, Cybersecurity, Blockchain, IoT, Big Data, Data Science, UI/UX Design, Responsive Design, Cross Platform Development, Version Control, CI/CD, Docker, Kubernetes, Linux, Database Design, SQL, NoSQL, API Development, Web Services, Network Programming, Distributed Systems, Computer Graphics, Game Development, Virtual Reality, Computer Vision, Deep Learning, Neural Networks, Software Testing, Code Review, Design Patterns, Clean Code, Progressive Web Apps, Server Side Rendering, Performance Optimization, Security, Open Source, Tech Leadership, Project Management, Agile Methodologies, Technical Documentation, Problem Solving, Innovation, Startup Experience, Enterprise Software, Digital Transformation, Technology Consulting, Custom Software Development, E-commerce Development, SEO Optimization, Web Analytics, Mobile App Development, Cross Browser Compatibility, Accessibility, User Experience, Business Intelligence, Data Analytics, Statistical Analysis, Mathematical Modeling, Optimization Algorithms, Operating Systems, System Administration, Network Administration, Database Administration, Information Security, Risk Management, Compliance, Quality Assurance, Performance Monitoring, Scalability, High Availability, Disaster Recovery, Business Continuity, Technical Writing, Communication Skills, Leadership Skills, Mentoring, Continuous Learning, Professional Development, Industry Trends, Emerging Technologies, Innovation Labs, Research and Development, Rapid Prototyping, MVP Development, Lean Startup, Design Thinking, Product Management, Business Analysis, Requirements Analysis, Solution Architecture, Technology Strategy, Digital Strategy, Remote Work, Distributed Teams, Cross Cultural Communication, Stakeholder Management, Budget Management, Resource Planning, Strategic Planning, ROI Analysis, Performance Metrics, Quality Management, Process Improvement, Automation, Tool Integration, Platform Integration, System Integration, Data Integration, Cloud Migration, Infrastructure as Code, Configuration Management, Deployment Automation, Incident Response, Change Management, Documentation Management, Knowledge Management, Training Development, Career Development, Certification, Community Participation, Open Source Contribution, Technical Blogging, Conference Speaking, Mentorship Programs, Talent Acquisition, Team Building, Employee Engagement, Productivity Management, Time Management, Project Coordination, Cross Functional Collaboration, Matrix Management, Virtual Teams, Cultural Sensitivity, Diversity and Inclusion, Professional Ethics, Conflict Resolution, Negotiation Skills, Public Speaking, Data Visualization, Technical Communication, Business Communication, Customer Service, Business Development, Customer Success, User Experience Design, Service Design, Information Architecture, Dashboard Design",
  image = "https://www.soujatya.me/og-image.png",
  url = "https://www.soujatya.me/",
  type = "website",
  author = "Soujatya Bhunia"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.href = url;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = url;
      document.head.appendChild(canonicalLink);
    }

  }, [title, description, keywords, image, url, type, author]);

  return null; // This component doesn't render anything
};

export default SEO;