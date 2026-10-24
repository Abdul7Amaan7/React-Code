
import "./style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>DevStudio</h2>
          <p>
            Building modern digital experiences
            with clean code and creative design.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://github.com">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DevStudio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
