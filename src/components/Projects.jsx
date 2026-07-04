import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "CV Analyzer System",
      period: "2025",
      desc: "AI-assisted system that extracts skills, experience and generates candidate insights from CVs.",
      points: [
        "Automated CV parsing & data extraction",
        "Skill & experience classification engine",
        "Smart candidate summary generation",
        "Improved recruitment decision workflow",
      ],
      tech: ["React", "Node.js", "Express", "MySQL"],
      type: "AI System",
    },
    {
      title: "Inventory Management System",
      period: "2024",
      desc: "Full-stack system for managing stock, products, sales and reporting dashboard.",
      points: [
        "Real-time stock management system",
        "Product CRUD with validation",
        "Admin analytics dashboard",
        "Sales tracking module",
      ],
      tech: ["PHP", "MySQL", "Bootstrap", "JS"],
      type: "Full Stack",
    },
    {
      title: "Gym Management System",
      period: "2024",
      desc: "Web-based system for managing members, payments, and attendance.",
      points: [
        "Member registration system",
        "Attendance tracking module",
        "Payment management system",
        "Admin control panel",
      ],
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      type: "Web App",
    },
    {
      title: "School Management System (Group Project)",
      period: "2025",
      desc: "A full-stack group project consisting of both web and mobile applications for managing school operations efficiently.",
      points: [
        "Developed as a team-based software engineering project",
        "Built web application for admin, teachers, and student management",
        "Developed mobile app for students and parents access",
        "Implemented attendance, timetable, and result management system",
        "Improved collaboration using Git version control",
      ],
      tech: ["React", "PHP", "MySQL", "Flutter / Android (Mobile)", "Git"],
      type: "Web & Mobile App",
    }
  ];

  return (
    <section id="projects" className="section projects-section">

      {/* HEADER */}
      <div className="section-heading">
        <span className="section-tag">PORTFOLIO</span>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          A collection of real-world systems built with modern technologies
          focusing on performance, scalability, and clean UI.
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="projects-timeline">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >

            {/* DOT */}
            <div className="project-dot"></div>

            {/* CARD */}
            <div className="project-card">

              <div className="project-top">

                <div>
                  <h3>{project.title}</h3>
                  <span className="project-type">{project.type}</span>
                </div>

                <span className="project-year">
                  {project.period}
                </span>

              </div>

              <p className="project-desc">
                {project.desc}
              </p>

              <ul className="project-list">
                {project.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Projects;