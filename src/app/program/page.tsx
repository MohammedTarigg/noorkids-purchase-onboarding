'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';

export default function ProgramPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/trial-offer');
  };

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={16} totalSteps={17} />
      
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
            className="w-full animate-fade-in flex-1 flex flex-col justify-between gap-4"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--spacing-md)',
            }}
          >
            {/* Hero Section */}
            <div className="animate-slide-in">
              {/* Age Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-sm font-bold" style={{ color: 'var(--color-secondary)' }}>
                  Ages 4-9
                </span>
              </div>
              
              <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                What is the Character-Building Program?
              </h1>
              <p className="text-base" style={{ color: 'var(--color-text-secondary)' }}>
                Monthly stories, activities, and lessons that teach Islamic values.
              </p>
            </div>

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



            {/* Benefits */}
            <div 
              className="animate-slide-in"
              style={{ 
                animationDelay: '0.2s', 
                opacity: 0, 
                animationFillMode: 'forwards',
              }}
            >
              <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary-dark)', strokeWidth: 2.5 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-0.5" style={{ color: 'var(--color-text-primary)' }}>Fun & Effective</h3>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Engaging stories kids enjoy reading.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary-dark)', strokeWidth: 2.5 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-0.5" style={{ color: 'var(--color-text-primary)' }}>Harvard-Designed</h3>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Evidence-based curriculum framework.</p>
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
