import '../styles/About.css'

export default function About() {
  const skills = [
    'Adobe Illustrator',
    'Photoshop',
    'InDesign',
    'CorelDRAW',
    'Canva',
    'Figma',
    'VS Code',
    'React',
    'HTML/CSS',
    'JavaScript',
    'Responsive Design',
    'UI/UX Design',
    'Branding',
    'Logo Design',
    'Print Design',
    'Web Development'
  ]

  return (
    <section className="about">
      <div className="container">
        <h1>About Me</h1>
        
        <div className="about-content">
          <div className="about-intro">
            <h2>MORE THAN DESIGN.</h2>
            <h3>I combine creativity with technology.</h3>
            <blockquote>
              Design is more than making something look good. It's about communicating an idea, creating an experience and solving a problem.
            </blockquote>
            <p>
              Through Amanya Creative, I combine graphic design, branding and technology to create work that is both visually engaging and functional.
            </p>
          </div>

          <div className="about-journey">
            <h2>My Professional Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>2026 - Present</h3>
                <p><strong>Founder & Creative Director</strong> - Amanya Creative</p>
                <p>Leading a creative team to deliver exceptional design solutions for clients worldwide.</p>
              </div>
              <div className="timeline-item">
                <h3>2025 - 2026</h3>
                <p><strong>Senior Graphic Designer</strong> - Various Design Studios</p>
                <p>Specialized in brand identity, print design, and digital marketing materials.</p>
              </div>
              <div className="timeline-item">
                <h3>2023 - 2025</h3>
                <p><strong>Junior Designer</strong> - First Steps in Design</p>
                <p>Started my career learning the fundamentals of graphic and web design.</p>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h2>Skills & Tools</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="values-section">
            <h2>What I Stand For</h2>
            <div className="values-grid">
              <div className="value-box">
                <h3>💡 Creativity</h3>
                <p>I push boundaries and think outside the box to deliver unique solutions.</p>
              </div>
              <div className="value-box">
                <h3>⚡ Quality</h3>
                <p>Excellence is non-negotiable in every project I undertake.</p>
              </div>
              <div className="value-box">
                <h3>🤝 Collaboration</h3>
                <p>I work closely with clients to understand and exceed their expectations.</p>
              </div>
              <div className="value-box">
                <h3>🎯 Results-Driven</h3>
                <p>Every design serves a purpose and drives measurable business results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
