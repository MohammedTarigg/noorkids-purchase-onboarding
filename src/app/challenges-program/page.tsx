'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';

// Mapping of challenge IDs to display labels
const challengeLabels: Record<string, string> = {
  'disrespect': 'Disrespect / Not listening',
  'dishonesty': 'Lying or dishonesty',
  'discipline': 'Lack of discipline/routine',
  'screentime': 'Screen time or distractions',
  'confidence': 'Struggles with confidence',
  'other': 'Other'
};

export default function ChallengesProgramPage() {
  const router = useRouter();
  const [challengesList] = useState<string[]>(() => {
    // Retrieve challenges from sessionStorage using lazy initialization
    if (typeof window !== 'undefined') {
      const storedChallenges = sessionStorage.getItem('challenges');
      if (storedChallenges) {
        const challengeIds: string[] = JSON.parse(storedChallenges);
        // Map IDs to labels
        return challengeIds.map(id => challengeLabels[id] || id).filter(Boolean);
      }
    }
    return [];
  });

  const handleContinue = () => {
    router.push('/curriculum');
  };

  // Format challenges for display: "Disrespect / Lying or dishonesty"
  const formattedChallenges = challengesList.length > 0 
    ? challengesList.join(' / ')
    : 'Disrespect / Not listening'; // Fallback

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={9} totalSteps={15} />
      
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
              Designed to Gently Correct Behaviors Like: {formattedChallenges}
            </h1>
            
            {/* Subtext */}
            <p className="text-base mb-8 animate-slide-in text-center" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              Kids learn through stories — not lectures. Our stories plant the right habits naturally.
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

