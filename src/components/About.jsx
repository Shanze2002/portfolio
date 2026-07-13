import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaDatabase,
  FaCode,
  FaRocket,
} from "react-icons/fa";

function About() {

  const skills = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      text: "Building responsive web applications using modern frontend and backend technologies."
    },
    {
      icon: <FaCode />,
      title: "Software Engineering",
      text: "Applying programming concepts, clean coding practices, and software development principles."
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      text: "Working with MySQL databases, designing structures, and managing application data."
    },
    {
      icon: <FaRocket />,
      title: "Continuous Learning",
      text: "Improving my technical skills by working on academic and personal software projects."
    }
  ];


  return (
    <section className="section about-section" id="about">


      <motion.div
        className="about-left"
        initial={{
          opacity: 0,
          x: -50
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6
        }}
      >

        <span className="section-tag">
          ABOUT ME
        </span>


        <h2>
          Software Engineering
          <span> Student & Developer</span>
        </h2>


        <p>
          I am a Software Engineering undergraduate at ICBT Campus with a
          passion for developing web applications and solving real-world
          problems through technology.
        </p>


        <p>
          I have experience working with React, JavaScript, PHP, Java, MySQL,
          and modern development tools. Through academic and personal projects,
          I have developed skills in frontend development, backend development,
          database design, and application development.
        </p>


        <div className="about-stats">

          <div>
            <h3>10+</h3>
            <span>Projects Built</span>
          </div>


          <div>
            <h3>5+</h3>
            <span>Technologies</span>
          </div>


          <div>
            <h3>100%</h3>
            <span>Learning Mindset</span>
          </div>

        </div>


      </motion.div>



      <motion.div
        className="about-right"
        initial={{
          opacity: 0,
          x: 50
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6
        }}
      >


        {skills.map((skill, index) => (

          <div 
            className="about-card"
            key={index}
          >

            <div className="about-icon">
              {skill.icon}
            </div>


            <h3>
              {skill.title}
            </h3>


            <p>
              {skill.text}
            </p>


          </div>

        ))}


      </motion.div>


    </section>
  );
}


export default About;