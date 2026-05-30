import healthcareImg from '../assets/healthcare.png'
import frontimg from '../assets/frontimg.png'
import empowermentImg from '../assets/empowerment.png'
import nutritionImg from '../assets/nutrition.jpeg'
import educationImg from '../assets/education.jpeg'
import './About.css'

function About() {
  return (
    <section id="about" className="about-section">
      {/* ── Who We Are ──────────────────────────────────────── */}
      <div className="about-hero-section">
        <div className="container about-hero-grid">
          <div className="about-text animate-on-scroll">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              Driving <span>Sustainable</span> Social Change
            </h2>
            <div className="gradient-divider"></div>
            <p>
              Established in 2025, <strong>Nextrise India Foundation</strong> is a registered
              Section 8 non-profit organization dedicated to driving sustainable social change
              across India. Guided by our core philosophy,{' '}
              <em>"Empowering Lives, Enriching Communities,"</em> we work relentlessly at
              the grassroots level to uplift the underprivileged, restore human dignity,
              and build a self-reliant nation.
            </p>
            <p>
              As a Section 8 company, we operate with the highest standards of financial
              transparency, corporate governance, and accountability, ensuring that every
              contribution is directly channeled into creating a measurable, lasting impact
              on the ground.
            </p>
          </div>
          <div className="about-image animate-on-scroll delay-2">
            <div className="about-image-wrapper">
              <img src={frontimg} alt="Healthcare camp by Nextrise India Foundation" />
              <div className="about-image-badge">
                <span className="badge-year">Est. 2025</span>
                <span className="badge-text">Section 8 Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Vision & Mission ────────────────────────────────── */}
      <div className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card animate-on-scroll delay-1">
              <div className="vm-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To build an inclusive and resilient society where every individual—regardless
                of their socio-economic background—has access to health, nutrition, education,
                and equal opportunities to thrive with dignity.
              </p>
            </div>
            <div className="vm-card animate-on-scroll delay-2">
              <div className="vm-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower vulnerable communities through structured interventions in
                maternal care, public health, vocational training, and immediate relief,
                turning dependency into self-reliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Core Pillars ────────────────────────────────────── */}
      <div className="pillars-section">
        <div className="container">
          <div className="pillars-header animate-on-scroll">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              Our Core <span>Pillars</span>
            </h2>
            <div className="gradient-divider" style={{ margin: '16px auto 24px' }}></div>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card animate-on-scroll delay-1">
              <div className="pillar-image">
                <img src={empowermentImg} alt="Women empowerment programs" />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon">👩‍👧</div>
                <h3>Women &amp; Single Mothers Empowerment</h3>
                <p>
                  We provide comprehensive support systems, safe shelter, and livelihood
                  opportunities to helpless and single mothers, enabling them to lead
                  independent and secure lives.
                </p>
              </div>
            </div>

            <div className="pillar-card animate-on-scroll delay-2">
              <div className="pillar-image">
                <img src={healthcareImg} alt="Free medical camps" />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon">🏥</div>
                <h3>Healthcare &amp; Medical Relief</h3>
                <p>
                  We believe healthcare is a fundamental right. We set up free medical camps,
                  clinics, and emergency assistance for communities that lack access to basic
                  healthcare.
                </p>
              </div>
            </div>

            <div className="pillar-card animate-on-scroll delay-3">
              <div className="pillar-image">
                <img src={nutritionImg} alt="Poverty Alleviation and Nutrition" />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon">🍲</div>
                <h3>Poverty Alleviation &amp; Nutrition</h3>
                <p>
                  We work to eradicate hunger by distributing nutritious food, clothing,
                  and essential survival kits to distressed families and slum areas.
                </p>
              </div>
            </div>

            <div className="pillar-card animate-on-scroll delay-4">
              <div className="pillar-image">
                <img src={educationImg} alt="Education and Vocational Training" />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon">📖</div>
                <h3>Education &amp; Vocational Training</h3>
                <p>
                  We bridge the skill gap by mentoring youth and providing women with
                  skill-based training to make them employable in today's economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Support Us ──────────────────────────────────── */}
      <div className="support-section">
        <div className="container">
          <div className="support-header animate-on-scroll">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              Why <span>Support</span> Us?
            </h2>
            <div className="gradient-divider" style={{ margin: '16px auto 24px' }}></div>
          </div>

          <div className="support-grid">
            <div className="support-card animate-on-scroll delay-1">
              <div className="support-number">01</div>
              <div className="support-icon">🏛️</div>
              <h3>Section 8 Credibility</h3>
              <p>
                We adhere to strict legal and financial auditing standards, offering
                complete transparency to our donors and corporate partners.
              </p>
            </div>

            <div className="support-card animate-on-scroll delay-2">
              <div className="support-number">02</div>
              <div className="support-icon">📋</div>
              <h3>Tax Benefits (Section 80G)</h3>
              <p>
                All financial contributions made to Nextrise India Foundation are eligible
                for tax exemption under Section 80G of the Income Tax Act.
              </p>
            </div>

            <div className="support-card animate-on-scroll delay-3">
              <div className="support-number">03</div>
              <div className="support-icon">🎯</div>
              <h3>Direct Ground Impact</h3>
              <p>
                Our execution strategy is entirely community-focused, ensuring that aid
                reaches those who need it the most without any administrative delays.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Credibility Banner ──────────────────────────────── */}
      <div className="credibility-banner">
        <div className="container credibility-inner">
          <div className="credibility-item animate-on-scroll delay-1">
            <span className="credibility-icon">✅</span>
            <span>Section 8 Registered</span>
          </div>
          <div className="credibility-item animate-on-scroll delay-2">
            <span className="credibility-icon">📜</span>
            <span>80G Tax Exemption</span>
          </div>
          <div className="credibility-item animate-on-scroll delay-3">
            <span className="credibility-icon">🔍</span>
            <span>100% Transparent</span>
          </div>
          <div className="credibility-item animate-on-scroll delay-4">
            <span className="credibility-icon">🤝</span>
            <span>Community First</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
