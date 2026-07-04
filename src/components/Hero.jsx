import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-blur blur1"></div>
      <div className="hero-blur blur2"></div>

      <div className="hero-container">

        {/* LEFT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="hero-badge">
            🟢 Available for Work
          </span>

          <h3>Hello, I'm</h3>

          <h1>
            Muhammad <span>Anas</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "React Developer",
              2000,
              "Frontend Developer",
              2000,
              "UI / UX Enthusiast",
              2000,
            ]}
            wrapper="h2"
            speed={45}
            repeat={Infinity}
            className="typing"
          />

          <p>
            Passionate about building beautiful, modern and scalable web
            applications using React, JavaScript and Node.js. I enjoy
            creating clean user experiences with high performance and
            elegant design.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="/cv.pdf" className="btn-secondary">
              Download CV
            </a>

          </div>

          <div className="hero-social">

            <a href="https://github.com/Shanze2002">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/muhammad-anas-b613573b0">
              <FaLinkedin />
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h2>4+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>2+</h2>
              <span>Years Learning</span>
            </div>

            <div>
              <h2>100%</h2>
              <span>Commitment</span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="profile-card"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
          >
            <img src={profile} alt="Profile" />

            <div className="ring"></div>

            <div className="tech react">
              <FaReact />
            </div>

            <div className="tech node">
              <FaNodeJs />
            </div>

            <div className="tech js">
              <SiJavascript />
            </div>

          </motion.div>

        </motion.div>

      </div>

      <div className="scroll-down">
        Scroll ↓
      </div>

    </section>
  );
}

export default Hero;