import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaDownload,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto fallback so user can send immediately
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:shanzeboy@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 6000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <span className="section-tag">Get in Touch</span>
        <h2>
          Let&apos;s Build Something <span>Great</span>
        </h2>
        <p>
          I am actively seeking software engineering internships, junior developer roles,
          and freelance project collaborations. Let&apos;s talk!
        </p>
      </div>

      <div className="contact-grid-wrapper">
        {/* Left Side: Contact Information Cards */}
        <motion.div
          className="contact-info-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-intro-card">
            <div className="response-time-pill">
              <FaClock /> Usually responds within a few hours
            </div>
            <h3>Direct Contact Channels</h3>
            <p>
              Feel free to reach out directly via WhatsApp for quick conversations or send an
              email for formal inquiries and project requirements.
            </p>

            <div className="contact-channels-list">
              <a href="tel:+94768810116" className="channel-item">
                <div className="channel-icon-box phone">
                  <FaPhone />
                </div>
                <div>
                  <span className="channel-label">Phone Call</span>
                  <span className="channel-value">+94 76 881 0116</span>
                </div>
              </a>

              <a href="mailto:shanzeboy@gmail.com" className="channel-item">
                <div className="channel-icon-box email">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="channel-label">Email Address</span>
                  <span className="channel-value">shanzeboy@gmail.com</span>
                </div>
              </a>

              <div className="channel-item">
                <div className="channel-icon-box location">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="channel-label">Location</span>
                  <span className="channel-value">Kurunegala, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="contact-buttons-group">
              <a
                href="https://wa.me/94768810116"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-action-btn"
              >
                <FaWhatsapp className="wa-icon" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="/cv.pdf"
                download="Muhammad_Anas_CV.pdf"
                className="resume-download-btn"
              >
                <FaDownload />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="contact-social-footer">
              <span className="social-follow-label">Find me online:</span>
              <div className="social-links-row">
                <a
                  href="https://github.com/Shanze2002"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-anas-b613573b0"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Message Form */}
        <motion.div
          className="contact-form-column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-form-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-sub">
              Have an opening, an interesting project, or just want to say hi?
            </p>

            {submitted ? (
              <div className="form-success-box">
                <FaCheckCircle className="success-icon" />
                <h4>Message Draft Opened!</h4>
                <p>
                  Your email client has been opened with your message. If it did not open,
                  you can reach me directly at <strong>shanzeboy@gmail.com</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="modern-contact-form">
                <div className="form-row-dual">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Internship Opportunity / Web Project"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Describe your project, role details, or any questions..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Send Message</span>
                  <FaPaperPlane className="submit-icon" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
