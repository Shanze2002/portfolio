import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import profile from "../assets/profile.jpeg";


function Hero() {

  return (
    <section className="hero" id="home">


      <div className="hero-blur blur1"></div>
      <div className="hero-blur blur2"></div>



      <div className="hero-container">


        <motion.div
          className="hero-left"
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
        >


          <span className="hero-badge">
            Software Engineering Undergraduate
          </span>



          <h3>
            Hello, I'm
          </h3>



          <h1>
            Muhammad <span>Anas</span>
          </h1>



          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Software Engineer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="h2"
            speed={45}
            repeat={Infinity}
            className="typing"
          />



          <p>
            I build web applications using modern technologies such as React,
            JavaScript, Node.js, PHP, and MySQL. I enjoy creating clean,
            responsive interfaces and developing practical solutions through
            software.
          </p>



          <div className="hero-buttons">


            <a 
              href="#projects" 
              className="btn-primary"
            >
              Explore Projects
            </a>


            <a 
              href="/cv.pdf" 
              className="btn-secondary"
            >
              View CV
            </a>


          </div>




          <div className="hero-social">


            <a 
              href="https://github.com/Shanze2002"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>



            <a
              href="https://www.linkedin.com/in/muhammad-anas-b613573b0"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>


          </div>




          <div className="hero-stats">


            <div>
              <h2>
                4+
              </h2>
              <span>
                Projects
              </span>
            </div>



            <div>
              <h2>
                5+
              </h2>
              <span>
                Technologies
              </span>
            </div>



            <div>
              <h2>
                2+
              </h2>
              <span>
                Years Experience
              </span>
            </div>


          </div>



        </motion.div>






        <motion.div
          className="hero-right"
          initial={{
            opacity: 0,
            x: 50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
        >



          <motion.div
            className="profile-card"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          >


            <img 
              src={profile}
              alt="Muhammad Anas"
            />



            <div className="ring"></div>



            <div className="tech react">
              <FaReact />
            </div>



            <div className="tech node">
              <FaNodeJs />
            </div>



            <div className="tech js">
              <SiJavascript />
            </div>



          </motion.div>


        </motion.div>


      </div>




      <div className="scroll-down">
        Scroll Down
      </div>



    </section>
  );
}


export default Hero;