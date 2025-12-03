'use client';

import { useEffect } from 'react';
import { useOnboardingContext } from '../contexts/OnboardingContext';

export default function TrialPage() {
  const { setCurrentStep, setTotalSteps } = useOnboardingContext();

  // Update context when component mounts
  useEffect(() => {
    setCurrentStep(18);
    setTotalSteps(19);
  }, [setCurrentStep, setTotalSteps]);

  return (
    <>
      <div 
        className="min-h-screen flex items-center justify-center" 
        style={{ 
          background: 'var(--color-bg)', 
          paddingLeft: 'var(--spacing-md)', 
          paddingRight: 'var(--spacing-md)', 
          paddingTop: 'calc(var(--spacing-sm) + 52px)',
          paddingBottom: 'calc(var(--spacing-sm) + 80px)' 
        }}
      >
        <h1 className="text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Checkout Page
        </h1>
      </div>
    </>
  );
}
