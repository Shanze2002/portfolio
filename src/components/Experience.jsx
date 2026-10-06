import { motion } from "framer-motion";
import { FaCalendarAlt, FaCheckCircle, FaBuilding } from "react-icons/fa";

function Experience() {
  const experienceList = [
    {
      position: "Assistant Manager",
      company: "Aramco Agency",
      location: "Sri Lanka",
      duration: "2024 — 2025",
      type: "Operations & Leadership",
      description:
        "Led day-to-day agency operations, streamlined internal communication, and optimized customer service workflows in a high-volume client environment.",
      responsibilities: [
        "Orchestrated cross-departmental operations and supervised daily team deliverables",
        "Diagnosed workflow bottlenecks and implemented structured procedural improvements",
        "Maintained stringent quality standards across customer escalations and executive decisions",
      ],
    },
    {
      position: "Customer Care Executive",
      company: "Aramco Agency",
      location: "Sri Lanka",
      duration: "2021 — 2024",
      type: "Client Operations",
      description:
        "Delivered prompt, empathetic customer problem-solving with a relentless focus on resolution rate, clear communication, and customer satisfaction.",
      responsibilities: [
        "Managed high-volume client inquiries with tailored solutions under tight response deadlines",
        "Collaborated with operational teams to record client feedback and service logs",
        "Developed deep intuition for real user friction points — now applied directly to UI/UX design",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <span className="section-tag">Career History</span>
        <h2>
          Professional <span>Experience</span>
        </h2>
        <p>
          Operational leadership and client-facing experience that shaped how I architect
          reliable, user-first software solutions.
        </p>
      </div>

      <div className="timeline-container">
        {experienceList.map((exp, index) => (
          <motion.div
            key={exp.position}
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
                  <span className="timeline-type-pill">{exp.type}</span>
                  <h3 className="timeline-role">{exp.position}</h3>
                  <div className="timeline-company-row">
                    <span className="company-name">
                      <FaBuilding className="company-icon" /> {exp.company}
                    </span>
                    <span className="company-loc">• {exp.location}</span>
                  </div>
                </div>

                <div className="timeline-duration-badge">
                  <FaCalendarAlt />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <p className="timeline-desc">{exp.description}</p>

              <div className="timeline-responsibilities">
                <span className="resp-headline">Key Contributions:</span>
                <ul>
                  {exp.responsibilities.map((resp) => (
                    <li key={resp}>
                      <FaCheckCircle className="resp-check" />
                      <span>{resp}</span>
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

export default Experience;
