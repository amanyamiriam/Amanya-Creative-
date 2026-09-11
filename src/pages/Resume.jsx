import '../styles/Resume.css'

export default function Resume() {
  return (
    <section className="resume">
      <div className="container">
        <div className="resume-header">
          <h1>Miriam Mwenje</h1>
          <p>Web Developer &amp; Graphic Designer</p>
          <div className="resume-contact">
            <span>Kenya</span>
            <a href="tel:+254114743613">+254 114743613</a>
            <a href="mailto:amanyamiriam08@gmail.com">amanyamiriam08@gmail.com</a>
            <a href="https://linkedin.com/in/amanyamiriam" target="_blank" rel="noopener noreferrer">linkedin.com/in/amanyamiriam</a>
            <a href="https://github.com/amanyamiriam" target="_blank" rel="noopener noreferrer">github.com/amanyamiriam</a>
          </div>
          <div className="resume-actions">
            <a href="/MIRIAM-AMANYA-CV.pdf" className="btn btn-primary" download="MIRIAM-AMANYA-CV.pdf">Download CV (PDF)</a>
          </div>
        </div>

        <div className="resume-content">
          <div className="resume-section">
            <h2>Profile</h2>
            <p>Creative and detail-oriented <strong>Web Developer &amp; Graphic Designer</strong> with strong experience in designing visually compelling brand assets and developing responsive, user-friendly websites. Passionate about clean design, modern UI/UX, and building digital solutions that align with brand identity and business goals.</p>
          </div>

          <div className="resume-section">
            <h2>Core Skills</h2>
            <div className="skills-category">
              <h3>Web Development</h3>
              <div className="skill-list"><span>HTML5</span><span>JavaScript</span><span>React</span><span>PHP / Firebase</span><span>Responsive &amp; Mobile-First Design</span><span>UI/UX Implementation</span></div>
            </div>
            <div className="skills-category">
              <h3>Graphic Design</h3>
              <div className="skill-list"><span>Adobe Photoshop</span><span>Adobe Illustrator</span><span>Adobe InDesign</span><span>Branding &amp; Visual Identity</span><span>Print Design</span><span>CorelDRAW</span></div>
            </div>
            <div className="skills-category">
              <h3>Tools</h3>
              <div className="skill-list"><span>VS Code</span><span>Git &amp; GitHub</span><span>Canva</span></div>
            </div>
          </div>

          <div className="resume-section">
            <h2>Professional Experience</h2>
            <div className="experience-item">
              <div className="experience-header"><h3>Web Developer &amp; Graphic Designer</h3><span className="date">2025 - Present</span></div>
              <p className="company">Meilleur Print Limited</p>
              <ul>
                <li>Designed and developed modern, responsive websites aligned with client branding</li>
                <li>Created high-quality print and digital designs including logos, brochures, calendars, and signage</li>
                <li>Collaborated with clients to translate ideas into visually appealing solutions</li>
                <li>Managed UI/UX design for web and mobile applications</li>
                <li>Prepared print-ready artwork ensuring color accuracy and finishing standards</li>
              </ul>
            </div>
            <div className="experience-item">
              <div className="experience-header"><h3>Freelance Web &amp; Graphic Designer</h3><span className="date">2023 - 2026</span></div>
              <ul>
                <li>Designed brand identities for small businesses and startups</li>
                <li>Developed custom websites and dashboards for schools and businesses</li>
                <li>Created engaging social media designs and marketing materials</li>
                <li>Improved user experience through clean layouts and intuitive navigation</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h2>Project Highlights</h2>
            <div className="competencies">
              <div className="competency"><h4>Skilled Labour Services App</h4><p>UI/UX design and frontend structure for a Kenya-based services platform.</p></div>
              <div className="competency"><h4>School Portal System</h4><p>Dashboard, course registration, fees, and results UI.</p></div>
              <div className="competency"><h4>E-commerce App</h4><p>Product UI, branding, and frontend logic.</p></div>
              <div className="competency"><h4>Corporate Print Calendars</h4><p>Premium A3 and wall calendars.</p></div>
            </div>
          </div>

          <div className="resume-section">
            <h2>Education</h2>
            <div className="education-item">
              <div className="education-header"><h3>Diploma &amp; Certificate in Web Development &amp; Graphic Design</h3></div>
              <p className="school">eMobilis Technology Training Institute</p>
            </div>
          </div>

          <div className="resume-section">
            <h2>Design &amp; Development Style</h2>
            <div className="skill-list"><span>Clean</span><span>Modern</span><span>Minimal</span><span>Brand-focused</span><span>User-centered</span></div>
          </div>

          <div className="resume-section">
            <h2>References</h2>
            <div className="competencies">
              <div className="competency"><h4>Owano Agencies</h4><p>Sarah Owano<br />0720 971 285</p></div>
              <div className="competency"><h4>Meilleur Print LTD</h4><p>Henry Oduor<br />0729 556 888</p></div>
            </div>
          </div>
        </div>

        <div className="resume-download">
          <h3>Download Miriam's Full Resume</h3>
          <p>Get the complete CV as a PDF.</p>
          <a href="/MIRIAM-AMANYA-CV.pdf" className="btn btn-primary" download="MIRIAM-AMANYA-CV.pdf">Download PDF</a>
        </div>
      </div>
    </section>
  )
}
