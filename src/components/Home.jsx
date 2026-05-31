import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import missionMaaImg from '../assets/mission_maa.png'
import './Home.css'
import './Donate.css'

function Home() {
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
            <Link to="/donate" className="btn-primary">
              ❤️ Donate Now
            </Link>
            <Link to="/about" className="btn-outline-light">
              Learn More →
            </Link>
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

      {/* ── Mission Maa ─────────────────────────────────────── */}
      <div id="mission-maa" className="mission-maa-section donate-section">
        <div className="donate-hero">
          <div className="container">
            <div className="donate-header animate-on-scroll">
              <span className="section-label">Our Urgent Campaign</span>
              <h2 className="donate-title">
                Join <span>Mission Maa</span>
              </h2>
              <p className="donate-subtitle">
                Restoring Dignity to Abandoned and Abused Mothers
              </p>
            </div>
          </div>
        </div>

        <div className="donate-story">
          <div className="container">
            <div className="story-grid">
              <div className="story-content animate-on-scroll delay-1">
                <blockquote className="emotional-quote">
                  "A society can never be happy or truly prosper if its mothers are left to cry in dark corners."
                </blockquote>
                <p>
                  At Nextrise India Foundation, we firmly believe that <strong>Matra Shakti</strong> (Mother Power) is the foundation of humanity. But today, a painful reality stares us in the face. Countless mothers across our nation are living a life of absolute <em>lachari</em> (helplessness).
                </p>
                <p>
                  These are mothers who spent their entire lives sacrificing everything to raise their children, only to be brutally thrown out of their own homes in their old age. These are single mothers shattered by extreme poverty, and women surviving the horrific trauma of domestic violence and abuse. Today, they are wandering on the streets—starving, broken, and completely abandoned.
                </p>
                <p className="emotional-highlight">
                  How can we stay silent when the creators of our lives are forced to sleep on an empty stomach?
                </p>
                <p>
                  To fight this injustice, we have launched <strong>'Mission Maa'</strong>. Our mission is to reach out directly to these forgotten mothers and wrap them in a blanket of security, respect, and love.
                </p>
              </div>
              <div className="story-image animate-on-scroll delay-2">
                <img src={missionMaaImg} alt="Elderly mother cared for by volunteers" />
                <div className="image-caption">
                  They protected us when we were helpless. Now, it is our turn to protect them.
                </div>
              </div>
            </div>

            <div className="mission-maa-cta animate-on-scroll delay-3">
              <div className="mission-maa-cta-text">
                {/* <p className="hindi-callout">Matra maa ke samman aur unke adhikaar ke liye aage aaiye.</p> */}
                <p className="mission-maa-cta-desc">
                  Your donation can give a forgotten mother food, shelter, and dignity. A mother is waiting for your help today.
                </p>
                <p className="tax-exemption">All donations are 50% tax-exempt under Section 80G.</p>
              </div>
              <a
                href="https://razorpay.me/@nextriseindiafoundation"
                className="btn-donate-mission"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="heart-icon">❤️</span> Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
