import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Muhammad <span>Anas</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>

        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>

        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>

        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>

        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>

        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>

        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

      </ul>

      <a href="#contact" className="hire-btn">
        Hire Me
      </a>

      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;