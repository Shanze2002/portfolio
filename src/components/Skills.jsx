import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
  FaGitAlt,
  FaServer,
  FaDatabase,
  FaCode,
  FaTools,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiCplusplus,
  SiNodedotjs,
  SiDotnet,
  SiExpress,
  SiVite,
  SiPostman,
} from "react-icons/si";

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const skillGroups = [
    {
      category: "frontend",
      name: "Frontend",
      skills: [
        { icon: <FaReact />, name: "React 19", level: "Production-Ready", color: "#61dafb" },
        { icon: <SiJavascript />, name: "JavaScript (ES6+)", level: "Advanced", color: "#f7df1e" },
        { icon: <FaHtml5 />, name: "HTML5", level: "Proficient", color: "#e34f26" },
        { icon: <FaCss3Alt />, name: "CSS3 / Modern CSS", level: "Proficient", color: "#1572b6" },
        { icon: <FaBootstrap />, name: "Bootstrap 5", level: "Working", color: "#7952b3" },
      ],
    },
    {
      category: "backend",
      name: "Backend & Languages",
      skills: [
        { icon: <FaJava />, name: "Java (OOP & Servlets)", level: "Production-Ready", color: "#f89820" },
        { icon: <SiNodedotjs />, name: "Node.js", level: "Proficient", color: "#339933" },
        { icon: <SiExpress />, name: "Express.js", level: "Proficient", color: "#ffffff" },
        { icon: <FaPhp />, name: "PHP", level: "Practical", color: "#777bb4" },
        { icon: <SiCplusplus />, name: "C++", level: "Academic", color: "#00599c" },
        { icon: <SiDotnet />, name: "ASP.NET Core", level: "Learning", color: "#512bd4" },
      ],
    },
    {
      category: "database",
      name: "Database & Architecture",
      skills: [
        { icon: <SiMysql />, name: "MySQL", level: "Advanced", color: "#4479a1" },
        { icon: <FaDatabase />, name: "Relational Modeling", level: "Practical", color: "#22d3ee" },
        { icon: <FaServer />, name: "RESTful API Design", level: "Production-Ready", color: "#a855f7" },
        { icon: <FaCode />, name: "MVC Architecture", level: "Proficient", color: "#10b981" },
      ],
    },
    {
      category: "tools",
      name: "Tools & Workflow",
      skills: [
        { icon: <FaGitAlt />, name: "Git Version Control", level: "Proficient", color: "#f05032" },
        { icon: <SiVite />, name: "Vite Bundler", level: "Practical", color: "#646cff" },
        { icon: <SiPostman />, name: "Postman API Testing", level: "Proficient", color: "#ff6c37" },
        { icon: <FaTools />, name: "Agile / Scrum", level: "Practical", color: "#38bdf8" },
      ],
    },
  ];

  const filteredGroups =
    activeTab === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeTab);

  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <span className="section-tag">Core Competencies</span>
        <h2>
          Technical <span>Ecosystem</span>
        </h2>
        <p>
          A balanced full-stack toolset forged through enterprise systems, clinic software,
          and university coursework.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="skills-tab-bar">
        <button
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Technologies
        </button>
        <button
          className={`tab-btn ${activeTab === "frontend" ? "active" : ""}`}
          onClick={() => setActiveTab("frontend")}
        >
          Frontend
        </button>
        <button
          className={`tab-btn ${activeTab === "backend" ? "active" : ""}`}
          onClick={() => setActiveTab("backend")}
        >
          Backend &amp; Languages
        </button>
        <button
          className={`tab-btn ${activeTab === "database" ? "active" : ""}`}
          onClick={() => setActiveTab("database")}
        >
          Database &amp; Architecture
        </button>
        <button
          className={`tab-btn ${activeTab === "tools" ? "active" : ""}`}
          onClick={() => setActiveTab("tools")}
        >
          Tools &amp; Workflow
        </button>
      </div>

      {/* Skills Groups */}
      <div className="skills-content-container">
        {filteredGroups.map((group) => (
          <div key={group.name} className="skill-group-block">
            <h3 className="group-category-title">{group.name}</h3>
            <div className="skills-cards-grid">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card-modern"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="skill-icon-bubble"
                    style={{ "--skill-color": skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div className="skill-details">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-badge-level">{skill.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
