'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useOnboardingContext } from '../contexts/OnboardingContext';
import { getStepForRoute } from '../utils/onboardingSteps';

export default function TrialPage() {
  const { setCurrentStep } = useOnboardingContext();
  const pathname = usePathname();

  // Automatically determine current step from route
  const currentStep = getStepForRoute(pathname);

  // Update context when component mounts
  useEffect(() => {
    setCurrentStep(currentStep);
  }, [currentStep, setCurrentStep]);

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
