'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import CTAButton from './CTAButton';
import AnimatedText from './AnimatedText';
import { useOnboardingContext } from '../contexts/OnboardingContext';

interface AnalyzingStepLayoutProps {
  currentStep: number;
  totalSteps: number;
  loadingDuration?: number; // Duration in milliseconds
  headline?: string; // Optional headline
  content: ReactNode | (() => ReactNode); // The content to show after loading (insight card, etc.)
  footerText?: string; // Optional text below content
  onAnalyze?: () => void | Promise<void>; // Optional async function to run during analysis
  onContinue: () => void;
  nextRoute: string;
  continueButtonText?: string;
}

const analyzingMessages = [
  'Analyzing your child\'s age and developmental stage...',
  'Reviewing the challenges you\'re facing...',
  'Personalizing insights based on your values...',
];

export default function AnalyzingStepLayout({
  currentStep,
  totalSteps,
  loadingDuration = 3000,
  headline,
  content,
  footerText,
  onAnalyze,
  onContinue,
  nextRoute,
  continueButtonText = 'Continue',
}: AnalyzingStepLayoutProps) {
  const router = useRouter();
  const { setCurrentStep, setTotalSteps } = useOnboardingContext();
  const [loading, setLoading] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Update context when component mounts or step changes
  useEffect(() => {
    setCurrentStep(currentStep);
    setTotalSteps(totalSteps);
  }, [currentStep, totalSteps, setCurrentStep, setTotalSteps]);

  // Cycle through analyzing messages
  useEffect(() => {
    if (!loading) return;

    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % analyzingMessages.length);
    }, loadingDuration / analyzingMessages.length);

    return () => clearInterval(messageInterval);
  }, [loading, loadingDuration]);

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
    // Update step before navigation to trigger animation
    setCurrentStep(currentStep + 1);
    router.push(nextRoute);
  };

  // Loading state
  if (loading) {
    return (
      <>
        <div 
          className="min-h-screen flex flex-col items-center justify-center" 
          style={{ 
            background: 'var(--color-bg)',
            paddingLeft: 'var(--spacing-md)',
            paddingRight: 'var(--spacing-md)',
            paddingTop: 'calc(var(--spacing-sm) + 52px)',
            paddingBottom: 'calc(var(--spacing-sm) + 80px)',
          }}
        >
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
            <div 
              className="w-16 h-16 border-4 rounded-full animate-spin"
              style={{ 
                borderColor: 'var(--color-secondary-light)',
                borderTopColor: 'var(--color-secondary)',
                marginBottom: 'var(--spacing-xl)',
              }}
            ></div>
            <div className="relative h-8 w-full flex items-center justify-center">
              {analyzingMessages.map((message, index) => (
                <h2
                  key={index}
                  className="text-xl font-semibold absolute transition-opacity duration-500 text-center w-full"
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    opacity: currentMessageIndex === index ? 1 : 0,
                  }}
                >
                  {message}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Results state
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
        <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col">
          <div 
            className="w-full animate-fade-in"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--spacing-md)',
            }}
          >
            {/* Headline - Top of card */}
            {headline && (
              <AnimatedText
                as="h1"
                text={headline}
                className="text-2xl font-bold text-left"
                style={{ 
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--spacing-xl)',
                }}
              />
            )}

            {/* Content */}
            <div className="flex flex-col">
              {typeof content === 'function' ? content() : content}
            </div>
          </div>

          {/* Footer Text - Below the card, centered */}
          {footerText && (
            <div 
              className="text-center animate-fade-in mt-6"
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

