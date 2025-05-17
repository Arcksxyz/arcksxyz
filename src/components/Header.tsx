import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <div className="logo-text">
              <span className="accent-text">ARCKS</span>
            </div>
          </Link>

          <nav className="main-nav">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#technology" className="nav-link">
              Technology
            </Link>
            <Link href="#vehicles" className="nav-link">
              Vehicles
            </Link>
            <Link href="#space" className="nav-link">
              Space
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary">
              Connect Wallet
            </button>
            <button className="mobile-menu-btn">
              <span>☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}