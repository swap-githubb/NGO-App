import { useState, useEffect } from 'react'
import logo from '../assets/logo.jpeg'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = ['home', 'about', 'activities', 'gallery', 'donate']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${isScrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <img src={logo} alt="Nextrise India Foundation" />
          <div className="navbar-logo-text">
            <span className="brand-name">Nextrise India</span>
            <span className="brand-sub">Foundation</span>
          </div>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#activities"
              className={activeSection === 'activities' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'activities')}
            >
              Our Activities
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className={activeSection === 'gallery' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'gallery')}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#donate"
              className={`donate-btn${activeSection === 'donate' ? ' active' : ''}`}
              onClick={(e) => handleNavClick(e, 'donate')}
            >
              ❤️ Donate
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="hamburger-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
