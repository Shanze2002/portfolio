import { motion } from "framer-motion";

function Projects() {

  const projectList = [
    {
      name: "CV Analyzer System",
      year: "2025",
      category: "AI Based System",
      description:
        "An AI-based recruitment support system that analyzes CV information and provides useful insights about candidate skills and experience.",
      features: [
        "Extracted important information from CV documents",
        "Analyzed skills and candidate details",
        "Generated candidate summaries",
        "Improved the recruitment review process"
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MySQL"
      ]
    },


    {
      name: "Inventory Management System",
      year: "2024",
      category: "Full Stack Application",
      description:
        "A full-stack inventory system developed to manage products, stock levels, sales records, and business reports.",
      features: [
        "Product and category management",
        "Stock tracking functionality",
        "Sales management module",
        "Dashboard with system information"
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MySQL"
      ]
    },


    {
      name: "Gym Management System",
      year: "2024",
      category: "Web Application",
      description:
        "A web-based gym management solution for handling members, payments, trainers, and daily gym operations.",
      features: [
        "Member registration management",
        "Payment tracking system",
        "Attendance management",
        "Admin management panel"
      ],
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap"
      ]
    },


    {
      name: "School Management System",
      year: "2025",
      category: "Group Project",
      description:
        "A team-based software project that includes web and mobile applications to manage school-related activities.",
      features: [
        "Developed features for students, teachers, and administrators",
        "Implemented attendance and timetable management",
        "Created mobile access for parents and students",
        "Used Git for team collaboration"
      ],
      technologies: [
        "React",
        "PHP",
        "MySQL",
        "Android",
        "Git"
      ]
    }
  ];



  return (
    <section 
      id="projects" 
      className="section projects-section"
    >



      <div className="section-heading">


        <span className="section-tag">
          PROJECTS
        </span>



        <h2>
          My Recent <span>Work</span>
        </h2>



        <p>
          Projects I have developed to improve my software development skills
          and apply practical programming knowledge.
        </p>


      </div>





      <div className="projects-timeline">


        {projectList.map((project, index) => (


          <motion.div

            key={index}

            className="project-item"

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



            <div className="project-dot"></div>





            <div className="project-card">



              <div className="project-top">


                <div>

                  <h3>
                    {project.name}
                  </h3>


                  <span className="project-type">
                    {project.category}
                  </span>


                </div>



                <span className="project-year">
                  {project.year}
                </span>



              </div>





              <p className="project-desc">

                {project.description}

              </p>





              <ul className="project-list">

                {project.features.map((feature, index) => (

                  <li key={index}>
                    {feature}
                  </li>

                ))}

              </ul>





              <div className="project-tech">

                {project.technologies.map((technology, index) => (

                  <span
                    key={index}
                    className="tech-badge"
                  >
                    {technology}
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