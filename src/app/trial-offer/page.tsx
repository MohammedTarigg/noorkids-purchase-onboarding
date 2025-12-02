'use client';

import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';

export default function TrialOfferPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/trial');
  };

  const bulletPoints = [
    {
      text: 'Try it for almost free',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-accent-dark)', strokeWidth: 2.5 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      text: 'Cancel anytime',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-accent-dark)', strokeWidth: 2.5 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      text: 'Keep your first book',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-accent-dark)', strokeWidth: 2.5 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={17} totalSteps={17} />
      
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
            <h1 className="text-2xl font-bold mb-8 animate-slide-in text-center" style={{ color: 'var(--color-text-primary)' }}>
              Get Your First Month for Just 99¢
            </h1>
            
            {/* Bullet Points */}
            <div className="space-y-4 mb-6">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 animate-slide-in" style={{ animationDelay: `${0.1 + index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}>
                  <div className="flex items-center justify-center shrink-0">
                    {point.icon}
                  </div>
                  <p className="text-base text-left" style={{ color: 'var(--color-text-secondary)' }}>
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Tiny Subtext */}
            <p className="text-xs text-center mb-4 animate-slide-in" style={{ color: 'var(--color-text-light)', animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              Renews at $89.99/year after trial.
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
            Start My 99¢ Trial
          </CTAButton>
          
          {/* Trust Badges */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
              952+ reviews
            </p>
            <div className="flex items-center justify-center gap-4 text-xs" style={{ color: 'var(--color-text-light)' }}>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure checkout</span>
              </div>
              <span>•</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

