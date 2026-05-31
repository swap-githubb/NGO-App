import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import './Navbar.css'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/activities', label: 'Our Activities' },
  { to: '/gallery', label: 'Gallery' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navLinkClass = ({ isActive }) => (isActive ? 'active' : '')

  return (
    <nav className={`navbar${isScrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Nextrise India Foundation" />
          <div className="navbar-logo-text">
            <span className="brand-name">Nextrise India</span>
            <span className="brand-sub">Foundation</span>
          </div>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={navLinkClass} onClick={closeMenu}>
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/donate"
              className={({ isActive }) => `donate-btn${isActive ? ' active' : ''}`}
              onClick={closeMenu}
            >
              ❤️ Donate
            </NavLink>
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
