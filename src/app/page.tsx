'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CTAButton from './components/CTAButton';
import PublicationsCarousel from './components/PublicationsCarousel';

export default function WelcomePage() {
  const router = useRouter();
  
  const handleContinue = () => {
    router.push('/age');
  };
  
  return (
    <>
      {/* Custom layout for WelcomePage - allows full-width image */}
      <div 
        className="min-h-screen flex flex-col" 
        style={{ 
          background: 'var(--color-bg)',
          paddingBottom: 'calc(var(--spacing-sm) + 80px)', // Add space for sticky footer
        }}
      >
        {/* Logo Header - height 90px with padding to center logo */}
        <div 
          className="flex justify-center items-center"
          style={{
            height: '90px',
            paddingTop: '19px',
            paddingBottom: '19px',
            paddingLeft: 'var(--spacing-md)',
            paddingRight: 'var(--spacing-md)',
          }}
        >
          <div className="relative" style={{ width: '104px', height: '52px' }}>
            <Image
              src="/images/noorkids_logo.png"
              alt="Noor Kids"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Main content area - no top spacing */}
        <div className="flex flex-col items-center">
          {/* Hero Image Stack - FULL WIDTH with overlay text */}
          <div 
            className="relative w-full overflow-hidden animate-fade-in" 
            style={{ 
              height: '480px',
            }}
          >
            {/* Background Image */}
            <Image
              src="/images/landing.png"
              alt="Personalize Your Child's Journey"
              fill
              className="object-cover"
              priority
            />
            
            {/* Gradient Overlay - Bottom to Top */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 70%)',
              }}
            />
            
            {/* Headline Overlay */}
            <div 
              className="absolute inset-x-0 bottom-0 flex items-end justify-center"
              style={{
                paddingLeft: 'var(--spacing-md)',
                paddingRight: 'var(--spacing-md)',
                paddingBottom: 'var(--spacing-xl)',
              }}
            >
              <h1 
                className="text-2xl font-bold text-center animate-slide-in max-w-2xl" 
                style={{ color: '#ffffff' }}
              >
                Let&apos;s stop forcing islam and start inspiring it
              </h1>
            </div>
          </div>
        </div>
        
        {/* Publications Carousel - with horizontal padding */}
        <div 
          className="w-full max-w-2xl mx-auto"
          style={{
            marginTop: 'var(--spacing-lg)',
            paddingLeft: 'var(--spacing-md)',
            paddingRight: 'var(--spacing-md)',
          }}
        >
          <PublicationsCarousel />
        </div>
      </div>
      
      {/* Sticky Footer with CTA Button */}
      <footer 
        className="fixed bottom-0 left-0 right-0 z-40"
        style={{
          backgroundColor: 'var(--color-bg-white)',
          padding: 'var(--spacing-md)',
          borderTop: '1px solid var(--color-bg-alt)',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <CTAButton 
            onClick={handleContinue}
          >
            Build Your Child’s Plan
          </CTAButton>
        </div>
      </footer>
    </>
  );
}
