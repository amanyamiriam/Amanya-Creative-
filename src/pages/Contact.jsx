import { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send to a backend service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section className="contact">
      <div className="container">
        <h1>LET'S CREATE.</h1>
        <p className="section-intro">
          Have a project in mind?
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-box">
              <h3>📧 Email</h3>
              <p>
                <a href="amanyamiriam08@gmail.com">amanyamiriam08@gmail.com</a>
              </p>
              <p className="small">I typically respond within 24 hours</p>
            </div>

            <div className="info-box">
              <h3>📱 WhatsApp</h3>
              <p>
                <a href="https://wa.me/114743613" target="_blank" rel="noopener noreferrer">
                  + (254) 114743613
                </a>
              </p>
              <p className="small">Quick messages and instant communication</p>
            </div>

            <div className="info-box">
              <h3>🔗 LinkedIn</h3>
              <p>
                <a href="https://www.linkedin.com/in/miriam-amanya-3a5211246/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/miriam-amanya-3a5211246
                </a>
              </p>
              <p className="small">Connect for professional updates</p>
            </div>

            <div className="info-box">
              <h3>💻 GitHub</h3>
              <p>
                <a href="https://github.com/amanyamiriam" target="_blank" rel="noopener noreferrer">
                  github.com/amanyamiriam
                </a>
              </p>
              <p className="small">Check out my web development projects</p>
            </div>

            <div className="social-section">
              <h3>Follow & Connect</h3>
              <div className="social-links">
                <a href="#" className="social-icon" title="WhatsApp">💬</a>
                <a href="#" className="social-icon" title="LinkedIn">💼</a>
                <a href="#" className="social-icon" title="GitHub">💻</a>
                <a href="#" className="social-icon" title="Instagram">📸</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send Me a Message</h2>
            
            {submitted && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent. I'll get back to you soon!
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="branding">Branding</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="print-design">Print Design</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Send Message
              </button>
            </form>

            <div className="form-note">
              <p>* Required fields</p>
            </div>
          </div>
        </div>

        <div className="availability">
          <h2>Working Hours & Availability</h2>
          <div className="hours-grid">
            <div className="hours-box">
              <h3>⏰ Available For</h3>
              <ul>
                <li>Freelance Projects</li>
                <li>Full-time Collaborations</li>
                <li>Consulting</li>
                <li>Workshops & Training</li>
              </ul>
            </div>
            <div className="hours-box">
              <h3>📅 Response Time</h3>
              <ul>
                <li>Email: 24 hours</li>
                <li>WhatsApp: 2-4 hours</li>
                <li>Weekdays: Mon-Fri</li>
                <li>Timezone: GMT/UTC</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What's your typical project turnaround time?</h4>
              <p>Most projects are completed within 2-4 weeks, depending on scope and complexity.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer revision rounds?</h4>
              <p>Yes! I include revision rounds in my package to ensure you're 100% satisfied with the final result.</p>
            </div>
            <div className="faq-item">
              <h4>What's your pricing structure?</h4>
              <p>I offer flexible pricing based on project scope, complexity, and timeline. Let's discuss to find the best fit.</p>
            </div>
            <div className="faq-item">
              <h4>Do you work with startups?</h4>
              <p>Absolutely! I love working with startups and early-stage companies. I offer flexible packages for growing businesses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
