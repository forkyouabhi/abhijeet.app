"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, Menu, X, MapPin, Calendar, GraduationCap, Award, Code, Users, TrendingUp, Server, Smartphone, Palette } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [theme, setTheme] = useState('dark'); // Default theme is dark

  // Effect to apply the theme class to the <html> element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Scroll handling effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight && rect.bottom > 0;
          setIsVisible(prev => ({ ...prev, [section]: isInView }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "Web Developer / Digital Strategist",
      company: "Prshni Organisation",
      period: "May 2021 – Mar. 2023",
      location: "Haryana, India",
      achievements: [ "Increased mobile traffic by 40% and reduced bounce rate by 25%", "Achieved 99.9% uptime with optimized Linux/Nginx server setup", "Boosted organic traffic by 35% and social media engagement by 60%", "Built real-time tracking module processing 1,200+ monthly updates" ],
      tech: ["Linux", "Nginx", "PHP", "MySQL", "SEO"],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Web Developer / Digital Consultant",  
      company: "Stech Waterproofing Co.",
      period: "Jan. 2020 – Jun. 2022",
      location: "New Delhi, India",
      achievements: [ "Increased client inquiries by 45% through professional website design", "Boosted organic traffic by 60% with SEO strategies", "Improved ad ROI by 22% using targeted analytics", "Grew audience engagement by 50% across platforms" ],
      tech: ["Linux", "Nginx", "PHP", "MySQL", "GCP"],
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Personal Shopper",
      company: "Loblaws Companies Limited",
      period: "Sept. 2023 – Present",
      location: "Thunder Bay, ON",
      achievements: [ "Provided exceptional customer service for grocery fulfillment", "Streamlined operations during peak hours through coordination", "Developed strong communication and problem-solving skills" ],
      tech: ["Customer Service", "Operations", "Teamwork"],
      icon: <Users className="w-5 h-5" />
    }
  ];

  const projects = [
     {
      title: "Business Card App",
      url:"https://github.com/forkyouabhi/BussinessCardApp",
      description: "Functional Android business card application with complete backup and restore functionality",
      tech: ["Android", "Kotlin", "UI/UX", "BackupManager"],
      period: "Feb. 2025",
      achievements: [ "Seamless UX across all Android devices", "Full backup and restore capabilities", "Collaborative design process" ],
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "EcoThread",
       url:"https://github.com/forkyouabhi/Ecothread",
      description: "MERN stack MVP built during 36-hour Google DSC hackathon supporting 500+ concurrent users with <200ms response time",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary", "Passport.js"],
      period: "Nov. 2023",
      achievements: [ "99.8% uptime during testing phase", "Compressed image uploads in <2s", "100% secured private routes with JWT" ],
      icon: <Server className="w-6 h-6" />
    },
   
    {
      title: "IRA – Mindfulness App",
       url:"https://youtu.be/9kxUDy2_CTA",
      description: "Award-winning breathing and meditation app UI/UX design that won 1st place in competition",
      tech: ["Figma", "UI/UX Design", "Android", "User Testing"],
      period: "Nov. 2022",
      achievements: [ "1st place in intra-school competition", "Reduced onboarding time to <30s", "95% prototype-to-app implementation match" ],
      icon: <Palette className="w-6 h-6" />
    }
  ];

  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Abhijeet Singh
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="flex md:hidden items-center gap-2">
                <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                    className="p-2 text-gray-600 dark:text-gray-400"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <div className={`container mx-auto text-center transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
              Abhijeet Singh
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Full Stack Developer & Digital Strategist
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Computer Science student at Lakehead University with 3+ years of experience building scalable web applications and driving digital growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2"><MapPin size={16} /><span>Thunder Bay, ON</span></div>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div className="flex items-center gap-2"><Mail size={16} /><a href="mailto:hello@abhijeet.app" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">hello@abhijeet.app</a></div>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              
            </div>

            <div className="flex justify-center space-x-4 mb-12">
              <a href="https://linkedin.com/in/abhijeet3101" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"><Linkedin size={20} className="text-blue-600 dark:text-blue-400" /></a>
              <a href="https://github.com/forkyouabhi" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"><Github size={20} className="text-gray-700 dark:text-gray-300" /></a>
              <a href="mailto:hello@abhijeet.app" className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"><Mail size={20} className="text-green-600 dark:text-green-400" /></a>
            </div>

            <button onClick={() => scrollToSection('experience')} className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg">View My Work</button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">I'm a passionate Computer Science student at Lakehead University with over 3 years of professional web development experience. My journey spans from building responsive websites that increased mobile traffic by 40% to architecting scalable MERN stack applications.</p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">I specialize in full-stack development, digital strategy, and creating user-centered solutions. Whether it's optimizing server infrastructure for 99.9% uptime or designing award-winning mobile app interfaces, I bring technical expertise and creative problem-solving to every project.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"><div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">3+</div><div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div></div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"><div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">500+</div><div className="text-sm text-gray-600 dark:text-gray-400">Users Supported</div></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3"><GraduationCap className="text-blue-600 dark:text-blue-400" size={24} /><div><h3 className="font-semibold text-gray-900 dark:text-white">Education</h3><p className="text-gray-600 dark:text-gray-300 text-sm">Honours Bachelor of Science in Computer Science</p><p className="text-gray-500 dark:text-gray-400 text-sm">Lakehead University • GPA 3.0/4.0 • May 2027</p></div></div>
                  <div className="flex items-center space-x-3"><Award className="text-green-600 dark:text-green-400" size={24} /><div><h3 className="font-semibold text-gray-900 dark:text-white">Recent Achievement</h3><p className="text-gray-600 dark:text-gray-300 text-sm">2nd Place - Lakehead CS Club Hackathon</p><p className="text-gray-500 dark:text-gray-400 text-sm">April 2025 • Thunder Bay, ON</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="text-purple-600 dark:text-purple-400" size={24} /><div><h3 className="font-semibold text-gray-900 dark:text-white">Currently Based</h3><p className="text-gray-600 dark:text-gray-300 text-sm">Thunder Bay, Ontario</p><p className="text-gray-500 dark:text-gray-400 text-sm">Available for remote work</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">{exp.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{exp.company}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm"><Calendar size={16} className="mr-2" />{exp.period}</div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-200 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 dark:text-gray-400 text-sm flex items-start"><div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-200 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">Featured Projects</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg group-hover:scale-110 transition-transform">{project.icon}</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.period}</span>
                  </div>
                      <a href={project.url} className="group" target="_blank" rel="noopener noreferrer">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.title}
                          </h3>
                      </a>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-gray-200 mb-3 text-sm">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 dark:text-gray-400 text-sm flex items-start"><div className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Technical Skills</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">Technologies and tools I have mastered through professional experience and personal projects.</p>
            <div className="grid lg:grid-cols-3 gap-8">
              {skillCategories.map((category) => (
                <div key={category.title} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group text-center">
                        <div className="bg-gray-50 dark:bg-gray-700/50 group-hover:bg-white dark:group-hover:bg-gray-700 rounded-lg p-4 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:shadow-md border border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-500">
                          <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{skill.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">Let's Connect</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">I'm currently seeking new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out.</p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full"><Mail size={20} className="text-blue-600 dark:text-blue-400" /></div>
                    <div><h4 className="font-semibold text-gray-900 dark:text-white">Email</h4><a href="mailto:hello@abhijeet.app" className="text-blue-600 dark:text-blue-400 hover:underline">hello@abhijeet.app</a></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-full"><Linkedin size={20} className="text-green-600 dark:text-green-400" /></div>
                    <div><h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4><a href="https://linkedin.com/in/abhijeet3101" className="text-blue-600 dark:text-blue-400 hover:underline">linkedin.com/in/abhijeet3101</a></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full"><Github size={20} className="text-gray-800 dark:text-gray-300" /></div>
                    <div><h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4><a href="https://github.com/forkyouabhi" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/forkyouabhi</a></div>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-4 dark:text-white">Let's build something great together.</h3>
                  <button onClick={() => window.location.href = 'mailto:hello@abhijeet.app'} className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg">Get in Touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Abhijeet Singh. All Rights Reserved.</p>
             <div className="flex justify-center space-x-4">
                <a href="https://linkedin.com/in/abhijeet3101" className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
                <a href="https://github.com/forkyouabhi" className="p-2 text-gray-500 dark:text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                <a href="mailto:hello@abhijeet.app" className="p-2 text-gray-500 dark:text-gray-400 hover:text-green-400 transition-colors"><Mail size={20} /></a>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;