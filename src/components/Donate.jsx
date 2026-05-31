import './Donate.css'

const SERVICES = [
  {
    delay: 'delay-1',
    number: '01',
    icon: '🍲',
    title: 'Nutritious Food & Clean Water',
    description: 'So no mother goes to sleep hungry.',
  },
  {
    delay: 'delay-2',
    number: '02',
    icon: '🏠',
    title: 'Safe Shelter & Care Homes',
    description: 'To give them a dignified place to live.',
  },
  {
    delay: 'delay-3',
    number: '03',
    icon: '🩺',
    title: 'Emergency Medical Relief & Healthcare',
    description: 'For their aging bodies.',
  },
  {
    delay: 'delay-4',
    number: '04',
    icon: '❤️',
    title: 'Emotional & Legal Support',
    description: 'To heal their broken hearts and protect their rights.',
  },
]

const RAZORPAY_URL = 'https://razorpay.me/@nextriseindiafoundation'

function Donate() {
  return (
    <section id="donate" className="donate-section" aria-label="Donate">
      <div className="donate-services">
        <div className="container">
          <h3 className="services-title animate-on-scroll">
            Through this campaign, we are providing:
          </h3>
          <div className="services-grid">
            {SERVICES.map((service) => (
              <div
                key={service.number}
                className={`service-card animate-on-scroll ${service.delay}`}
              >
                <div className="service-number">{service.number}</div>
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <a
                  href={RAZORPAY_URL}
                  className="btn-donate-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="heart-icon">❤️</span> Donate Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donate
