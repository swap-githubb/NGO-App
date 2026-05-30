import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Activities from './components/Activities'
import Gallery from './components/Gallery'
import Donate from './components/Donate'
import Footer from './components/Footer'

function App() {
  /* ── Scroll-triggered animations via Intersection Observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe all elements with .animate-on-scroll
    const targets = document.querySelectorAll('.animate-on-scroll')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Activities />
        <Gallery />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}

export default App
