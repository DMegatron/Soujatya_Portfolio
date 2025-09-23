import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS configuration from environment variables
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'soujatyabhunia2003@gmail.com'
      };

      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      ),
      title: "Email",
      value: "soujatyabhunia2003@gmail.com",
      link: "mailto:soujatyabhunia2003@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      ),
      title: "Phone",
      value: "+91 8250776861",
      link: "tel:+918250776861"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Location",
      value: "Purba Medinipur, West Bengal, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DMegatron",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/soujatya-bhunia",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:bg-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-100 dark:bg-gray-900 text-gray-800 dark:text-white w-full transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Message Icons */}
        <div className="absolute top-20 left-[10%] text-blue-400 opacity-10 animate-float">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-[15%] text-purple-400 opacity-10 animate-float-delayed">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-[20%] text-green-400 opacity-10 animate-float">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        
        {/* Connection Network Lines */}
        <div className="absolute top-1/4 right-[8%] w-16 h-16 border border-blue-400/20 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 left-[12%] w-12 h-12 border border-purple-400/20 rounded-full animate-pulse-soft animation-delay-1000"></div>
        
        {/* Floating Contact Symbols */}
        <div className="absolute top-60 right-[25%] text-indigo-400 opacity-8 animate-float-delayed">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-[35%] text-cyan-400 opacity-8 animate-float">
          <span className="text-sm font-mono">@</span>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Let's connect and discuss opportunities, collaborations, or just chat about technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
            {/* Contact Information */}
            <div className="bg-white/90 dark:bg-gray-800 rounded-xl shadow-lg p-8 lg:p-10 border border-gray-200 dark:border-gray-700 backdrop-blur-sm transition-all duration-300 h-full min-h-[600px] flex flex-col animate-fade-in-up animation-delay-400 hover:shadow-xl hover:scale-[1.02] group">
              <h3 className="text-xl font-semibold mb-8 text-gray-800 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6 flex-1">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`flex items-start animate-fade-in-up group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-300 hover:scale-105`} style={{animationDelay: `${600 + index * 100}ms`}}>
                    <div className="bg-blue-600 dark:bg-blue-600 p-3 rounded-lg mr-4 flex-shrink-0 group-hover/item:scale-110 group-hover/item:shadow-lg transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-1">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 break-all hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Social Links */}
                <div className="mt-8 animate-fade-in-up animation-delay-1000">
                  <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-gray-200 dark:bg-gray-700 p-3 rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg animate-scale-in`}
                        style={{animationDelay: `${1200 + index * 100}ms`}}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Availability */}
              <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 p-6 rounded-lg mt-8 animate-fade-in-up animation-delay-1600 hover:bg-green-200 dark:hover:bg-green-900/40 transition-all duration-300 hover:scale-105">
                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Currently Available</h4>
                <p className="text-green-600 dark:text-gray-300 leading-relaxed">
                  Seeking internship and full-time opportunities. Available for working remote or on-site.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/90 dark:bg-gray-800 rounded-xl shadow-lg p-8 lg:p-10 border border-gray-200 dark:border-gray-700 backdrop-blur-sm transition-all duration-300 h-full min-h-[600px] flex flex-col animate-fade-in-up animation-delay-800 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-8 text-gray-800 dark:text-white">Send a Message</h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6 flex-1">
                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-lg border animate-fade-in-up ${
                    status.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 text-green-700 dark:text-green-400'
                      : 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700 text-red-700 dark:text-red-400'
                  }`}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {status.type === 'success' ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{status.message}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up animation-delay-1000">
                  <div className="group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-blue-400"
                      placeholder="Full Name *"
                    />
                  </div>
                  
                  <div className="group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-blue-400"
                      placeholder="Email Address *"
                    />
                  </div>
                </div>
                
                <div className="animate-fade-in-up animation-delay-1200 group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-blue-400"
                    placeholder="Subject *"
                  />
                </div>
                
                <div className="flex-1 animate-fade-in-up animation-delay-1400 group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    rows="6"
                    className="w-full h-full min-h-[120px] px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-800 dark:text-white transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-blue-400"
                    placeholder="Your message *"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center animate-fade-in-up animation-delay-1600 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-gray-500 dark:text-gray-400 text-xs text-center mt-4 animate-fade-in-up animation-delay-1800">
                📧 I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;