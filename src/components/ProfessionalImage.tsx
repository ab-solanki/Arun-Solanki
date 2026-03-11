'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProfessionalImageProps {
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
}

export default function ProfessionalImage({ className = '', size = 'xl' }: ProfessionalImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const sizeClasses = {
    small: 'w-20 h-20 sm:w-24 sm:h-24',
    medium: 'w-28 h-28 sm:w-32 sm:h-32',
    large: 'w-40 h-40 sm:w-48 sm:h-48',
    xl: 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72'
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Elegant Frame with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-gray-900 to-black rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700 scale-110"></div>
      
      {/* Sophisticated Border Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 scale-105"></div>
      
      {/* Inner Glow Ring */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-lg opacity-15 group-hover:opacity-25 transition-all duration-500 scale-102"></div>
      
      {/* Main Image Container with Enhanced Styling */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-white/30 group-hover:border-white/50 group-hover:scale-105 transition-all duration-700 shadow-2xl backdrop-blur-glass`}>
        {/* Subtle Inner Shadow for Depth */}
        <div className="absolute inset-0 rounded-full shadow-inner border border-white/10"></div>
        
        <Image
          src="/arun-solanki-frontend-team-lead.jpg"
          alt="Arun Solanki - Senior Frontend Developer & Team Leader"
          title="Arun Solanki - Senior Frontend Developer & Team Leader"
          width={288}
          height={288}
          className={`object-cover w-full h-full transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} filter contrast-110 brightness-105`}
          onLoad={() => setIsLoaded(true)}
          priority
        />
        
        {/* Loading Skeleton with Elegant Shimmer */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        )}
        
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Professional Border Accent */}
        <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
      </div>
      
      {/* Refined Achievement Badges */}
      <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center animate-bounce shadow-xl border-2 sm:border-3 border-white/40 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white animate-heartbeat" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-18 sm:h-18 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center animate-bounce shadow-xl border-2 sm:border-3 border-white/40 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-wiggle" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      
      <div className="absolute top-1/2 -right-6 sm:-right-10 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center animate-bounce shadow-xl border-2 sm:border-3 border-white/40 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white animate-pulse-fast" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Elegant Floating Elements */}
      <div className="absolute -top-6 sm:-top-10 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-float opacity-70 shadow-lg"></div>
      <div className="absolute -bottom-6 sm:-bottom-10 right-1/4 w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full animate-float opacity-80 shadow-lg" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/4 -left-4 sm:-left-8 w-2 h-2 sm:w-5 sm:h-5 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-float opacity-60 shadow-lg" style={{ animationDelay: '2s' }}></div>
      
      {/* Professional Status Indicator */}
      <div className="absolute bottom-2 right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white/50 animate-pulse shadow-lg">
        <div className="w-full h-full rounded-full bg-white/20 animate-ping"></div>
      </div>
    </div>
  );
}
