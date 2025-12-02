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
      <div 
        className="min-h-screen flex flex-col" 
        style={{ 
          background: 'var(--color-bg)',
          paddingLeft: 'var(--spacing-md)',
          paddingRight: 'var(--spacing-md)',
          paddingTop: 'var(--spacing-xl)',
          paddingBottom: 'calc(var(--spacing-sm) + 80px)', // Add space for sticky footer
        }}
      >
        {/* Logo */}
        <div className="w-full max-w-2xl mx-auto mb-6 flex justify-center">
          <div className="relative" style={{ width: '250px', height: '80px' }}>
            <Image
              src="/images/noorkids_logo.png"
              alt="Noor Kids"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="w-full max-w-2xl mx-auto flex-1 flex items-center justify-center">
          {/* Main Content Card */}
        <div 
          className="animate-fade-in w-full"
          style={{
            backgroundColor: 'var(--color-bg-white)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--spacing-md)',
          }}
        >
          {/* Hero Image */}
          <div 
            className="relative rounded-2xl overflow-hidden" 
            style={{ 
              height: '240px', 
              borderRadius: 'var(--radius-lg)',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            <Image
              src="/images/landing.png"
              alt="Personalize Your Child's Journey"
              fill
              className="object-contain"
              style={{
                borderRadius: 'var(--radius-lg)',
              }}
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-2xl font-bold mb-2 text-center animate-slide-in" style={{ color: 'var(--color-text-primary)' }}>
            Help your child grow into a confident, kind Muslim.
          </h1>
          </div>
        </div>
        
        {/* Trust Badge */}
        <div className="mt-3 text-center animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
            ✨ Trusted by 952+ parents worldwide
          </p>
        </div>
        
        {/* Publications Carousel */}
        <div className="w-full max-w-2xl mx-auto mt-6">
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
