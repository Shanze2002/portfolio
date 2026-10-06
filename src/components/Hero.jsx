import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaJava,
  FaNodeJs,
  FaDownload,
  FaArrowRight,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Subtle ambient background glow */}
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="hero-container">
        {/* Left Column: Introduction & CTAs */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="hero-status-pill">
            <span className="status-ping">
              <span className="ping-dot"></span>
              <span className="ping-ring"></span>
            </span>
            <span className="status-text">
              Open to Software Engineering Internships &amp; Projects
            </span>
          </div>

          <div className="hero-greeting">
            <span className="wave">👋</span> Welcome to my portfolio
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m <br />
            <span className="hero-name-gradient">Muhammad Anas</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="role-prefix">&gt; </span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Java & React Engineer",
                2000,
                "Software Engineering Undergraduate @ ICBT",
                2000,
                "Backend & Database Architect",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="typing-text"
            />
          </div>

          <p className="hero-description">
            I engineer production-grade web systems with clean architecture, resilient
            backend APIs, and intuitive user experiences. My work spans enterprise clinic
            management, automated inventory systems, and AI-powered screening platforms.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <FaArrowRight className="btn-icon" />
            </a>
            <a
              href="/cv.pdf"
              download="Muhammad_Anas_CV.pdf"
              className="btn-secondary"
            >
              <FaDownload className="btn-icon" />
              <span>Download CV</span>
            </a>
            <a
              href="https://wa.me/94768810116"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp className="btn-icon" />
              <span>Let&apos;s Talk</span>
            </a>
          </div>

          {/* Social Icons & Primary Tech Stack (Orderly & Clean) */}
          <div className="hero-social-strip">
            <span className="social-label">Connect:</span>
            <div className="social-icons">
              <a
                href="https://github.com/Shanze2002"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="social-btn"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-anas-b613573b0"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="social-btn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:shanzeboy@gmail.com"
                aria-label="Send Email"
                className="social-btn"
                title="Email Me"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Primary Tech Stack Dock - Orderly in a clean row */}
          <div className="hero-tech-dock">
            <span className="tech-dock-label">Core Stack:</span>
            <div className="tech-dock-pills">
              <span className="tech-pill react">
                <FaReact className="pill-icon" /> React 19
              </span>
              <span className="tech-pill java">
                <FaJava className="pill-icon" /> Java
              </span>
              <span className="tech-pill node">
                <FaNodeJs className="pill-icon" /> Node.js
              </span>
              <span className="tech-pill mysql">
                <SiMysql className="pill-icon" /> MySQL
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Shipped Projects</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Tech Stack Tools</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-number">ICBT</div>
              <div className="stat-label">BSc (Hons) Undergrad</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Code Integrity</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean, Uncluttered, Elegant Portrait Showcase */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div className="hero-portrait-wrapper">
            {/* Soft Ambient Aura */}
            <div className="portrait-ambient-glow"></div>

            {/* Clean Portrait Frame - No clutter, no stickers on the image */}
            <div className="portrait-frame">
              <img
                src={profile}
                alt="Muhammad Anas - Software Engineering Undergraduate"
                className="portrait-photo"
              />
            </div>

            {/* Minimalist, Elegant Status Caption Underneath */}
            <div className="portrait-caption-pill">
              <span className="caption-dot"></span>
              <span className="caption-name">Muhammad Anas</span>
              <span className="caption-sep">•</span>
              <span className="caption-role">Software Engineering @ ICBT</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll to about section">
          <div className="mouse-wheel">
            <div className="wheel-dot"></div>
          </div>
          <span>Scroll Down</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
