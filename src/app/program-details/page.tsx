'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';

export default function ProgramDetailsPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/trial-offer');
  };

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={20} totalSteps={19} />
      
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
            className="w-full animate-fade-in flex-1 flex flex-col justify-center"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--spacing-md)',
            }}
          >
            {/* What is it? Section */}
            <div 
              className="animate-slide-in"
              style={{ 
                animationDelay: '0.1s', 
                opacity: 0, 
                animationFillMode: 'forwards',
                backgroundColor: 'var(--color-bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-md)',
              }}
            >
              <div className="flex gap-4 items-start">
                {/* Book Image */}
                <div 
                  className="relative rounded-xl overflow-hidden shrink-0"
                  style={{
                    width: '100px',
                    height: '130px',
                  }}
                >
                  <Image
                    src="/book.webp"
                    alt="Noor Kids Character-Building Program Book"
                    width={100}
                    height={130}
                    className="object-cover rounded-xl"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    Nurtures a love for Islam while helping children develop character, confidence, and resilience.
                  </p>
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


