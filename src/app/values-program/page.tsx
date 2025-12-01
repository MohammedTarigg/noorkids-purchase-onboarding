'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';

// Mapping of value IDs to display labels
const valueLabels: Record<string, string> = {
  'honesty': 'Honesty',
  'kindness': 'Kindness',
  'discipline': 'Discipline',
  'respect': 'Respect',
  'confidence': 'Confidence',
  'faith': 'Faith / Islamic knowledge'
};

export default function ValuesProgramPage() {
  const router = useRouter();
  const [valuesList] = useState<string[]>(() => {
    // Retrieve values from sessionStorage using lazy initialization
    if (typeof window !== 'undefined') {
      const storedValues = sessionStorage.getItem('values');
      if (storedValues) {
        const valueIds: string[] = JSON.parse(storedValues);
        // Map IDs to labels
        return valueIds.map(id => valueLabels[id] || id).filter(Boolean);
      }
    }
    return [];
  });

  const handleContinue = () => {
    router.push('/challenges-program');
  };

  // Format values for display: "Honesty / Respect / Discipline"
  const formattedValues = valuesList.length > 0 
    ? valuesList.join(' / ')
    : 'Honesty / Respect / Kindness'; // Fallback

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={8} totalSteps={15} />
      
      <div 
        className="min-h-screen flex flex-col" 
        style={{ 
          background: 'var(--color-bg)',
          paddingLeft: 'var(--spacing-md)',
          paddingRight: 'var(--spacing-md)',
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
              Helps Build Values Like: {formattedValues}
            </h1>
            
            {/* Subtext */}
            <p className="text-base mb-8 animate-slide-in text-center" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              Each month&apos;s book focuses on one character trait through stories children remember.
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

