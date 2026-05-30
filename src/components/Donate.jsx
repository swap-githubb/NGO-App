import missionMaaImg from '../assets/mission_maa.png'
import './Donate.css'

function Donate() {
  return (
    <section id="donate" className="donate-section">
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
        </div>
      </div>

      <div className="donate-services">
        <div className="container">
          <h3 className="services-title animate-on-scroll">Through this campaign, we are providing:</h3>
          <div className="services-grid">
            <div className="service-card animate-on-scroll delay-1">
              <div className="service-number">01</div>
              <div className="service-icon">🍲</div>
              <h4>Nutritious Food &amp; Clean Water</h4>
              <p>So no mother goes to sleep hungry.</p>
            </div>
            <div className="service-card animate-on-scroll delay-2">
              <div className="service-number">02</div>
              <div className="service-icon">🏠</div>
              <h4>Safe Shelter &amp; Care Homes</h4>
              <p>To give them a dignified place to live.</p>
            </div>
            <div className="service-card animate-on-scroll delay-3">
              <div className="service-number">03</div>
              <div className="service-icon">🩺</div>
              <h4>Emergency Medical Relief &amp; Healthcare</h4>
              <p>For their aging bodies.</p>
            </div>
            <div className="service-card animate-on-scroll delay-4">
              <div className="service-number">04</div>
              <div className="service-icon">❤️</div>
              <h4>Emotional &amp; Legal Support</h4>
              <p>To heal their broken hearts and protect their rights.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="donate-cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h3>This is not just an NGO campaign; it is a duty for all of us.</h3>
            <p className="hindi-callout">Matra maa ke samman aur unke adhikaar ke liye aage aaiye.</p>
            <p>
              Your one single donation can pull a mother out of the dark streets, give her a safe roof, and bring back her lost smile. Please don't wait for tomorrow. A mother is waiting for your help today.
            </p>
            
            {/* <button className="btn-donate-huge">
              <span className="heart-icon">❤️</span> Donate Now
            </button> */}

            <a
            href="https://razorpay.me/@nextriseindiafoundation"
            className="btn-donate-huge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="heart-icon">❤️</span> Donate Now
          </a>
            
            <p className="tax-exemption">
              (All donations are 50% tax-exempt under Section 80G of the Income Tax Act.)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donate
