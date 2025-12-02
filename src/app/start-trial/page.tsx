'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';
import giftAnimation from '../../../public/Gift.json';

export default function StartTrialPage() {
  const router = useRouter();
  
  // Initialize state from sessionStorage if available
  const [addMuslimTreehouse, setAddMuslimTreehouse] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('addMuslimTreehouse');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });

  // Save state to sessionStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('addMuslimTreehouse', addMuslimTreehouse.toString());
    }
  }, [addMuslimTreehouse]);

  const handleContinue = () => {
    router.push('/transparency');
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddMuslimTreehouse(e.target.checked);
  };

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={16} totalSteps={15} />
      
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
        <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col">
          <div 
            className="w-full animate-fade-in flex-1 flex flex-col gap-6"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--spacing-md)',
            }}
          >
            {/* Headline */}
            <h1 className="text-2xl font-bold animate-slide-in text-center" style={{ color: 'var(--color-text-primary)' }}>
              Start for Just 99¢
            </h1>
            
            {/* Subtext */}
            <p className="text-base animate-slide-in text-center" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              Try your first month of the Character-Building Program for only 99¢.
            </p>

            {/* Gift Animation */}
            <div 
              className="animate-slide-in flex justify-center"
              style={{ 
                animationDelay: '0.15s', 
                opacity: 0, 
                animationFillMode: 'forwards',
                marginTop: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-md)',
              }}
            >
              <div style={{ width: '315px', height: '280px', maxWidth: '100%' }}>
                <Lottie 
                  animationData={giftAnimation} 
                  loop={false}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>

            {/* Muslim Treehouse Checkbox Section */}
            <div 
              className="animate-slide-in"
              style={{ 
                animationDelay: '0.2s', 
                opacity: 0, 
                animationFillMode: 'forwards',
                paddingTop: 'var(--spacing-lg)',
              }}
            >
              {/* Enhanced Checkbox Container */}
              <div 
                className="flex items-center gap-4 rounded-xl cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor: addMuslimTreehouse ? 'var(--color-bg-secondary)' : 'var(--color-bg-alt)',
                  padding: 'var(--spacing-lg)',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setAddMuslimTreehouse(!addMuslimTreehouse);
                }}
                onMouseEnter={(e) => {
                  if (!addMuslimTreehouse) {
                    e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!addMuslimTreehouse) {
                    e.currentTarget.style.backgroundColor = 'var(--color-bg-alt)';
                  }
                }}
              >
                {/* Custom Checkbox */}
                <div 
                  className="flex items-center justify-center shrink-0 pointer-events-none"
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: 'var(--radius-md)',
                    border: `2px solid ${addMuslimTreehouse ? 'var(--color-secondary)' : 'var(--color-bg-secondary)'}`,
                    backgroundColor: addMuslimTreehouse ? 'var(--color-secondary)' : 'transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {addMuslimTreehouse && (
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ 
                        transition: 'opacity 0.2s ease',
                        stroke: 'white'
                      }}
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </div>
                
                <input
                  type="checkbox"
                  id="muslim-treehouse"
                  checked={addMuslimTreehouse}
                  onChange={handleCheckboxChange}
                  className="sr-only pointer-events-none"
                  aria-label="Add a Free Month of Muslim Treehouse"
                />
                
                <div 
                  className="flex-1 pointer-events-none"
                >
                  <div className="font-semibold mb-1.5 text-base" style={{ color: 'var(--color-text-primary)' }}>
                    Add a Free Month of Muslim Treehouse
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    Weekly live Islamic sessions. $X/month after the free month, cancel anytime.
                  </div>
                </div>
              </div>
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
          <CTAButton onClick={handleContinue}>
            Continue
          </CTAButton>
        </div>
      </footer>
    </>
  );
}

