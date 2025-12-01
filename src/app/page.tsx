'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import OnboardingHeader from './components/OnboardingHeader';
import CTAButton from './components/CTAButton';

export default function WelcomePage() {
  const router = useRouter();
  
  const handleContinue = () => {
    router.push('/age');
  };
  
  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={1} totalSteps={15} />
      
      <div 
        className="min-h-screen flex flex-col" 
        style={{ 
          background: 'var(--color-bg)',
          padding: 'var(--spacing-sm)',
          paddingTop: 'calc(var(--spacing-sm) + 52px)', // Add space for fixed header
          paddingBottom: 'calc(var(--spacing-sm) + 80px)', // Add space for sticky footer
        }}
      >
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
              height: '140px', 
              borderRadius: 'var(--radius-lg)',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            <Image
              src="/welcome.webp"
              alt="Personalize Your Child's Journey"
              fill
              className="object-cover"
              style={{
                borderRadius: 'var(--radius-lg)',
              }}
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-2xl font-bold mb-2 text-center animate-slide-in" style={{ color: 'var(--color-text-primary)' }}>
            Let&apos;s Personalize Your Child&apos;s Journey
          </h1>
          
          {/* Subheadline */}
          <p className="text-sm md:text-base mb-4 text-center animate-slide-in" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            Answer a few quick questions to customize a program for <em>your</em> child
          </p>
          </div>
        </div>
        
        {/* Trust Badge */}
        <div className="mt-3 text-center animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
            ✨ Trusted by 952+ parents worldwide
          </p>
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
            Get Started
          </CTAButton>
        </div>
      </footer>
    </>
  );
}
