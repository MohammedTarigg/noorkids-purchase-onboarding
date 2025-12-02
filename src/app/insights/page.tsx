'use client';

import { useState } from 'react';
import AnalyzingStepLayout from '../components/AnalyzingStepLayout';
import { getInsightText } from '../utils/personalization';

export default function InsightsPage() {
  const [insight, setInsight] = useState<{ sentence1: string; sentence2: string } | null>(null);

  const handleAnalyze = () => {
    const age = parseInt(sessionStorage.getItem('childAge') || '8');
    const challenges = JSON.parse(sessionStorage.getItem('challenges') || '[]');
    const values = JSON.parse(sessionStorage.getItem('values') || '[]');
    
    setInsight(getInsightText(age, challenges, values));
  };

  const handleContinue = () => {
    // Any additional logic before navigation
  };

  const getInsightContent = () => {
    if (!insight) return null;
    
    return (
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
    );
  };

  return (
    <AnalyzingStepLayout
      currentStep={5}
      totalSteps={15}
      loadingDuration={3000}
      headline="Your Parenting Insights"
      content={getInsightContent}
      footerText="Let's create a personalized program just for your family."
      onAnalyze={handleAnalyze}
      onContinue={handleContinue}
      nextRoute="/personalized-program"
      continueButtonText="See the Solution"
    />
  );
}
