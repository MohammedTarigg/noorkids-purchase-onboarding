'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';
import { getInsightText } from '../utils/personalization';

export default function InsightsPage() {
  const router = useRouter();
  const [insight, setInsight] = useState<{ sentence1: string; sentence2: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate analyzing data
    const timer = setTimeout(() => {
      const age = parseInt(sessionStorage.getItem('childAge') || '8');
      const challenges = JSON.parse(sessionStorage.getItem('challenges') || '[]');
      const values = JSON.parse(sessionStorage.getItem('values') || '[]');
      
      setInsight(getInsightText(age, challenges, values));
      setLoading(false);
    }, 1500); // Fake delay for "calculating" feel

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    router.push('/personalized-program');
  };

  if (loading) {
    return (
      <>
        <OnboardingHeader currentStep={5} totalSteps={15} />
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
          <h2 className="text-xl font-semibold text-gray-700 animate-pulse">Analyzing your profile...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={5} totalSteps={15} />
      
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
              Your Parenting Insights
            </h1>
          </div>

          {/* Insight Content Card - Centered */}
          <div className="flex-1 flex items-center justify-center my-8">
            {insight && (
              <div 
                className="w-full animate-scale-in"
                style={{
                  backgroundColor: '#ECF5FB',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--spacing-xl)',
                  boxShadow: 'var(--shadow-md)',
                  animationDelay: '0.2s',
                  opacity: 0,
                  animationFillMode: 'forwards',
                }}
              >
                {/* Insight Text */}
                <div className="text-lg leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                  <p className="mb-4 animate-slide-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                    {insight.sentence1}
                  </p>
                  <p className="animate-slide-in font-medium" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                    {insight.sentence2}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Additional Context Section - Bottom */}
          <div 
            className="text-center animate-fade-in"
            style={{
              animationDelay: '0.6s',
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Let&apos;s create a personalized program just for your family.
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
            See the Solution
          </CTAButton>
        </div>
      </footer>
    </>
  );
}
