'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-btn')) {
        setMobileMenuOpen(false);
      }
    };
    
    // Close menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when nav link is clicked
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <div className="logo-text">
              <span className="accent-text">ARCKSXYZ</span>
            </div>
          </Link>

          <nav className={`main-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
            <Link href="#about" className="nav-link" onClick={handleNavLinkClick}>
              About
            </Link>
            <Link href="#projects" className="nav-link" onClick={handleNavLinkClick}>
              Projects
            </Link>
            <Link href="#technology" className="nav-link" onClick={handleNavLinkClick}>
              Technology
            </Link>
            <Link href="#vehicles" className="nav-link" onClick={handleNavLinkClick}>
              Vehicles
            </Link>
            <Link href="#space" className="nav-link" onClick={handleNavLinkClick}>
              Space
            </Link>
            <Link href="#contact" className="nav-link" onClick={handleNavLinkClick}>
              Contact
            </Link>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary">
              Connect Wallet
            </button>
            <button 
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span>{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-container">
            <div className="mobile-nav-items">
              <Link href="#about" className="mobile-nav-link" onClick={handleNavLinkClick}>
                About
              </Link>
              <Link href="#projects" className="mobile-nav-link" onClick={handleNavLinkClick}>
                Projects
              </Link>
              <Link href="#technology" className="mobile-nav-link" onClick={handleNavLinkClick}>
                Technology
              </Link>
              <Link href="#vehicles" className="mobile-nav-link" onClick={handleNavLinkClick}>
                Vehicles
              </Link>
              <Link href="#space" className="mobile-nav-link" onClick={handleNavLinkClick}>
                Space
              </Link>
              <Link href="#contact" className="mobile-nav-link" onClick={handleNavLinkClick}>
                Contact
              </Link>
            </div>
            <button className="btn btn-primary mobile-connect-btn" onClick={handleNavLinkClick}>
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </header>
  );
}