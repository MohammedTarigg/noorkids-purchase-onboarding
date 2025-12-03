'use client';

import { ReactNode, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CTAButton from './CTAButton';
import AnimatedText, { calculateLastWordStartDelay } from './AnimatedText';
import { useOnboardingContext } from '../contexts/OnboardingContext';

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
  const { setCurrentStep, setTotalSteps } = useOnboardingContext();

  // Update context when component mounts or step changes
  useEffect(() => {
    setCurrentStep(currentStep);
    setTotalSteps(totalSteps);
  }, [currentStep, totalSteps, setCurrentStep, setTotalSteps]);

  // Calculate sequential animation delays
  // Start next element when previous element's last word starts animating, with a small delay between sections
  const sectionDelay = 0.2; // Small delay between sections for smoother transition
  
  const headlineLastWordStart = useMemo(() => 
    calculateLastWordStartDelay(headline, 0.1), 
    [headline]
  );
  
  const subtextLastWordStart = useMemo(() => 
    subtext ? calculateLastWordStartDelay(subtext, 0.1) : 0, 
    [subtext]
  );
  
  const subtextDelay = headlineLastWordStart + sectionDelay;
  const bulletPointsDelay = subtextDelay + subtextLastWordStart + sectionDelay;

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    }
    // Update step before navigation to trigger animation
    setCurrentStep(currentStep + 1);
    router.push(nextRoute);
  };

  return (
    <>
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
            <AnimatedText
              as="h1"
              text={headline}
              className="text-2xl font-bold text-center"
              style={{ 
                color: 'var(--color-text-primary)',
                marginBottom: subtext ? 'var(--spacing-md)' : bulletPoints ? 'var(--spacing-xl)' : image ? 'var(--spacing-xl)' : '0',
              }}
            />
            
            {/* Subtext */}
            {subtext && (
              <AnimatedText
                as="p"
                text={subtext}
                initialDelay={subtextDelay}
                className="text-base text-center"
                style={{ 
                  color: 'var(--color-text-secondary)',
                  marginBottom: bulletPoints ? 'var(--spacing-xl)' : image ? 'var(--spacing-xl)' : 'var(--spacing-lg)',
                }}
              />
            )}
            
            {/* Bullet Points */}
            {bulletPoints && bulletPoints.length > 0 && (
              <div 
                className="space-y-6" 
                style={{ marginBottom: image ? 'var(--spacing-xl)' : 'var(--spacing-lg)' }}
              >
                {bulletPoints.map((point, index) => {
                  const containerDelay = bulletPointsDelay + index * 0.1;
                  return (
                    <div 
                      key={index} 
                      className="flex gap-3 animate-slide-in" 
                      style={{ 
                        animationDelay: `${containerDelay}s`, 
                        opacity: 0, 
                        animationFillMode: 'forwards' 
                      }}
                    >
                      <div className="flex items-center justify-center shrink-0">
                        {point.icon}
                      </div>
                      <div className="flex-1 flex items-center">
                        <AnimatedText
                          as="p"
                          text={point.text}
                          initialDelay={containerDelay + 0.3}
                          className="text-base text-left"
                          style={{ color: 'var(--color-text-secondary)' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            
            {/* Image */}
            {image && (
              <div 
                className="relative overflow-visible animate-fade-in mx-auto"
                style={{
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
                <div
                  className="relative overflow-hidden"
                  style={{
                    height: '300px',
                    width: 'fit-content',
                    maxWidth: '100%',
                    borderRadius: 'var(--radius-xl)',
                    ...(image.showBorder !== false && { 
                      border: '1px solid var(--color-secondary-dark)',
                      boxShadow: '4px 4px 0 0 var(--color-secondary-dark), 0 4px 0 0 var(--color-secondary-dark)',
                    }),
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


