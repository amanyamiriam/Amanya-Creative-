import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: 'FundiConnect',
      category: 'Website Design & Development',
      image: '🌐'
    },
    {
      id: 2,
      title: 'Autism Foundation',
      category: 'Website Design',
      image: '🎗️'
    },
    {
      id: 3,
      title: 'Wambi Realtors',
      category: 'Branding & Web Design',
      image: '🏠'
    }
  ]

  return (
    <section className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>AMANYA CREATIVE</h1>
          <p className="tagline">Graphic Designer • Web Developer • Brand & Print Designer</p>
          <p className="intro">
            We transform ideas into compelling visual experiences. From stunning graphics to fully-functional websites, 
            we bring your vision to life with creativity and precision.
          </p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">
              View Portfolio
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="featured-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Our latest and greatest work</p>
          <div className="featured-grid">
            {featuredProjects.map(project => (
              <div key={project.id} className="featured-card">
                <div className="project-image">{project.image}</div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <Link to="/portfolio" className="view-link">View Project →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>What We Do</h2>
          <div className="services-grid">
            <div className="service-box">
              <span className="service-icon">🎨</span>
              <h3>Graphic Design</h3>
              <p>Eye-catching visuals that capture attention</p>
            </div>
            <div className="service-box">
              <span className="service-icon">🖥️</span>
              <h3>Web Development</h3>
              <p>Responsive websites that convert</p>
            </div>
            <div className="service-box">
              <span className="service-icon">🏷️</span>
              <h3>Branding</h3>
              <p>Build a memorable brand identity</p>
            </div>
            <div className="service-box">
              <span className="service-icon">📱</span>
              <h3>UI/UX Design</h3>
              <p>Beautiful and intuitive user experiences</p>
            </div>
            <div className="service-box">
              <span className="service-icon">🖨️</span>
              <h3>Print Design</h3>
              <p>Professional print materials</p>
            </div>
            <div className="service-box">
              <span className="service-icon">📢</span>
              <h3>Marketing Materials</h3>
              <p>Content that drives engagement</p>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's create something amazing together</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Contact Us Today
          </Link>
        </div>
      </section>
    </section>
  )
}
