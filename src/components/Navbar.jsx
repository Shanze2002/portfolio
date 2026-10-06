import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDownload, FaPaperPlane } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-inner">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-indicator"></span>
          Muhammad <span className="gradient-text">Anas</span>
        </a>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-actions">
            <a
              href="/cv.pdf"
              download="Muhammad_Anas_CV.pdf"
              className="btn-cv"
              onClick={() => setMenuOpen(false)}
            >
              <FaDownload /> Download CV
            </a>
            <a
              href="#contact"
              className="hire-btn"
              onClick={() => setMenuOpen(false)}
            >
              <FaPaperPlane /> Hire Me
            </a>
          </div>
        </nav>

        <div className="nav-actions">
          <a
            href="/cv.pdf"
            download="Muhammad_Anas_CV.pdf"
            className="btn-cv desktop-only"
            title="Download Muhammad Anas's CV"
          >
            <FaDownload /> CV
          </a>
          <a href="#contact" className="hire-btn desktop-only">
            <span>Hire Me</span>
          </a>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
