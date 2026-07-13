import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";


function Services() {

  const skills = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      category: "Frontend & Backend",
      description:
        "Developing responsive web applications with clean structure and practical features using modern web technologies."
    },

    {
      icon: <FaReact />,
      title: "Frontend Development",
      category: "React Development",
      description:
        "Creating interactive user interfaces using React, JavaScript, and modern component-based development."
    },

    {
      icon: <FaServer />,
      title: "Backend Development",
      category: "API Development",
      description:
        "Building backend logic, APIs, and application functionality using Node.js, PHP, and server-side technologies."
    },

    {
      icon: <FaDatabase />,
      title: "Database Management",
      category: "MySQL",
      description:
        "Designing database structures, managing relationships, and connecting databases with applications."
    },

    {
      icon: <FaCogs />,
      title: "Software Development",
      category: "Programming Concepts",
      description:
        "Applying object-oriented programming, problem-solving skills, and software engineering principles when building systems."
    }
  ];



  return (
    <section 
      id="services" 
      className="section services-section"
    >



      <div className="section-heading">


        <span className="section-tag">
          SKILLS
        </span>



        <h2>
          My Technical <span>Expertise</span>
        </h2>



        <p>
          Technologies and development areas I work with while building
          software applications and solving technical problems.
        </p>


      </div>





      <div className="services-grid">


        {skills.map((skill, index) => (


          <motion.div

            key={index}

            className="service-card"

            initial={{
              opacity: 0,
              y: 30
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

            whileHover={{
              y: -8
            }}

          >



            <div className="service-icon">

              {skill.icon}

            </div>




            <span className="service-type">

              {skill.category}

            </span>




            <h3>

              {skill.title}

            </h3>




            <p>

              {skill.description}

            </p>



          </motion.div>


        ))}



      </div>



    </section>
  );
}


export default Services;