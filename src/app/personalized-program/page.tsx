'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';

export default function PersonalizedProgramPage() {
  const router = useRouter();
  const [childAge] = useState<number | null>(() => {
    // Retrieve age from sessionStorage using lazy initialization
    if (typeof window !== 'undefined') {
      const age = sessionStorage.getItem('childAge');
      return age ? parseInt(age) : null;
    }
    return null;
  });
  const [childName] = useState<string | null>(() => {
    // Retrieve name from sessionStorage using lazy initialization
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('childName');
    }
    return null;
  });

  const handleContinue = () => {
    router.push('/fun');
  };

  const displayName = childName || 'your child';
  const displayAge = childAge || 8;

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={6} totalSteps={15} />
      
      <div 
        className="min-h-screen flex flex-col" 
        style={{ 
          background: 'var(--color-bg)',
          padding: 'var(--spacing-sm)',
          paddingTop: 'calc(var(--spacing-sm) + 52px)',
          paddingBottom: 'calc(var(--spacing-sm) + 80px)',
        }}
      >
        <div className="w-full max-w-2xl mx-auto flex-1 flex items-center justify-center">
          <div 
            className="w-full animate-fade-in"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--spacing-md)',
            }}
          >
            {/* Headline */}
            <h1 className="text-2xl font-bold mb-4 animate-slide-in text-center" style={{ color: 'var(--color-text-primary)' }}>
              Built For {displayAge}-Year-Olds Like {displayName}
            </h1>
            
            {/* Subtext */}
            <p className="text-base mb-8 animate-slide-in text-center" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              Based on what you shared, here&apos;s a program designed specifically for your child&apos;s age and needs.
            </p>
          </div>
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
          <CTAButton onClick={handleContinue}>
            Continue
          </CTAButton>
        </div>
      </footer>
    </>
  );
}

