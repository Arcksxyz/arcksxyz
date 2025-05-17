import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="logo">
              <div className="logo-text">
                <span className="accent-text">ARCKS</span>
              </div>
            </Link>
            <p>
              Pioneering space exploration and smart vehicles with AI-powered intelligence technology.
            </p>
            <p className="deepersensor">
              <span className="accent-text">Official Partner of </span>
              <a 
                href="https://www.deepersensor.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                www.deepersensor.com
              </a>
            </p>
          </div>

          <div className="footer-links">
            <h3>Explore</h3>
            <ul>
              <li>
                <Link href="#about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#technology">
                  Our Technology
                </Link>
              </li>
              <li>
                <Link href="#vehicles">
                  Smart Vehicles
                </Link>
              </li>
              <li>
                <Link href="#space">
                  Space Exploration
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>
              Email: <a href="mailto:info@arcks.xyz">info@arcks.xyz</a>
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">📱</a>
              <a href="#" aria-label="Twitter">💬</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} ARCKS. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link href="/privacy">
              Privacy Policy
            </Link>
            <Link href="/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}