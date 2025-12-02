'use client';

import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';
import emailAnimation from '../../../public/Email.json';

export default function TransparencyPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/books-picked');
  };

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={17} totalSteps={15} />
      
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
              Full Transparency, Always
            </h1>
            
            {/* Main Content */}
            <div className="flex flex-col gap-6">
              {/* Main Text */}
              <p className="text-base animate-slide-in text-center leading-relaxed" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                We&apos;ll email you 2 days before your 99¢ month ends — for both the books and Treehouse — so you can decide if you want to continue.
              </p>

              {/* Email Animation */}
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
                <div style={{ width: '500px', height: '500px', maxWidth: '100%' }}>
                  <Lottie 
                    animationData={emailAnimation} 
                    loop={true}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>

              {/* Subtext */}
              <p className="text-base animate-slide-in text-center font-medium" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                No surprises, no pressure.
              </p>
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

