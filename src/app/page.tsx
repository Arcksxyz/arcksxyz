'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/Buttons'
import { FeatureCard, StatsCard } from '@/components/Cards'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  const vehiclesRef = useRef<HTMLDivElement>(null)
  const spaceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef} 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY * 0.001,
          }}
        >
          <div className="absolute w-64 h-64 bg-primary rounded-full blur-[100px] top-1/4 -left-32 animate-pulse" />
          <div className="absolute w-96 h-96 bg-secondary rounded-full blur-[100px] bottom-1/4 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-6 slide-up">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Pioneering <span className="text-accent glitch" data-text="Space">Space</span> & <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
                  Smart Vehicle
                </span> Technology
              </h1>
              
              <p className="text-xl text-gray-300">
                Revolutionizing the future with AI-powered technology for space exploration 
                and intelligent vehicles - all secured with blockchain.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  href="#technology"
                >
                  Explore Technology
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  href="#contact"
                >
                  Join Our Mission
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="w-full h-[400px] md:h-[500px] relative card-3d neon-glow zoom-in">
                {/* Replace with your actual spacecraft or vehicle 3D model/image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-primary rounded-xl overflow-hidden">
                  <div className="absolute inset-0 opacity-70">
                    <div className="w-full h-full bg-[url('/spacecraft.png')] bg-cover bg-center float" />
                  </div>
                  <div className="absolute inset-0 card-content flex items-center justify-center">
                    <div className="relative z-10 text-center p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Next-Gen Spacecraft</h3>
                      <p className="text-gray-300">Powered by AI and blockchain technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard 
              value="100+" 
              label="AI Models Deployed" 
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              animationDelay={0}
            />
            <StatsCard 
              value="25+" 
              label="Vehicle Prototypes" 
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              animationDelay={200}
            />
            <StatsCard 
              value="5" 
              label="Space Missions Planned" 
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              animationDelay={400}
            />
            <StatsCard 
              value="$50M+" 
              label="Secured Funding" 
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              animationDelay={600}
            />
          </div>
        </div>
      </section>

      {/* About Section with Optical Illusion */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-accent">ARCKS</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the intersection of space exploration, smart vehicle technology,
              and blockchain innovation.
            </p>
          </div>

          <div className="page-inception mx-auto max-w-4xl mt-16 mb-20">
            <div className="page-inner bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-4">Our Mission</h3>
                  <p className="text-gray-300 mb-6">
                    ARCKS is dedicated to advancing humanity's reach beyond Earth through 
                    cutting-edge AI technology and blockchain-secured systems that power both 
                    space exploration initiatives and next-generation vehicles.
                  </p>
                  <p className="text-gray-300">
                    By partnering with deepersensor, we've integrated advanced sensing technology 
                    into our vehicles and spacecraft, allowing for unprecedented data collection and
                    intelligent decision-making capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-4">Our Vision</h3>
                  <p className="text-gray-300 mb-6">
                    We envision a future where space is accessible, vehicles are smart enough to 
                    anticipate human needs, and all systems are secured through decentralized technology.
                  </p>
                  <p className="text-gray-300">
                    Our vision encompasses not just technological advancement, but a philosophical 
                    shift in how humanity interacts with transportation and explores the cosmos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" ref={techRef} className="py-20 relative bg-gradient-to-b from-dark to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-accent">Technology</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge innovations powered by AI and secured through blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Intelligent Systems"
              description="AI-powered decision making capabilities that adapt and learn from environments, both terrestrial and extraterrestrial."
              imageSrc="/ai-system.jpg"
              link="/technology/ai"
              animationDelay={0}
              hoverEffect="lift"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              }
            />
            
            <FeatureCard
              title="Blockchain Security"
              description="Our technology stack is secured through decentralized blockchain systems, ensuring transparency and immutability."
              imageSrc="/blockchain.jpg"
              link="/technology/blockchain"
              animationDelay={200}
              hoverEffect="glow"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
            />
            
            <FeatureCard
              title="Quantum Computing"
              description="Leveraging quantum computing for complex calculations required for space navigation and autonomous vehicle operations."
              imageSrc="/quantum.jpg"
              link="/technology/quantum"
              animationDelay={400}
              hoverEffect="zoom"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles" ref={vehiclesRef} className="py-20 relative">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: 'radial-gradient(circle at 50% 50%, rgba(102, 16, 242, 0.2), transparent 70%)',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Smart <span className="text-accent">Vehicles</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Next-generation transportation powered by AI and deepersensor technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-3d neon-glow rounded-xl overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-primary rounded-xl overflow-hidden">
                <div className="absolute inset-0 opacity-70">
                  <div className="w-full h-full bg-[url('/smart-car.jpg')] bg-cover bg-center" />
                </div>
                <div className="absolute inset-0 card-content flex items-center justify-center">
                  <div className="relative z-10 text-center p-8 bg-gray-900 bg-opacity-70 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-2">Autonomous Vehicles</h3>
                    <p className="text-gray-300">Self-driving cars with intelligent navigation systems</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      href="/vehicles/autonomous"
                      className="mt-4"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-3d neon-glow rounded-xl overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-primary rounded-xl overflow-hidden">
                <div className="absolute inset-0 opacity-70">
                  <div className="w-full h-full bg-[url('/rover.jpg')] bg-cover bg-center" />
                </div>
                <div className="absolute inset-0 card-content flex items-center justify-center">
                  <div className="relative z-10 text-center p-8 bg-gray-900 bg-opacity-70 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-2">Space Rovers</h3>
                    <p className="text-gray-300">Exploration vehicles designed for extraterrestrial environments</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      href="/vehicles/rovers"
                      className="mt-4"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space Exploration Section */}
      <section id="space" ref={spaceRef} className="py-20 relative bg-gradient-to-b from-gray-900 to-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Space <span className="text-accent">Exploration</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pushing the boundaries of human reach into the cosmos
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Lunar Missions"
                description="Establishing sustainable presence on the Moon with AI-powered habitats and exploration systems."
                imageSrc="/lunar.jpg"
                link="/space/lunar"
                animationDelay={0}
                hoverEffect="lift"
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                }
              />
              
              <FeatureCard
                title="Mars Colonization"
                description="Developing technology for sustainable human habitation on Mars with blockchain-secured resource management."
                imageSrc="/mars.jpg"
                link="/space/mars"
                animationDelay={200}
                hoverEffect="glow"
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              
              <FeatureCard
                title="Deep Space Probes"
                description="Long-range autonomous probes with quantum communication capabilities for exploring the outer solar system."
                imageSrc="/deep-space.jpg"
                link="/space/deep-space"
                animationDelay={400}
                hoverEffect="zoom"
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our <span className="text-accent">Mission</span></h2>
              <p className="text-xl text-gray-300">
                Be part of the future of space exploration and smart transportation
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tell us how you'd like to get involved"
                ></textarea>
              </div>

              <div className="text-center">
                <Button 
                  variant="primary" 
                  size="lg" 
                  type="submit"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}