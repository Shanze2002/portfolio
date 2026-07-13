import { motion } from "framer-motion";

function Experience() {

  const experienceList = [
    {
      position: "Assistant Manager",
      company: "Aramco Agency",
      duration: "2024 - 2025",
      category: "Management Experience",
      description:
        "Worked as an Assistant Manager, supporting daily business operations, managing team activities, and improving customer service processes.",
      responsibilities: [
        "Managed daily operational activities",
        "Coordinated team tasks and workflow",
        "Handled customer concerns and service improvements",
        "Supported decision-making and business operations"
      ]
    },
    {
      position: "Customer Care Executive",
      company: "Aramco Agency",
      duration: "2021 - 2024",
      category: "Customer Service",
      description:
        "Worked with customers by providing support, solving issues, and maintaining positive communication to deliver better service experiences.",
      responsibilities: [
        "Handled customer inquiries and requests",
        "Resolved customer-related issues efficiently",
        "Improved communication and problem-solving skills",
        "Maintained customer service standards"
      ]
    }
  ];


  return (
    <section 
      id="experience" 
      className="section experience-section"
    >


      <div className="section-heading">

        <span className="section-tag">
          EXPERIENCE
        </span>


        <h2>
          Professional <span>Experience</span>
        </h2>


        <p>
          My work experience helped me develop leadership, communication,
          teamwork, and problem-solving skills.
        </p>

      </div>



      <div className="timeline">


        {experienceList.map((experience, index) => (

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



            <div className="timeline-content experience-card">


              <div className="exp-header">


                <div>

                  <h3>
                    {experience.position}
                  </h3>


                  <span className="exp-company">
                    {experience.company}
                  </span>

                </div>



                <div className="exp-meta">

                  <span className="exp-type">
                    {experience.category}
                  </span>


                  <span className="exp-period">
                    {experience.duration}
                  </span>

                </div>


              </div>



              <p className="exp-desc">
                {experience.description}
              </p>



              <ul className="exp-list">

                {experience.responsibilities.map((item, index) => (

                  <li key={index}>
                    {item}
                  </li>

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