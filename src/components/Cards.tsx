import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  link?: string;
  className?: string;
  animationDelay?: number;
  hoverEffect?: 'zoom' | 'lift' | 'glow' | 'none';
  icon?: React.ReactNode;
}

export const FeatureCard: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  link,
  className = '',
  animationDelay = 0,
  hoverEffect = 'zoom',
  icon
}) => {
  const hoverEffects = {
    zoom: 'hover:scale-105',
    lift: 'hover:-translate-y-2',
    glow: 'hover:shadow-glow',
    none: ''
  };

  const cardContent = (
    <div 
      className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden 
      shadow-lg transition-all duration-500 ${hoverEffects[hoverEffect]} ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon && <div className="mr-3 text-accent">{icon}</div>}
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        {link && (
          <Link href={link} className="text-accent hover:text-white inline-flex items-center">
            Learn more
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div className={`fade-in`} style={{ animationDelay: `${animationDelay}ms` }}>
      {link ? <Link href={link}>{cardContent}</Link> : cardContent}
    </div>
  );
};

export const InfoCard: React.FC<CardProps> = (props) => {
  return <FeatureCard {...props} hoverEffect="lift" />;
};

export const StatsCard: React.FC<{ 
  value: string; 
  label: string; 
  icon?: React.ReactNode;
  animationDelay?: number;
}> = ({ 
  value, 
  label, 
  icon,
  animationDelay = 0
}) => {
  return (
    <div 
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg fade-in"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        {icon && <div className="text-accent">{icon}</div>}
      </div>
      <p className="text-gray-400">{label}</p>
    </div>
  );
};