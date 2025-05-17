import React from 'react';
import Link from 'next/link';
import { Button } from './Buttons';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-80 bg-dark shadow-lg">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white tracking-tighter">
              <span className="text-accent">ARCKS</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            <Link href="#about" className="text-white hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#technology" className="text-white hover:text-accent transition-colors">
              Technology
            </Link>
            <Link href="#vehicles" className="text-white hover:text-accent transition-colors">
              Vehicles
            </Link>
            <Link href="#space" className="text-white hover:text-accent transition-colors">
              Space
            </Link>
            <Link href="#contact" className="text-white hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="primary"
              href="/connect"
              className="hidden md:inline-flex"
            >
              Connect Wallet
            </Button>
            <button className="md:hidden text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}