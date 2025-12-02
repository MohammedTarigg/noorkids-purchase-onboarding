'use client';

import { useState } from 'react';
import AnalyzingStepLayout from '../components/AnalyzingStepLayout';
import InsightCard from '../components/InsightCard';
import { getInsightText, type InsightSections } from '../utils/personalization';

export default function InsightsPage() {
  const [insight, setInsight] = useState<InsightSections | null>(null);

  const handleAnalyze = () => {
    const age = parseInt(sessionStorage.getItem('childAge') || '8');
    const challenges = JSON.parse(sessionStorage.getItem('challenges') || '[]');
    const values = JSON.parse(sessionStorage.getItem('values') || '[]');
    const frequency = sessionStorage.getItem('challengeFrequency') || undefined;
    
    setInsight(getInsightText(age, challenges, values, frequency));
  };

  const handleContinue = () => {
    // Any additional logic before navigation
  };

  const getInsightContent = () => {
    if (!insight) return null;

    return (
      <div className="w-full flex flex-col gap-6">
        {/* Section 1: Plain text, no animation */}
        <p
          className="text-lg leading-relaxed"
          style={{ 
            color: 'var(--color-text-primary)',
            fontWeight: 500,
          }}
        >
          {insight.section1}
        </p>

        {/* Sections 2-4: Insight Cards */}
        <div className="w-full flex flex-col gap-4">
          <InsightCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)', strokeWidth: 2 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            text={insight.section2}
          />
          
          <InsightCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)', strokeWidth: 2 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            text={insight.section3}
          />
          
          <InsightCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)', strokeWidth: 2 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            text={insight.section4}
          />
        </div>
      </div>
    );
  };

  return (
    <AnalyzingStepLayout
      currentStep={8}
      totalSteps={19}
      loadingDuration={3000}
      content={getInsightContent}
      onAnalyze={handleAnalyze}
      onContinue={handleContinue}
      nextRoute="/personalized-program"
      continueButtonText="See the Solution"
    />
  );
}
