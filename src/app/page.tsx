'use client'

export default function Home() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>
              Pioneering <span className="accent-text">Space</span> &<br />
              Smart Vehicle Technology
            </h1>
            <p>
              Revolutionizing the future with AI-powered technology for space exploration 
              and intelligent vehicles - all secured with blockchain.
            </p>
            <div className="hero-buttons">
              <a href="#technology" className="btn btn-primary">Explore Technology</a>
              <a href="#contact" className="btn btn-outline">Join Our Mission</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About <span className="accent-text">ARCKS</span></h2>
          <p>
            Pioneering the intersection of space exploration, smart vehicle technology,
            and blockchain innovation.
          </p>
          
          <div className="about-grid">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                ARCKS is dedicated to advancing humanity's reach beyond Earth through 
                cutting-edge AI technology and blockchain-secured systems.
              </p>
            </div>
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                We envision a future where space is accessible, vehicles are smart enough to 
                anticipate human needs, and all systems are secured through decentralized technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="tech-section">
        <div className="container">
          <h2>Our <span className="accent-text">Technology</span></h2>
          <p>
            Cutting-edge innovations powered by AI and secured through blockchain
          </p>

          <div className="tech-grid">
            <div className="feature-card">
              <h3>Intelligent Systems</h3>
              <p>
                AI-powered decision making capabilities that adapt and learn from environments.
              </p>
              <div className="emoji">🧠</div>
            </div>
            <div className="feature-card">
              <h3>Blockchain Security</h3>
              <p>
                Our technology stack is secured through decentralized blockchain systems.
              </p>
              <div className="emoji">🔗</div>
            </div>
            <div className="feature-card">
              <h3>Quantum Computing</h3>
              <p>
                Leveraging quantum computing for complex calculations required for
                space navigation and autonomous vehicle operations.
              </p>
              <div className="emoji">⚛️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles" className="vehicles-section">
        <div className="container">
          <h2>Smart <span className="accent-text">Vehicles</span></h2>
          <p>
            Next-generation transportation powered by AI and deepersensor technology
          </p>

          <div className="vehicles-grid">
            <div className="vehicle-card">
              <h3>Autonomous Vehicles</h3>
              <p>Self-driving cars with intelligent navigation systems</p>
              <div className="emoji">🚗</div>
            </div>
            <div className="vehicle-card">
              <h3>Space Rovers</h3>
              <p>Exploration vehicles designed for extraterrestrial environments</p>
              <div className="emoji">🛸</div>
            </div>
          </div>
        </div>
      </section>

      {/* Space Exploration Section */}
      <section id="space" className="space-section">
        <div className="container">
          <h2>Space <span className="accent-text">Exploration</span></h2>
          <p>
            Pushing the boundaries of human reach into the cosmos
          </p>

          <div className="space-grid">
            <div className="feature-card">
              <h3>Lunar Missions</h3>
              <p>
                Establishing sustainable presence on the Moon with AI-powered systems.
              </p>
              <div className="emoji">🌙</div>
            </div>
            <div className="feature-card">
              <h3>Mars Colonization</h3>
              <p>
                Developing technology for sustainable human habitation on Mars.
              </p>
              <div className="emoji">🔴</div>
            </div>
            <div className="feature-card">
              <h3>Deep Space Probes</h3>
              <p>
                Long-range autonomous probes with quantum communication capabilities.
              </p>
              <div className="emoji">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2>Join Our <span className="accent-text">Mission</span></h2>
            <p>
              Be part of the future of space exploration and smart transportation
            </p>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us how you'd like to get involved"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}