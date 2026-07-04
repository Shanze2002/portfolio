import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "Assistant Manager",
      company: "Retail Operations",
      period: "2024 - 2025",
      type: "Leadership Role",
      desc: "Managed daily operations, coordinated team workflows, and improved customer satisfaction through structured process optimization.",
      points: [
        "Led and coordinated team activities",
        "Improved operational efficiency",
        "Handled customer escalations",
        "Ensured service quality standards",
      ],
    },
    {
      role: "Customer Care Executive",
      company: "Service Support Center",
      period: "2021 - 2024",
      type: "Customer Support",
      desc: "Provided technical support and customer assistance in a fast-paced environment while improving communication and problem-solving skills.",
      points: [
        "Resolved customer technical issues",
        "Handled high-volume support requests",
        "Improved customer communication",
        "Maintained service response quality",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">

      <div className="section-heading">
        <span className="section-tag">CAREER</span>

        <h2>
          Work <span>Experience</span>
        </h2>

        <p>
          My professional journey combining leadership, communication,
          and problem-solving experience in real-world environments.
        </p>
      </div>

      <div className="timeline">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content experience-card">

              <div className="exp-header">

                <div>
                  <h3>{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>

                <div className="exp-meta">

                  <span className="exp-type">
                    {exp.type}
                  </span>

                  <span className="exp-period">
                    {exp.period}
                  </span>

                </div>

              </div>

              <p className="exp-desc">
                {exp.desc}
              </p>

              <ul className="exp-list">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Experience;