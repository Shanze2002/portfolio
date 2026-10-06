import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaDatabase,
  FaCode,
  FaRocket,
  FaGraduationCap,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Development",
      description:
        "Building end-to-end applications using React 19, Java, Node.js, PHP, and MySQL with robust state management and responsive designs.",
    },
    {
      icon: <FaCode />,
      title: "Clean Architecture & OOP",
      description:
        "Modular codebases, role-based access control (RBAC), secure authentication, RESTful APIs, and maintainable MVC patterns.",
    },
    {
      icon: <FaDatabase />,
      title: "Data & Relational Modeling",
      description:
        "Designing normalized schemas for clinic management, inventory tracking, financial transactions, and automated audit trails.",
    },
    {
      icon: <FaRocket />,
      title: "Business-Driven Mindset",
      description:
        "Dual perspective combining Software Engineering with AAT Accounting background to build software that serves real business operations.",
    },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <span className="section-tag">About Me</span>
        <h2>
          Bridging Business Logic &amp; <span>Engineering Excellence</span>
        </h2>
        <p>
          Software Engineering undergraduate passionate about crafting robust,
          scalable systems that solve complex daily workflows.
        </p>
      </div>

      <div className="about-bento-grid">
        {/* Main Bio Card */}
        <motion.div
          className="bento-card bento-hero"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bento-badge">
            <FaGraduationCap /> ICBT Campus • BSc (Hons)
          </div>
          <h3>Crafting systems that teams love to use every day</h3>
          <p>
            I am a Software Engineering undergraduate at ICBT Campus, actively building
            practical, production-ready web platforms. My journey brings together a solid
            technical stack with strong analytical thinking honed through an AAT Level 2
            accounting foundation.
          </p>
          <p>
            Whether implementing multi-role dental clinic workflows, automated CV
            analysis engines with AI, or full inventory systems, I focus on clean structure,
            bulletproof database integrity, and smooth, responsive interfaces.
          </p>

          <div className="bento-metrics">
            <div className="bento-metric-item">
              <span className="metric-val">5+</span>
              <span className="metric-text">Full-Stack Projects</span>
            </div>
            <div className="bento-metric-item">
              <span className="metric-val">15+</span>
              <span className="metric-text">Modern Technologies</span>
            </div>
            <div className="bento-metric-item">
              <span className="metric-val">2+</span>
              <span className="metric-text">Years of Hands-on Code</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Facts Card */}
        <motion.div
          className="bento-card bento-specs"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bento-header">
            <div className="bento-icon-box">
              <FaAward />
            </div>
            <div>
              <h4>Professional Profile</h4>
              <span className="bento-sub">Quick Information</span>
            </div>
          </div>

          <ul className="bento-spec-list">
            <li>
              <span className="spec-label">
                <FaMapMarkerAlt /> Location:
              </span>
              <span className="spec-value">Kurunegala / Colombo, LK</span>
            </li>
            <li>
              <span className="spec-label">
                <FaBriefcase /> Status:
              </span>
              <span className="spec-value highlight-green">Available for Internship</span>
            </li>
            <li>
              <span className="spec-label">
                <FaGraduationCap /> Degree:
              </span>
              <span className="spec-value">BSc Software Engineering</span>
            </li>
            <li>
              <span className="spec-label">
                <FaCheckCircle /> Experience:
              </span>
              <span className="spec-value">Operations &amp; Client Support</span>
            </li>
          </ul>

          <div className="bento-tags-row">
            <span className="pill-tag">On-Site &amp; Remote</span>
            <span className="pill-tag">Full-Time / Intern</span>
            <span className="pill-tag">Fast Learner</span>
          </div>
        </motion.div>

        {/* 4 Pillars of Competence */}
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            className="bento-card bento-highlight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
          >
            <div className="bento-icon-wrapper">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
