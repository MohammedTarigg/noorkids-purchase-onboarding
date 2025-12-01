'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import AgeButton from '../components/AgeButton';
import CTAButton from '../components/CTAButton';

export default function AgePage() {
  const router = useRouter();
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  
  const ages = [6, 7, 8, 9, 10, 11, 12, 13, 14];
  
  const handleContinue = () => {
    if (selectedAge) {
      // Store age in sessionStorage for now (will be replaced with proper state management)
      sessionStorage.setItem('childAge', selectedAge.toString());
      router.push('/behavior');
    }
  };
  
  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={2} totalSteps={6} />
      
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3 animate-slide-in" style={{ color: 'var(--color-text-primary)' }}>
            How old is your child?
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg mb-2 animate-slide-in" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            We know a 6-year-old&apos;s needs differ from a 12-year-old&apos;s – let&apos;s get it right for your child.
          </p>
          
          {/* Age Selection Grid */}
          <div 
            className="grid grid-cols-3 sm:grid-cols-5 mt-8"
            style={{ gap: 'var(--spacing-xs)' }}
          >
            {ages.map((age, index) => (
              <div
                key={age}
                className="animate-slide-in"
                style={{ 
                  animationDelay: `${0.2 + index * 0.05}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <AgeButton
                  age={age}
                  selected={selectedAge === age}
                  onClick={() => setSelectedAge(age)}
                />
              </div>
            ))}
          </div>
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
          <CTAButton 
            onClick={handleContinue}
            disabled={!selectedAge}
          >
            Continue →
          </CTAButton>
        </div>
      </footer>
    </>
  );
}

