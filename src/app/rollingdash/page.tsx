'use client'

import React from 'react'
import Link from 'next/link'

export default function RollingDash() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>
              <span className="accent-text">RollingDash</span> <br />
              Data Marketplace
            </h1>
            <p>
              A revolutionary mobile application that rewards users for sharing vehicle data
              through a blockchain-powered marketplace developed for a recent hackathon.
            </p>
            <div className="hero-buttons">
              <a href="#features" className="btn btn-primary">Explore Features</a>
              <a href="https://github.com/buildathonzx/rollingdash" className="btn btn-outline">View on GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About <span className="accent-text">RollingDash</span></h2>
          <p>
            RollingDash is an innovative mobile application that creates a marketplace for vehicle data,
            empowering users to monetize their driving information while maintaining privacy control.
          </p>
          
          <div className="about-grid">
            <div className="about-card">
              <h3>Data Monetization</h3>
              <p>
                Users can earn cryptocurrency tokens by sharing selected vehicle data with businesses
                and researchers who need real-world driving information.
              </p>
              <div className="emoji">💰</div>
            </div>
            <div className="about-card">
              <h3>Privacy-Focused</h3>
              <p>
                Complete control over what data is shared, with transparent privacy impact ratings
                for each data category and the ability to opt in or out at any time.
              </p>
              <div className="emoji">🔒</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="tech-section">
        <div className="container">
          <h2>Key <span className="accent-text">Features</span></h2>
          <p>
            Explore the innovative features of the RollingDash application
          </p>

          <div className="feature-grid">
            {/* Dashboard Preview */}
            <div className="showcase-card">
              <div className="showcase-header">
                <div className="status-bar">
                  <div className="time">9:41</div>
                  <div className="icons">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                <div className="app-header">
                  <div className="app-title">Dashboard</div>
                </div>
              </div>
              <div className="showcase-content">
                <div className="earnings-card">
                  <div className="earnings-icon">📈</div>
                  <div className="earnings-content">
                    <div className="earnings-label">Earnings</div>
                    <div className="earnings-value">256.8 DCL</div>
                    <div className="earnings-change">
                      <span className="up-arrow">↗</span>
                      <span className="change-value">+12.4%</span>
                      <span className="period">per day</span>
                    </div>
                  </div>
                  <div className="action-arrow">▶</div>
                </div>
                <div className="data-widgets">
                  <div className="data-widget">
                    <div className="widget-icon">🚗</div>
                    <div className="widget-content">
                      <div className="widget-title">Distance</div>
                      <div className="widget-value">128.5 km</div>
                    </div>
                  </div>
                  <div className="data-widget">
                    <div className="widget-icon">⏱️</div>
                    <div className="widget-content">
                      <div className="widget-title">Drive Time</div>
                      <div className="widget-value">3.2 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketplace Preview */}
            <div className="showcase-card">
              <div className="showcase-header">
                <div className="status-bar">
                  <div className="time">9:41</div>
                  <div className="icons">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                <div className="app-header">
                  <div className="app-title">Marketplace</div>
                </div>
              </div>
              <div className="showcase-content">
                <div className="filter-chips">
                  <div className="filter-chip active">All</div>
                  <div className="filter-chip">Location</div>
                  <div className="filter-chip">Performance</div>
                  <div className="filter-chip">Safety</div>
                </div>
                <div className="data-listing">
                  <div className="listing-icon">📍</div>
                  <div className="listing-content">
                    <div className="listing-title">GPS Data</div>
                    <div className="listing-category">Location</div>
                  </div>
                  <div className="listing-rewards">
                    <div className="rewards-value">5.2</div>
                    <div className="rewards-label">DCL/day</div>
                  </div>
                  <div className="toggle-switch">
                    <div className="toggle-track">
                      <div className="toggle-thumb"></div>
                    </div>
                  </div>
                </div>
                <div className="data-listing">
                  <div className="listing-icon">🔄</div>
                  <div className="listing-content">
                    <div className="listing-title">RPM Data</div>
                    <div className="listing-category">Performance</div>
                  </div>
                  <div className="listing-rewards">
                    <div className="rewards-value">3.8</div>
                    <div className="rewards-label">DCL/day</div>
                  </div>
                  <div className="toggle-switch active">
                    <div className="toggle-track">
                      <div className="toggle-thumb"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Stats Preview */}
            <div className="showcase-card">
              <div className="showcase-header">
                <div className="status-bar">
                  <div className="time">9:41</div>
                  <div className="icons">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                <div className="app-header">
                  <div className="app-title">Vehicle Stats</div>
                </div>
              </div>
              <div className="showcase-content">
                <div className="progress-ring">
                  <div className="ring-background"></div>
                  <div className="ring-progress"></div>
                  <div className="ring-label">
                    <div className="ring-value">68%</div>
                    <div className="ring-text">Battery</div>
                  </div>
                </div>
                <div className="stats-cards">
                  <div className="stat-card">
                    <div className="stat-icon">🔋</div>
                    <div className="stat-content">
                      <div className="stat-title">Efficiency</div>
                      <div className="stat-value">4.8 kWh/km</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">🌡️</div>
                    <div className="stat-content">
                      <div className="stat-title">Temperature</div>
                      <div className="stat-value">24°C</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="tech-section">
        <div className="container">
          <h2>Technologies <span className="accent-text">Used</span></h2>
          <p>
            RollingDash leverages cutting-edge technologies for a seamless user experience
          </p>

          <div className="tech-grid">
            <div className="feature-card">
              <h3>React Native</h3>
              <p>
                Cross-platform mobile application development with a focus on native performance
                and user experience.
              </p>
              <div className="emoji">📱</div>
            </div>
            <div className="feature-card">
              <h3>Blockchain Integration</h3>
              <p>
                Secure, transparent data marketplace powered by blockchain technology for
                reliable payments and data verification.
              </p>
              <div className="emoji">🔗</div>
            </div>
            <div className="feature-card">
              <h3>Real-time Analytics</h3>
              <p>
                Advanced data processing for real-time insights into vehicle performance
                and driving habits.
              </p>
              <div className="emoji">📊</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2>Try <span className="accent-text">RollingDash</span></h2>
            <p>
              Interested in learning more about the RollingDash project or want to contribute?
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn btn-primary">Back to ARCKS Homepage</Link>
              <a href="https://github.com/buildathonzx/rollingdash" className="btn btn-outline">View Source Code</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}