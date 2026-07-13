import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {

  const contactDetails = [
    {
      icon: <FaPhone />,
      text: "076 881 0116"
    },
    {
      icon: <FaEnvelope />,
      text: "shanzeboy@gmail.com",
      link: "mailto:shanzeboy@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "Kurunegala, Sri Lanka"
    }
  ];


  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/muhammad-anas-b613573b0"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/Shanze2002"
    }
  ];


  return (
    <section id="contact" className="section contact-section">


      <div className="section-heading">

        <span className="section-tag">
          CONTACT
        </span>


        <h2>
          Let's Work <span>Together</span>
        </h2>


        <p>
          Feel free to contact me regarding software engineering internships,
          projects, or collaboration opportunities.
        </p>

      </div>



      <div className="contact-container">


        <motion.div
          className="contact-card"
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


          {contactDetails.map((item, index) => (

            <div 
              className="contact-item"
              key={index}
            >

              <span className="icon">
                {item.icon}
              </span>


              {item.link ? (

                <a href={item.link}>
                  {item.text}
                </a>

              ) : (

                <span>
                  {item.text}
                </span>

              )}

            </div>

          ))}



          <a
            href="https://wa.me/94768810116"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >

            <FaWhatsapp />
            WhatsApp Me

          </a>


        </motion.div>





        <motion.div
          className="contact-card"
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



          {socialLinks.map((social, index) => (

            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >

              {social.icon}

              <span>
                {social.name}
              </span>

            </a>

          ))}



          <div className="contact-note">

            Available for Software Engineering Internship Opportunities

          </div>


        </motion.div>


      </div>


    </section>
  );
}


export default Contact;