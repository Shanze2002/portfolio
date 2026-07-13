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


  const skillList = [

    {
      icon: <FaReact />,
      name: "React",
      level: "Working Knowledge"
    },

    {
      icon: <SiJavascript />,
      name: "JavaScript",
      level: "Working Knowledge"
    },

    {
      icon: <FaPhp />,
      name: "PHP",
      level: "Working Knowledge"
    },

    {
      icon: <FaJava />,
      name: "Java",
      level: "Intermediate"
    },

    {
      icon: <SiCplusplus />,
      name: "C++",
      level: "Intermediate"
    },

    {
      icon: <SiMysql />,
      name: "MySQL",
      level: "Working Knowledge"
    },

    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: "Strong"
    },

    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      level: "Strong"
    },

    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      level: "Working Knowledge"
    },

    {
      icon: <SiNodedotjs />,
      name: "Node.js",
      level: "Learning"
    },

    {
      icon: <SiDotnet />,
      name: "ASP.NET Core",
      level: "Learning"
    }

  ];



  return (

    <section 
      className="section" 
      id="skills"
    >



      <div className="section-heading">


        <span className="section-tag">
          SKILLS
        </span>



        <h2>
          My Technical <span>Skills</span>
        </h2>



        <p>
          Technologies and tools I have used while developing academic
          projects and personal software applications.
        </p>


      </div>





      <div className="skills-grid">


        {skillList.map((skill, index) => (


          <motion.div

            key={index}

            className="skill-card"


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
              delay: index * 0.08
            }}


            whileHover={{
              y: -8
            }}

          >



            <div className="skill-icon">

              {skill.icon}

            </div>




            <h3>

              {skill.name}

            </h3>




            <span>

              {skill.level}

            </span>



          </motion.div>


        ))}



      </div>



    </section>

  );
}


export default Skills;