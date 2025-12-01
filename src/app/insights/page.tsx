'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';
import { getInsightText } from '../utils/personalization';

export default function InsightsPage() {
  const router = useRouter();
  const [insight, setInsight] = useState<{ intro: string; challenge: string; value: string; conclusion: string } | null>(null);
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
    router.push('/program');
  };

  if (loading) {
    return (
      <>
        <OnboardingHeader currentStep={5} totalSteps={6} />
        <div 
          className="min-h-screen flex flex-col items-center justify-center" 
          style={{ 
            background: 'var(--color-bg)',
            paddingTop: 'calc(var(--spacing-sm) + 52px)',
          }}
        >
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 animate-pulse">Analyzing your profile...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={5} totalSteps={6} />
      
      <div 
        className="min-h-screen flex flex-col" 
        style={{ 
          background: 'var(--color-bg)',
          padding: 'var(--spacing-sm)',
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
          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-purple-100 text-purple-700">
              Analysis Complete
            </span>
            <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
              Your Parenting Insights
            </h1>
          </div>

          {/* Insight Content */}
          {insight && (
            <div className="space-y-6 mb-8 text-lg leading-relaxed text-gray-700">
              <p className="animate-slide-in" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                {insight.intro}
              </p>
              
              <div className="p-6 rounded-2xl bg-orange-50 border-l-4 border-orange-400 animate-slide-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <p className="font-medium text-gray-800">
                  {insight.challenge}
                </p>
              </div>

              <p className="animate-slide-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                {insight.value}
              </p>

              <p className="font-semibold text-purple-800 animate-slide-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                {insight.conclusion}
              </p>
            </div>
          )}

          {/* Transition to Solution */}
          <div className="text-center mt-6 animate-slide-in" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            <p className="text-sm text-gray-500">
              So how can you effectively nurture these values in a fun, age-appropriate way?
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
            See the Solution
          </CTAButton>
        </div>
      </footer>
    </>
  );
}
