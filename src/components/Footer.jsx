function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">


        <h3 className="footer-name">
          Muhammad Anas
        </h3>


        <p className="footer-text">
          © {currentYear} Muhammad Anas. All rights reserved.
        </p>


        <div className="footer-line"></div>


        <p className="footer-small">
          Software Engineering Undergraduate | Full Stack Developer
        </p>


      </div>

    </footer>
  );
}


export default Footer;