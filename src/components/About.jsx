import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaLightbulb,
  FaAward,
} from "react-icons/fa";

function About() {
  return (
    <section className="section about-section" id="about">

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">ABOUT ME</span>

        <h2>
          Turning <span>Ideas</span> into
          <br />
          Digital Experiences
        </h2>

        <p>
          I am a passionate Software Engineering graduate who enjoys creating
          modern, responsive, and user-friendly web applications. I love solving
          real-world problems through clean code and innovative thinking.
        </p>

        <p>
          My experience includes React, JavaScript, PHP, Java, MySQL and UI/UX
          design. I focus on writing scalable, maintainable applications while
          continuously learning new technologies.
        </p>

        <div className="about-stats">

          <div>
            <h3>15+</h3>
            <span>Projects</span>
          </div>

          <div>
            <h3>3+</h3>
            <span>Years Learning</span>
          </div>

          <div>
            <h3>100%</h3>
            <span>Dedication</span>
          </div>

        </div>

      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>Web Development</h3>
          <p>Building modern, responsive and scalable web applications.</p>
        </div>

        <div className="about-card">
          <FaUserGraduate className="about-icon" />
          <h3>Education</h3>
          <p>Software Engineering graduate with strong practical knowledge.</p>
        </div>

        <div className="about-card">
          <FaLightbulb className="about-icon" />
          <h3>Creative Thinking</h3>
          <p>Creating elegant solutions with modern UI/UX principles.</p>
        </div>

        <div className="about-card">
          <FaAward className="about-icon" />
          <h3>Quality</h3>
          <p>Focused on clean code, performance and user experience.</p>
        </div>

      </motion.div>

    </section>
  );
}

export default About;