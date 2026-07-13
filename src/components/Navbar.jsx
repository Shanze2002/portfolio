import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Services",
    "Contact"
  ];


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className="navbar">


      <div className="logo">
        Muhammad <span>Anas</span>
      </div>



      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        {navItems.map((item) => (

          <li key={item}>

            <a
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>

          </li>

        ))}

      </ul>




      <a
        href="#contact"
        className="hire-btn"
      >
        Contact Me
      </a>




      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </button>


    </nav>
  );
}


export default Navbar;