import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-modern">
      <div className="footer-top-glow"></div>
      <div className="footer-container">
        <div className="footer-main-row">
          <div className="footer-brand-side">
            <h3 className="footer-brand-title">
              Muhammad <span className="gradient-text">Anas</span>
            </h3>
            <p className="footer-tagline">
              Software Engineering Undergraduate @ ICBT Campus &amp; Full-Stack Developer.
              Crafting reliable, scalable web applications with clean architecture.
            </p>
            <div className="footer-social-icons">
              <a
                href="https://github.com/Shanze2002"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="f-social-btn"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-anas-b613573b0"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="f-social-btn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/94768810116"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="f-social-btn"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:shanzeboy@gmail.com"
                aria-label="Email"
                className="f-social-btn"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-nav-side">
            <div className="footer-nav-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4>Career</h4>
              <ul>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4>Quick Action</h4>
              <ul>
                <li>
                  <a href="/cv.pdf" download="Muhammad_Anas_CV.pdf">
                    Download Resume (PDF)
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/94768810116" target="_blank" rel="noreferrer">
                    Direct WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:shanzeboy@gmail.com">
                    shanzeboy@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {currentYear} Muhammad Anas. Designed &amp; Engineered with React 19. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
