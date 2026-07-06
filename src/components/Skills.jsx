import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiCplusplus,
  SiNodedotjs,
  SiDotnet,
} from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React", level: "Advanced" },
    { icon: <SiJavascript />, name: "JavaScript", level: "Advanced" },
    { icon: <FaPhp />, name: "PHP", level: "Advanced" },
    { icon: <FaJava />, name: "Java", level: "Intermediate" },
    { icon: <SiCplusplus />, name: "C++", level: "Intermediate" },
    { icon: <SiMysql />, name: "MySQL", level: "Advanced" },
    { icon: <FaHtml5 />, name: "HTML5", level: "Expert" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "Expert" },
    { icon: <FaBootstrap />, name: "Bootstrap", level: "Advanced" },
    { icon: <SiNodedotjs />, name: "Node.js", level: "Intermediate" },
    { icon: <SiDotnet />, name: "ASP.NET Core", level: "Intermediate" },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <span className="section-tag">MY SKILLS</span>

        <h2>
          Technologies I <span>Work With</span>
        </h2>

        <p>
          These are the technologies I use to build modern,
          responsive and scalable web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <span>{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;