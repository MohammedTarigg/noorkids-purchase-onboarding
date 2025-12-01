'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import AgeButton from '../components/AgeButton';
import CTAButton from '../components/CTAButton';

type AgeRange = {
  label: string;
  minAge: number;
  maxAge: number;
};

export default function AgePage() {
  const router = useRouter();
  const [selectedAgeRange, setSelectedAgeRange] = useState<AgeRange | null>(null);
  
  const ageRanges: AgeRange[] = [
    { label: '6-7 years', minAge: 6, maxAge: 7 },
    { label: '8-9 years', minAge: 8, maxAge: 9 },
    { label: '10-11 years', minAge: 10, maxAge: 11 },
    { label: '12-13 years', minAge: 12, maxAge: 13 },
    { label: '14+ years', minAge: 14, maxAge: 14 },
  ];
  
  const handleContinue = () => {
    if (selectedAgeRange) {
      // Store the middle age of the range (or minAge for 14+)
      const ageToStore = selectedAgeRange.maxAge === selectedAgeRange.minAge 
        ? selectedAgeRange.minAge 
        : Math.floor((selectedAgeRange.minAge + selectedAgeRange.maxAge) / 2);
      sessionStorage.setItem('childAge', ageToStore.toString());
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
        <div className="w-full max-w-2xl mx-auto flex-1 flex items-start">
          <div 
            className="w-full animate-fade-in"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--spacing-md)',
            }}
          >
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 animate-slide-in text-left" style={{ color: 'var(--color-text-primary)' }}>
            How old is your child?
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg mb-2 animate-slide-in text-left" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            We know a 6-year-old&apos;s needs differ from a 12-year-old&apos;s – let&apos;s get it right for your child.
          </p>
          
          {/* Age Selection - One per row */}
          <div 
            className="mt-8"
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
            }}
          >
            {ageRanges.map((range, index) => (
              <div
                key={range.label}
                className="animate-slide-in"
                style={{ 
                  animationDelay: `${0.2 + index * 0.05}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <AgeButton
                  label={range.label}
                  selected={selectedAgeRange?.label === range.label}
                  onClick={() => setSelectedAgeRange(range)}
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
            disabled={!selectedAgeRange}
          >
            Continue →
          </CTAButton>
        </div>
      </footer>
    </>
  );
}

