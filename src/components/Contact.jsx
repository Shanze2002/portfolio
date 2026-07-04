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
  return (
    <section id="contact" className="section contact-section">

      <div className="section-heading">
        <span className="section-tag">CONTACT</span>

        <h2>
          Get In <span>Touch</span>
        </h2>

        <p>
          Let’s connect for opportunities, collaborations or project discussions.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="contact-item">
            <FaPhone className="icon" />
            <span>076 881 0116</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>
              <a href="mailto:shanzeboy@gmail.com">
                shanzeboy@gmail.com
              </a>
            </span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Kurunegala, Sri Lanka</span>
          </div>

          <a
            href="https://wa.me/94768810116"
            target="_blank"
            className="whatsapp-btn"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>

        </motion.div>

        {/* RIGHT SOCIAL LINKS */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <a
            href="https://www.linkedin.com/in/muhammad-anas-b613573b0"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedin />
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/Shanze2002"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub />
            GitHub Profile
          </a>

          <div className="contact-note">
            🚀 Open for freelance & internship opportunities
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;