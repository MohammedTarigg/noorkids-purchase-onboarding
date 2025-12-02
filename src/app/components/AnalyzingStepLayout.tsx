'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingHeader from './OnboardingHeader';
import CTAButton from './CTAButton';

interface AnalyzingStepLayoutProps {
  currentStep: number;
  totalSteps: number;
  loadingText?: string;
  loadingDuration?: number; // Duration in milliseconds
  headline: string;
  content: ReactNode | (() => ReactNode); // The content to show after loading (insight card, etc.)
  footerText?: string; // Optional text below content
  onAnalyze?: () => void | Promise<void>; // Optional async function to run during analysis
  onContinue: () => void;
  nextRoute: string;
  continueButtonText?: string;
}

export default function AnalyzingStepLayout({
  currentStep,
  totalSteps,
  loadingText = 'Analyzing your profile...',
  loadingDuration = 1500,
  headline,
  content,
  footerText,
  onAnalyze,
  onContinue,
  nextRoute,
  continueButtonText = 'Continue',
}: AnalyzingStepLayoutProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Run optional analysis function
    const runAnalysis = async () => {
      if (onAnalyze) {
        await onAnalyze();
      }
    };

    // Simulate analyzing data
    const timer = setTimeout(async () => {
      await runAnalysis();
      setLoading(false);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, [loadingDuration, onAnalyze]);

  const handleContinue = () => {
    onContinue();
    router.push(nextRoute);
  };

  // Loading state
  if (loading) {
    return (
      <>
        <OnboardingHeader currentStep={currentStep} totalSteps={totalSteps} />
        <div 
          className="min-h-screen flex flex-col items-center justify-center" 
          style={{ 
            background: 'var(--color-bg)',
            paddingLeft: 'var(--spacing-md)',
            paddingRight: 'var(--spacing-md)',
            paddingTop: 'calc(var(--spacing-sm) + 52px)',
          }}
        >
          <div 
            className="w-16 h-16 border-4 rounded-full animate-spin mb-4"
            style={{ 
              borderColor: 'var(--color-secondary-light)',
              borderTopColor: 'var(--color-secondary)'
            }}
          ></div>
          <h2 className="text-xl font-semibold animate-pulse" style={{ color: 'var(--color-text-secondary)' }}>
            {loadingText}
          </h2>
        </div>
      </>
    );
  }

  // Results state
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
        <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col justify-between py-8">
          {/* Header - Top */}
          <div 
            className="text-center animate-fade-in"
            style={{
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            <h1 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              {headline}
            </h1>
          </div>

          {/* Content - Centered */}
          <div className="flex-1 flex items-center justify-center my-8">
            {typeof content === 'function' ? content() : content}
          </div>

          {/* Footer Text - Bottom */}
          {footerText && (
            <div 
              className="text-center animate-fade-in"
              style={{
                animationDelay: '0.6s',
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            >
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                {footerText}
              </p>
            </div>
          )}
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

