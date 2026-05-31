import './Activities.css'
import activityNutritionImg from '../assets/activity_nutrition.jpeg'
import activityHealthImg from '../assets/activity_health.jpeg'
import activityVocationalImg from '../assets/activity_vocational.png'
import activityEducationImg from '../assets/activity_education.jpeg'

function Activities() {
  return (
    <section id="activities" className="activities-section">
      <div className="container">
        <div className="activities-header animate-on-scroll">
          <span className="section-label">Our Activities</span>
          <h2 className="section-title">
            Ground Actions for <span>Social Change</span>
          </h2>
          <div className="gradient-divider" style={{ margin: '16px auto 24px' }}></div>
          <p className="section-subtitle">
            At Nextrise India Foundation, we design and execute structured grass-root programs to address critical socio-economic challenges in our society. Our key operations include:
          </p>
        </div>

        <div className="activities-grid">
          {/* Nutrition */}
          <div className="activity-card animate-on-scroll delay-1">
            <div className="activity-image-wrapper">
              <img src={activityNutritionImg} alt="Community Nutrition & Emergency Food Drives" />
            </div>
            <div className="activity-content">
              <h3>Community Nutrition &amp; Emergency Food Drives</h3>
              <p>
                We organize regular food distribution campaigns in slums, rural pockets, and near public hospitals, providing freshly cooked, hygienic, and nutritious meals to daily wage laborers, distressed families, and those facing extreme hunger.
              </p>
            </div>
          </div>

          {/* Healthcare */}
          <div className="activity-card animate-on-scroll delay-2">
            <div className="activity-image-wrapper">
              <img src={activityHealthImg} alt="Mobile Healthcare Camps" />
            </div>
            <div className="activity-content">
              <h3>Mobile Healthcare Camps &amp; Medical Aid</h3>
              <p>
                To make healthcare accessible to the underprivileged, our medical teams set up free health camps offering expert doctor consultations, diagnostic check-ups, and free life-saving medicines to families who cannot afford private healthcare.
              </p>
            </div>
          </div>

          {/* Vocational */}
          <div className="activity-card animate-on-scroll delay-3">
            <div className="activity-image-wrapper">
              <img src={activityVocationalImg} alt="Livelihood & Vocational Training Centers" />
            </div>
            <div className="activity-content">
              <h3>Livelihood &amp; Vocational Training Centers</h3>
              <p>
                We actively run skill development programs (including tailoring, computing, and local handicrafts) to empower unemployed youth and women from marginalized backgrounds, transforming them from aid-dependents into financially independent earners.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="activity-card animate-on-scroll delay-4">
            <div className="activity-image-wrapper">
              <img src={activityEducationImg} alt="Slum Education & Child Welfare Programs" />
            </div>
            <div className="activity-content">
              <h3>Slum Education &amp; Child Welfare Programs</h3>
              <p>
                We bridge the educational gap by organizing remedial learning classes, distributing free educational kits (books, uniforms, stationery), and conducting awareness programs on child health, nutrition, and hygiene in neglected communities.
              </p>
            </div>
          </div>

          {/* Disaster Relief */}
          <div className="activity-card disaster-relief animate-on-scroll delay-1">
            <div className="activity-content-full">
              <div className="disaster-icon">🚨</div>
              <h3>Disaster Relief &amp; Rehabilitation</h3>
              <p>
                During natural calamities or unexpected emergencies, our volunteer network acts swiftly to distribute immediate relief materials, including dry ration kits, clean drinking water, clothes, blankets, and temporary shelter setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities
