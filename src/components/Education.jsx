import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaCheck, FaBookOpen } from "react-icons/fa";

function Education() {
  const educationList = [
    {
      title: "BSc (Hons) in Software Engineering",
      institute: "ICBT Campus",
      year: "2026 — Present",
      status: "Currently Reading",
      statusClass: "status-current",
      description:
        "Deepening expertise in advanced software architecture, cloud platforms, full-stack design patterns, distributed databases, and high-performance algorithms.",
      highlights: [
        "Advanced Object-Oriented Design & Design Patterns",
        "Full-Stack Web Architectures & RESTful API Services",
        "Enterprise System Engineering and Database Integrity",
      ],
    },
    {
      title: "Higher Diploma in Software Engineering",
      institute: "ICBT Campus",
      year: "2024 — 2026",
      status: "Completed",
      statusClass: "status-completed",
      description:
        "Comprehensive diploma coursework covering core programming paradigms, relational database design (MySQL), web application development, and agile team delivery.",
      highlights: [
        "Java, Servlets, PHP, and JavaScript core development",
        "Relational database design, normalisation, and complex SQL",
        "Group project collaboration and version control (Git)",
      ],
    },
    {
      title: "AAT Qualification — Level 2",
      institute: "Association of Accounting Technicians (AAT)",
      year: "2018 — 2021",
      status: "Completed",
      statusClass: "status-completed",
      description:
        "Rigorous financial accounting and business operations certification, providing crucial domain expertise for architecting fintech, billing, and inventory software.",
      highlights: [
        "Financial reporting, ledger accounting, and business ethics",
        "Direct domain knowledge for invoicing and POS system logic",
      ],
    },
  ];

  return (
    <section id="education" className="section education-section">
      <div className="section-heading">
        <span className="section-tag">Academic Background</span>
        <h2>
          Education &amp; <span>Credentials</span>
        </h2>
        <p>
          Structured academic rigor paired with business-level analytical training.
        </p>
      </div>

      <div className="timeline-container">
        {educationList.map((item, index) => (
          <motion.div
            key={item.title}
            className="timeline-card-wrapper"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>

            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <span className={`timeline-status-badge ${item.statusClass}`}>
                    {item.status}
                  </span>
                  <h3 className="timeline-role">{item.title}</h3>
                  <div className="timeline-company-row">
                    <span className="company-name">
                      <FaGraduationCap className="company-icon" /> {item.institute}
                    </span>
                  </div>
                </div>

                <div className="timeline-duration-badge">
                  <FaCalendarAlt />
                  <span>{item.year}</span>
                </div>
              </div>

              <p className="timeline-desc">{item.description}</p>

              <div className="edu-highlights-list">
                <span className="resp-headline">
                  <FaBookOpen /> Key Focus Areas:
                </span>
                <ul>
                  {item.highlights.map((point) => (
                    <li key={point}>
                      <FaCheck className="resp-check" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
