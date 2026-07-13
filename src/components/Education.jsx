import { motion } from "framer-motion";

function Education() {

  const educationList = [
    {
      title: "BSc in Software Engineering",
      institute: "ICBT Campus",
      year: "2026 - Present",
      status: "Currently Studying",
      description:
        "Currently following a BSc in Software Engineering while improving my skills in full-stack development, software design, databases, and building practical software solutions."
    },
    {
      title: "Higher Diploma in Software Engineering",
      institute: "ICBT Campus",
      year: "2024 - 2026",
      status: "Completed",
      description:
        "Completed Higher Diploma in Software Engineering with hands-on experience in programming, web application development, database management, and software engineering concepts."
    },
    {
      title: "AAT Qualification - Level 2",
      institute: "Association of Accounting Technicians (AAT)",
      year: "2018 - 2021",
      status: "Completed",
      description:
        "Studied accounting fundamentals including financial accounting, bookkeeping, and business management, which helped me develop analytical and problem-solving skills."
    }
  ];


  return (
    <section id="education" className="section education-section">

      <div className="section-heading">

        <span className="section-tag">
          EDUCATION
        </span>

        <h2>
          My Learning <span>Journey</span>
        </h2>

        <p>
          My educational journey from accounting studies to software engineering.
        </p>

      </div>


      <div className="timeline">

        {educationList.map((item, index) => (

          <motion.div
            key={index}
            className="timeline-item"
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
          >

            <div className="timeline-dot"></div>


            <div className="timeline-content education-card">

              <div className="edu-header">

                <div>

                  <h3>
                    {item.institute}
                  </h3>

                  <span className="edu-course">
                    {item.title}
                  </span>

                </div>


                <div className="edu-meta">

                  <span className="edu-status">
                    {item.status}
                  </span>


                  <span className="edu-period">
                    {item.year}
                  </span>

                </div>

              </div>


              <p className="edu-desc">
                {item.description}
              </p>


            </div>

          </motion.div>

        ))}

      </div>


    </section>
  );
}


export default Education;