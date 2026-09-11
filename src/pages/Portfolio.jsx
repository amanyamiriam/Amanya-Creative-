import { useState } from 'react'
import '../styles/Portfolio.css'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'FundiConnect',
      category: 'web',
      image: '/portfolio/fundiconnect-fundis.svg',
      challenge: 'Create a platform to connect donors with fundraising campaigns',
      solution: 'Developed a user-friendly web platform with secure payment processing',
      tools: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Autism Foundation Website',
      category: 'web',
      image: '/portfolio/autism-foundation-website.svg',
      challenge: 'Build an informative website for an autism advocacy organization',
      solution: 'Created an accessible, mobile-responsive website with resource library',
      tools: ['React', 'CMS', 'Accessibility Features']
    },
    {
      id: 3,
      title: 'Wambi Realtors Branding',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=600&fit=crop',
      challenge: 'Establish brand identity for a real estate company',
      solution: 'Designed comprehensive branding package including logo, colors, and guidelines',
      tools: ['Adobe Illustrator', 'Figma', 'Brand Guidelines']
    },
    {
      id: 4,
      title: 'Children with Cancer Website',
      category: 'web',
      image: '/portfolio/cancer-awareness-website.svg',
      challenge: 'Create emotional, impactful website for a charitable organization',
      solution: 'Developed storytelling-focused website with donation integration',
      tools: ['React', 'Stripe Integration', 'Mobile Responsive']
    },
    {
      id: 5,
      title: 'ReLoop Packaging Design',
      category: 'packaging',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=600&fit=crop',
      challenge: 'Design eco-friendly product packaging',
      solution: 'Created sustainable packaging design with environmental messaging',
      tools: ['Adobe InDesign', 'Sustainability Focus', 'Print Preparation']
    },
    {
      id: 6,
      title: 'Mimi\'s Beauty Store UI/UX',
      category: 'uiux',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&h=600&fit=crop',
      challenge: 'Design e-commerce interface for beauty products',
      solution: 'Built intuitive shopping experience with product filtering and cart',
      tools: ['Figma', 'Prototyping', 'User Testing']
    },
    {
      id: 7,
      title: 'Meilleur Print Branding',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=900&h=600&fit=crop',
      challenge: 'Rebrand a printing company',
      solution: 'Created modern, professional brand identity reflecting quality and reliability',
      tools: ['Adobe Illustrator', 'Brand Strategy', 'Print Collateral']
    },
    {
      id: 8,
      title: 'Wingu Africa Graphics',
      category: 'graphics',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900&h=600&fit=crop',
      challenge: 'Create engaging graphics for African tech startup',
      solution: 'Designed vibrant, culturally relevant social media and web graphics',
      tools: ['Adobe Creative Suite', 'Canva', 'Social Media Optimization']
    },
    {
      id: 9,
      title: 'Gift Bag Design',
      category: 'packaging',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900&h=600&fit=crop',
      challenge: 'Design custom gift bags for premium brand',
      solution: 'Created elegant, memorable gift bag design with custom illustrations',
      tools: ['Adobe InDesign', 'Illustrations', 'Die-Cut Design']
    },
    {
      id: 10,
      title: 'T-Shirt Design Collection',
      category: 'graphics',
      image: '/portfolio/branded-tshirts.svg',
      challenge: 'Create trendy t-shirt designs for apparel brand',
      solution: 'Designed 10+ unique t-shirt graphics with various styles and themes',
      tools: ['Adobe Illustrator', 'Vector Design', 'Print Preparation']
    },
    {
      id: 11,
      title: 'Custom Calendar Design',
      category: 'packaging',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&h=600&fit=crop',
      challenge: 'Design promotional calendar for corporate client',
      solution: 'Created beautiful, functional calendar with company branding',
      tools: ['Adobe InDesign', 'Calendar Template', 'Print Production']
    },
    {
      id: 12,
      title: 'Business Card Suite',
      category: 'packaging',
      image: '/portfolio/business-card-suite.svg',
      challenge: 'Design cohesive business card for professional services',
      solution: 'Created elegant business card matching brand guidelines',
      tools: ['Adobe InDesign', 'Print Specifications', 'Brand Consistency']
    }
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'branding', label: 'Branding' },
    { id: 'graphics', label: 'Graphic Design' },
    { id: 'web', label: 'Web' },
    { id: 'uiux', label: 'UI/UX' },
    { id: 'packaging', label: 'Print & Packaging' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section className="portfolio">
      <div className="container">
        <h1>My Work</h1>
        <p className="section-intro">
          Explore our diverse range of creative projects across design and development
        </p>

        <div className="category-filter">
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} onError={(e) => e.target.style.display = 'none'} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                
                <div className="project-detail">
                  <h4>Challenge:</h4>
                  <p>{project.challenge}</p>
                </div>

                <div className="project-detail">
                  <h4>Solution:</h4>
                  <p>{project.solution}</p>
                </div>

                <div className="tools">
                  <h4>Tools Used:</h4>
                  <div className="tool-tags">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}

        <div className="portfolio-cta">
          <h2>Like What You See?</h2>
          <p>Let's discuss how we can help your business grow</p>
          <a href="/contact" className="btn btn-primary btn-large">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  )
}
