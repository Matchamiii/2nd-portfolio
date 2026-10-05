import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import profilePic from './assets/pic1.png';

function App() {
 
  const scrollRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

 
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);


    const aboutObserver = new IntersectionObserver(
      ([entry]) => { setIsAboutVisible(entry.isIntersecting); },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    
    const skillsObserver = new IntersectionObserver(
      ([entry]) => { setIsSkillsVisible(entry.isIntersecting); },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (skillsRef.current) skillsObserver.observe(skillsRef.current);

    return () => {
      clearTimeout(timer);
      aboutObserver.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  
  const handleScroll = (direction) => {
    const slider = scrollRef.current;
    const scrollAmount = slider.offsetWidth;

    if (direction === 'next') {
      const isAtEnd = slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10;
      slider.scrollTo({
        left: isAtEnd ? 0 : slider.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    } else {
      const isAtStart = slider.scrollLeft <= 0;
      slider.scrollTo({
        left: isAtStart ? slider.scrollWidth : slider.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // --- PRELOADER RENDER ---
  if (loading) {
    return (
      <div className="preloader">
        <div className="loader-content">
          <h1 className="loader-logo">RJ.</h1>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }


  return (
    <div className="portfolio-wrapper">
      
      {/* --- HEADER --- */}
      <nav className="portfolio-header">
        <div className="logo">Gregori.</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-image-container">
          <div className="floating-badge badge-left">
            <span className="badge-number">3rd</span>
            <span className="badge-text">Year BSIT<br />Student</span>
          </div>
          <div className="floating-badge badge-right">
            <span className="badge-number">10+</span>
            <span className="badge-text">Designs Project<br />Built</span>
          </div>
          <div className="floating-badge badge-bottom">
            <span className="badge-number">Frontend</span>
            <span className="badge-text">Focused<br />& Creative</span>
          </div>
          <div className="circle-mask">
            <img src={profilePic} alt="RJ Gregori" />
          </div>
        </div>

        <div className="hero-text">
          <h1 className="name-display">RJ <br /> <span className="outline">GREGORI</span></h1>
          <div className="typing-container">
            <p className="sub-title typing-text">CREATIVE FRONTEND DEVELOPER</p>
          </div>
          <p className="description mission-statement">
            Specializing in <strong>Modern Web Aesthetics</strong>. I bridge the gap between complex design and seamless user interaction.
          </p>
          <div className="hero-ctas">
            <button
              className="cv-button"
              onClick={() => window.open('https://cv-downloads.vercel.app/', '_blank')}
            >
              Download CV
            </button>
            <button
              className="view-project-btn"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
          </div>
          <div className="hero-social-links">
            <a href="https://github.com/Matchamiii" target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://www.facebook.com/rj.gregori.9/" target="_blank" rel="noreferrer" title="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/matchamiii_21/" target="_blank" rel="noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/rj-gregori-504151356/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </section>

      {/* --- TECH CAROUSEL --- */}
      <section className="tech-carousel-container">
        <div className="carousel-track">
          <div className="carousel-group">
            <i className="fab fa-figma" title="Figma"></i>
            <i className="fab fa-js-square" title="JavaScript"></i>
            <i className="fab fa-react" title="React"></i>
            <i className="fab fa-css3-alt" title="CSS3"></i>
            <i className="fas fa-bolt" title="Vite"></i>
            <i className="fab fa-html5" title="HTML5"></i>
            <i className="fas fa-code" title="VS Code"></i>
          </div>
          <div className="carousel-group">
            <i className="fab fa-figma" title="Figma"></i>
            <i className="fab fa-js-square" title="JavaScript"></i>
            <i className="fab fa-react" title="React"></i>
            <i className="fab fa-css3-alt" title="CSS3"></i>
            <i className="fas fa-bolt" title="Vite"></i>
            <i className="fab fa-html5" title="HTML5"></i>
            <i className="fas fa-code" title="VS Code"></i>
          </div>
        </div>
      </section>

      {/* --- ABOUT ME SECTION --- */}
      <section id="about" className="about-section" ref={aboutRef}>
        <div className="container">
          <p className="section-label">01 // CURIOUS ABOUT ME</p>
          <div className="about-layout">
            <div className="about-header-group">
              <h2 className="title">ABOUT ME</h2>
            </div>
            <div className="about-content">
              <div className="about-main-text">
                <p>
                  I am a <strong>Creative Frontend Developer</strong> specializing in
                  <span className="accent-text"> Modern Web Aesthetics</span>.
                </p>
              </div>
              <br />
              <div className={`about-sub-details ${isAboutVisible ? 'play-animation' : ''}`}>
                <p className="word-typing">
                  {"I thrive on the frontend, architecting scalable component libraries and ensuring seamless responsiveness. I focus on turning complex designs into pixel-perfect interfaces using React.".split(" ").map((word, i) => (
                    <span key={i} style={{ "--i": i }}>{word}&nbsp;</span>
                  ))}
                </p>
                <p className="deployment-note word-typing">
                  {"I manage the design-to-code lifecycle—from initial wireframes in Figma to deployment on Vercel—ensuring every project is accessible and high-performance.".split(" ").map((word, i) => (
                    <span key={i} style={{ "--i": i + 25 }}>{word}&nbsp;</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS & TECHSTACK --- */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-label-center">
            <p className="section-label">02 // CURIOUS ABOUT ME</p>
          </div>

          <div className="skills-layout-three-col">
            {/* LEFT COLUMN: Skill Bars */}
            <div className="skills-side-bars">
              {[
                { name: "Frontends" },
                { name: "HTML", level: "" },
                { name: "CSS", level: "" },
                { name: "React.js", level: "" },
                { name: "JavaScript", level: "" }
              ].map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER COLUMN: Text & Contact */}
            <div className="skills-center-content">
              <h2 className="title">MY SKILLS & <br /> TECHSTACK</h2>
              <p className="skills-subtitle">
                A detailed overview of my expertise in building modern, responsive, and
                user-friendly web interfaces using the latest front-end technologies and best practices.
              </p>
              <div className="skills-contact-circle">
                <span>rjgregori543@gmail.com</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Skill Bars */}
            <div className="skills-side-bars">
              {[
                { name: "Backends & APIs" },
                { name: "Node.js", level: "" },
                { name: "Express.js", level: "" },
                { name: "MongoDB", level: "" },
                { name: "MySQL", level: "" },
              ].map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="projects-section">
        <div className="container">
          <p className="section-label">03 // MY PROJECTS</p>
          <div className="projects-header">
            <h2 className="title">DESIGNS AND PROJECTS</h2>
            <p className="skills-subtitle">
              Explore my projects and creative designs that highlight my ability to build responsive, visually appealing, and high-performance web interfaces.
            </p>
          </div>

          <div className="projects-slider" ref={scrollRef}>
           
           <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src="/PIC8.jpg"
                  alt="Paws and Whiskers"
                />
                <div className="project-overlay">
                  <a href="https://ungka-portal.vercel.app/" target="_blank" rel="noreferrer" className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Userve</h3>
                <p>Web-Base</p>
              </div>
            </div>
           
               <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src="/PIC9.png"
                  alt="Paws and Whiskers"
                />
                <div className="project-overlay">
                  <a href="https://www.figma.com/proto/0OwNtlA77zluRhCFkdzUoS/Website?node-id=2459-377&t=1Zat2IoiBXzYWVss-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2459%3A124" target="_blank" rel="noreferrer" className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Userve</h3>
                <p>Web-Base(Prototype)</p>
              </div>
            </div>


            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src="https://api.microlink.io/?url=https://matchamiii.github.io/Paws-and-Whiskers/MainHome.html&screenshot=true&embed=screenshot.url"
                  alt="Paws and Whiskers"
                />
                <div className="project-overlay">
                  <a href="https://matchamiii.github.io/Paws-and-Whiskers/MainHome.html" target="_blank" rel="noreferrer" className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Paws & Whiskers</h3>
                <p>Pet Care / Ecommerce</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src="https://api.microlink.io/?url=https://matchamiii.wordpress.com/&screenshot=true&embed=screenshot.url"
                  alt="Budget Finds"
                />
                <div className="project-overlay">
                  <a href="https://matchamiii.wordpress.com/" target="_blank" rel="noreferrer" className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Budget-Friendly Finds</h3>
                <p>Website / Ecommerce</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src="https://api.microlink.io/?url=https://awesometodosapp-jkck.onrender.com/&screenshot=true&embed=screenshot.url"
                  alt="Awesome Todos"
                />
                <div className="project-overlay">
                  <a href="https://awesometodosapp-jkck.onrender.com/" target="_blank" rel="noreferrer" className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Awesome Todos</h3>
                <p>Task Management / App</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src="https://api.microlink.io/?url=https://www.figma.com/proto/0OwNtlA77zluRhCFkdzUoS/Website?node-id=2203-2227&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&screenshot=true&embed=screenshot.url"
                  alt="Community Support"
                />
                <div className="project-overlay">
                  <a href="https://www.figma.com/proto/0OwNtlA77zluRhCFkdzUoS/Website?node-id=2203-2227&t=eC7JPgoztYLUabS1-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noreferrer" className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Community Support</h3>
                <p>Information / Web</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src="https://api.microlink.io/?url=https://www.figma.com/proto/jGe1mEUIMZ6UpC4VVMPq2u/GREGORI_UIChallenge2?node-id=1-2&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&screenshot=true&embed=screenshot.url"
                  alt="Jennie Song"
                />
                <div className="project-overlay">
                  <a href="https://www.figma.com/proto/jGe1mEUIMZ6UpC4VVMPq2u/GREGORI_UIChallenge2?node-id=1-2&t=CiRgLcN3WAn0ZC8G-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" rel="noreferrer" className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Like Jennie</h3>
                <p>Music / UI Design</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src="https://api.microlink.io/?url=https://www.figma.com/proto/TiOqb0gutCYrkNF6or13Ay/GREGORI_UIChallenge1?node-id=10-4&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&screenshot=true&embed=screenshot.url"
                  alt="Jennie Beats"
                />
                <div className="project-overlay">
                  <a href="https://www.figma.com/proto/TiOqb0gutCYrkNF6or13Ay/GREGORI_UIChallenge1?node-id=10-4&p=f&t=ZQmimvj60uCQzwKf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noreferrer" className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>Jennie Beats</h3>
                <p>Music / Electronics</p>
              </div>
            </div>
          </div>

          <div className="slider-nav">
            <div className="nav-arrow prev" onClick={() => handleScroll('prev')}>←</div>
            <div className="nav-arrow next" onClick={() => handleScroll('next')}>→</div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="services-section">
        <div className="container">
          <p className="section-label">04 // WHAT I OFFER</p>
          <div className="services-header">
            <h2 className="title">SERVICES</h2>
          </div>
          
          <div className="services-grid">
            {[
              { 
                num: "01", 
                title: "Web Development", 
                desc: "Building responsive, high-performance websites using React and modern CSS.",
                icon: "fas fa-laptop-code"
              },
              { 
                num: "02", 
                title: "UI/UX Design", 
                desc: "Creating intuitive user interfaces and wireframes in Figma for seamless experiences.",
                icon: "fas fa-paint-brush"
              },
              { 
                num: "03", 
                title: "Responsive Design", 
                desc: "Ensuring your digital products look stunning on every screen size and device.",
                icon: "fas fa-mobile-alt"
              }
            ].map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-number">{service.num}</div>
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-footer-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT ME SECTION --- */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <p className="section-label">05 // GET IN TOUCH</p>
            <h2 className="contact-title">CONTACT ME</h2>
            <p className="contact-subtitle">Let’s connect! Whether it’s for a project, collaboration, or a simple chat.</p>
          </div>

          <form 
            className="contact-form" 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message Sent!");
              e.target.reset();
            }}
          >
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="send-btn">
              <span>Send Message</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>

          <div className="contact-socials">
            <a href="https://github.com/Matchamiii" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rj-gregori-504151356/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/rj.gregori.9/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-card">
            <p className="footer-label">GET IN TOUCH</p>
            <h3>rjgregori543@gmail.com</h3>
          </div>

          <div className="footer-card">
            <p className="footer-label">LOCATIONS</p>
            <h3>Iloilo, Philippines</h3>
          </div>

          <div className="footer-card socials-wrapper">
            <p className="footer-label">FOLLOW ME</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fas fa-globe"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 RJ GREGORI. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;