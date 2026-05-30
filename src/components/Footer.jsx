import logo from '../assets/logo.jpeg'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src={logo} alt="Nextrise India Foundation" />
              <div>
                <h4>Nextrise India</h4>
                <span>Foundation</span>
              </div>
            </div>
            <p className="footer-tagline">
              Empowering Lives, Enriching Communities. Working relentlessly to build a self-reliant nation.
            </p>
            {/* <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">IN</a>
            </div> */}
          </div>

          <div className="footer-links-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#activities">Our Activities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#donate">Donate</a></li>
            </ul>
          </div>

          {/* <div className="footer-links-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Financial Reports</a></li>
              <li><a href="#">80G Certificate</a></li>
            </ul>
          </div> */}

          <div className="footer-contact-col">
            <h5>Contact Us</h5>
            <ul className="contact-info">
              <li>
                <span className="contact-icon">📍</span>
                <span>154, 1st Floor, Maharaja kameshwar complex, Frazer Road, Patna Bihar</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span><li>+91 7717786838</li><li>+91 7258866055</li></span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>contact@nextriseindia.org</span>
              </li>
            </ul>
            
            {/* <div className="newsletter">
              <h6>Subscribe to updates</h6>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit">→</button>
              </form>
            </div> */}
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nextrise India Foundation. All rights reserved.</p>
          <p className="made-with-love">Made with ❤️ for a better India</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
