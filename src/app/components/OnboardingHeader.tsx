'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface OnboardingHeaderProps {
  currentStep: number;
  totalSteps: number;
}

export default function OnboardingHeader({ 
  currentStep, 
  totalSteps
}: OnboardingHeaderProps) {
  const router = useRouter();
  const percentage = (currentStep / totalSteps) * 100;
  const canGoBack = currentStep > 1;

  const handleBack = () => {
    router.back();
  };

  return (
    <header 
      className="w-full fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'var(--color-bg-white)',
        padding: 'var(--spacing-sm) var(--spacing-md)',
        minHeight: '52px', // Fixed height to prevent layout shift
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="max-w-2xl mx-auto flex items-center w-full" style={{ gap: canGoBack ? '12px' : '0' }}>
        {/* Back Button - Conditionally rendered with animation */}
        {canGoBack && (
          <div
            style={{
              width: '32px',
              height: '32px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fadeInSlide 0.3s ease-out',
            }}
          >
            <button
              onClick={handleBack}
              className="flex items-center justify-center"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-bg-alt)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Go back"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        )}
        
        {/* Progress Bar - Animates width when back button appears/disappears */}
        <div 
          className="rounded-full overflow-hidden" 
          style={{ 
            height: '8px',
            backgroundColor: 'var(--color-bg-secondary)',
            flex: '1 1 auto',
            transition: 'all 0.3s ease-out',
            minWidth: 0,
          }}
        >
          <div 
            className="h-full transition-all duration-500 ease-out"
            style={{ 
              width: `${percentage}%`,
              backgroundColor: 'var(--color-secondary-light)',
            }}
          />
        </div>
      </div>
    </header>
  );
}

