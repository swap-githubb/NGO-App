import heroImg from '../assets/hero.png'
import './Home.css'

function Home() {
  const scrollToDonate = (e) => {
    e.preventDefault()
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = (e) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home">
      {/* ── Hero ────────────────────────────────────────────── */}
      <div className="hero">
        <div className="hero-bg">
          <img src={heroImg} alt="Community support" />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content">
          <span className="hero-badge">🌟 Empowering Lives Since 2025</span>
          <h1 className="hero-title">
            Empowering Lives,
            <br />
            <span>Enriching Communities</span>
          </h1>
          <p className="hero-subtitle">
            At Nextrise India Foundation, we implement sustainable, grassroots solutions
            that address the immediate and long-term needs of India's most vulnerable populations.
          </p>
          <div className="hero-buttons">
            <a href="#donate" className="btn-primary" onClick={scrollToDonate}>
              ❤️ Donate Now
            </a>
            <a href="#about" className="btn-outline-light" onClick={scrollToAbout}>
              Learn More →
            </a>
          </div>
        </div>

        {/* ── Floating Stats ──────────────────────────────── */}
        {/* <div className="stats-bar">
          <div className="container stats-grid">
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Lives Impacted</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Medical Camps</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Women Empowered</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">States Reached</span>
            </div>
          </div>
        </div> */}
      </div>

      {/* ── Our Mission ────────────────────────────────────── */}
      <div className="mission-section">
        <div className="container">
          <div className="mission-header animate-on-scroll">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">
              Our <span>Mission</span>
            </h2>
            <div className="gradient-divider"></div>
            <p className="section-subtitle">
              We are committed to building a self-reliant India by addressing the
              most pressing needs of its vulnerable populations through sustainable,
              grassroots interventions.
            </p>
          </div>

          <div className="mission-grid">
            <div className="mission-card animate-on-scroll delay-1">
              <div className="mission-card-accent"></div>
              <div className="mission-card-icon">
                <span>🍚</span>
              </div>
              <h3>Eradicating Hunger &amp; Malnutrition</h3>
              <p>
                Ensuring no child or mother goes to sleep hungry by providing continuous
                access to nutritious food, clean water, and essential resources in
                underserved communities.
              </p>
            </div>

            <div className="mission-card animate-on-scroll delay-2">
              <div className="mission-card-accent"></div>
              <div className="mission-card-icon">
                <span>🏠</span>
              </div>
              <h3>Providing Dignity &amp; Shelter</h3>
              <p>
                Protecting helpless single mothers, abandoned women, and orphaned children
                by establishing secure shelters, care homes, and holistic support systems.
              </p>
            </div>

            <div className="mission-card animate-on-scroll delay-3">
              <div className="mission-card-accent"></div>
              <div className="mission-card-icon">
                <span>🏥</span>
              </div>
              <h3>Accessible Healthcare</h3>
              <p>
                Breaking the barriers of healthcare costs by bringing free medical camps,
                clinics, and emergency health relief directly to those living in extreme poverty.
              </p>
            </div>

            <div className="mission-card animate-on-scroll delay-4">
              <div className="mission-card-accent"></div>
              <div className="mission-card-icon">
                <span>📚</span>
              </div>
              <h3>Fostering Self-Reliance</h3>
              <p>
                Moving beyond temporary relief by providing vocational training, digital
                literacy, and skill development programs that enable individuals to break
                the cycle of poverty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
