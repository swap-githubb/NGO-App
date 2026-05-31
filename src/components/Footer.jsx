import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import './Footer.css'

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/activities', label: 'Our Activities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/donate', label: 'Donate' },
]

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
          </div>

          <div className="footer-links-col">
            <h5>Quick Links</h5>
            <ul>
              {FOOTER_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-col">
            <h5>Contact Us</h5>
            <ul className="contact-info">
              <li>
                <span className="contact-icon">📍</span>
                <span>154, 1st Floor, Maharaja Kameshwar Complex, Frazer Road, Patna, Bihar-800001</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span> <li>+91 7717786838</li>
                  <li>+91 7258866055</li>
                </span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>contact@nextriseindia.org</span>
              </li>
            </ul>
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
