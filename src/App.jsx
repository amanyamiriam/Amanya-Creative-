import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import headerLogo from '../ChatGPT Image Sep 11, 2026, 11_13_20 AM.png'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
              <img src={headerLogo} alt="Amanya Creative" />
            </Link>
            <div className="menu-icon" onClick={toggleMobileMenu}>
              <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={mobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link" onClick={closeMobileMenu}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link" onClick={closeMobileMenu}>
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link nav-link-btn" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>AMANYA CREATIVE</h3>
              <p>Graphic Designer • Web Developer • Brand & Print Designer</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul className="social-links">
                <li><a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="mailto:contact@mimi.co">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Amanya Creative. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
