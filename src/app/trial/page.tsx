'use client';

import OnboardingHeader from '../components/OnboardingHeader';

export default function TrialPage() {
  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={18} totalSteps={15} />
      
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
