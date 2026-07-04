import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      institute: "ICBT Campus",
      period: "2026 - Present",
      course: "BSc in Software Engineering",
      status: "Continuing",
      desc: "Currently pursuing a Bachelor’s degree in Software Engineering, focusing on advanced software development, full-stack web technologies, database systems, and software architecture through academic and practical projects.",
    },
    {
      institute: "ICBT Campus",
      period: "2024 - 2026",
      course: "Higher Diploma in Software Engineering",
      status: "Completed",
      desc: "Completed Higher Diploma in Software Engineering with strong foundations in programming, web development, database management, and software engineering principles.",
    },
    {
      institute: "Association of Accounting Technicians (AAT)",
      period: "2018 - 2021",
      course: "AAT Qualification (Level 2)",
      status: "Completed",
      desc: "Gained knowledge in financial accounting, bookkeeping, and business management fundamentals.",
    },
  ];

  return (
    <section id="education" className="section education-section">

      <div className="section-heading">
        <span className="section-tag">ACADEMIC</span>

        <h2>
          Education <span>Journey</span>
        </h2>

        <p>
          My academic path from accounting fundamentals to advanced software engineering studies.
        </p>
      </div>

      <div className="timeline">

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content education-card">

              <div className="edu-header">

                <div>
                  <h3>{edu.institute}</h3>
                  <span className="edu-course">{edu.course}</span>
                </div>

                <div className="edu-meta">

                  <span className={`edu-status ${edu.status.toLowerCase()}`}>
                    {edu.status}
                  </span>

                  <span className="edu-period">
                    {edu.period}
                  </span>

                </div>

              </div>

              <p className="edu-desc">
                {edu.desc}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Education;