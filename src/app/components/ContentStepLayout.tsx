'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import OnboardingHeader from './OnboardingHeader';
import CTAButton from './CTAButton';

interface BulletPoint {
  text: string;
  icon: ReactNode;
}

interface ImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  showBorder?: boolean;
}

interface ContentStepLayoutProps {
  currentStep: number;
  totalSteps: number;
  headline: string;
  subtext?: string;
  bulletPoints?: BulletPoint[];
  image?: ImageProps;
  onContinue?: () => void;
  nextRoute: string;
  continueButtonText?: string;
}

export default function ContentStepLayout({
  currentStep,
  totalSteps,
  headline,
  subtext,
  bulletPoints,
  image,
  onContinue,
  nextRoute,
  continueButtonText = 'Continue',
}: ContentStepLayoutProps) {
  const router = useRouter();

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    }
    router.push(nextRoute);
  };

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={currentStep} totalSteps={totalSteps} />
      
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
            <h1 
              className="text-2xl font-bold animate-slide-in text-center" 
              style={{ 
                color: 'var(--color-text-primary)',
                marginBottom: subtext ? 'var(--spacing-md)' : bulletPoints ? 'var(--spacing-xl)' : image ? 'var(--spacing-xl)' : '0',
              }}
            >
              {headline}
            </h1>
            
            {/* Subtext */}
            {subtext && (
              <p 
                className="text-base animate-slide-in text-center" 
                style={{ 
                  color: 'var(--color-text-secondary)', 
                  animationDelay: '0.1s', 
                  opacity: 0, 
                  animationFillMode: 'forwards',
                  marginBottom: bulletPoints ? 'var(--spacing-xl)' : image ? 'var(--spacing-xl)' : 'var(--spacing-lg)',
                }}
              >
                {subtext}
              </p>
            )}
            
            {/* Bullet Points */}
            {bulletPoints && bulletPoints.length > 0 && (
              <div 
                className="space-y-6" 
                style={{ marginBottom: image ? 'var(--spacing-xl)' : 'var(--spacing-lg)' }}
              >
                {bulletPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="flex gap-3 animate-slide-in" 
                    style={{ 
                      animationDelay: `${0.1 + index * 0.1}s`, 
                      opacity: 0, 
                      animationFillMode: 'forwards' 
                    }}
                  >
                    <div className="flex items-center justify-center shrink-0">
                      {point.icon}
                    </div>
                    <div className="flex-1 flex items-center">
                      <p className="text-base text-left" style={{ color: 'var(--color-text-secondary)' }}>
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Image */}
            {image && (
              <div 
                className="relative overflow-hidden animate-fade-in mx-auto"
                style={{
                  height: '300px',
                  width: 'fit-content',
                  maxWidth: '100%',
                  borderRadius: 'var(--radius-xl)',
                  ...(image.showBorder !== false && { border: '1px solid var(--color-secondary)' }),
                  animationDelay: bulletPoints && bulletPoints.length > 0 
                    ? `${0.1 + bulletPoints.length * 0.1}s` 
                    : subtext 
                    ? '0.2s' 
                    : '0.1s',
                  opacity: 0,
                  animationFillMode: 'forwards',
                  marginBottom: 'var(--spacing-lg)',
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={300}
                  style={{
                    width: 'auto',
                    height: '300px',
                    borderRadius: 'var(--radius-lg)',
                  }}
                  className="object-contain"
                />
              </div>
            )}
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
            {continueButtonText}
          </CTAButton>
        </div>
      </footer>
    </>
  );
}


