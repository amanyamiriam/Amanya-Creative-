import { Link } from 'react-router-dom'
import '../styles/Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Brand Identity',
      icon: '🏷️',
      description: 'Build a recognizable identity that communicates who you are.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Color Strategy']
    },
    {
      id: 2,
      title: 'Graphic Design',
      icon: '🎨',
      description: 'Visual content that communicates your message clearly.',
      features: ['Illustrations', 'Infographics', 'Digital Art', 'Visual Content']
    },
    {
      id: 3,
      title: 'Web Design & Development',
      icon: '🖥️',
      description: 'Modern responsive websites built around your goals.',
      features: ['Responsive Design', 'Web Development', 'Modern Architecture', 'Performance']
    },
    {
      id: 4,
      title: 'UI/UX',
      icon: '✨',
      description: 'Simple, intuitive digital experiences.',
      features: ['User Research', 'Wireframes', 'Prototypes', 'Usability Testing']
    },
    {
      id: 5,
      title: 'Print & Packaging',
      icon: '📦',
      description: 'Bring your brand from the screen into the physical world.',
      features: ['Packaging Design', 'Print Materials', 'Label Design', 'Box Design']
    },
    {
      id: 6,
      title: 'Digital Creative',
      icon: '📱',
      description: 'Creative assets designed for today\'s digital platforms.',
      features: ['Social Media Design', 'Digital Assets', 'Motion Graphics', 'Marketing Materials']
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <h1>WHAT I DO</h1>
        <p className="section-intro">
          Brands that look like brands.
        </p>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="description">{service.description}</p>
              <div className="features">
                <h4>Includes:</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="service-btn">
                Get Quote
              </Link>
            </div>
          ))}
        </div>

        <div className="service-process">
          <h2>HOW IT WORKS</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Discover</h3>
              <p>We discuss your idea, goals, audience and requirements.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Define</h3>
              <p>I develop the creative direction and project strategy.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Design</h3>
              <p>Your concept is transformed into a visual solution.</p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Refine</h3>
              <p>We review, adjust and polish the work.</p>
            </div>
            <div className="step">
              <div className="step-number">05</div>
              <h3>Deliver</h3>
              <p>You receive the final, production-ready files.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>HAVE AN IDEA?</h2>
          <h3>Let's make something beautiful.</h3>
          <p>Whether you need a logo, website, campaign, packaging or complete brand identity, let's create something that represents your vision.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Start a Project →
          </Link>
        </div>
      </div>
    </section>
  )
}
