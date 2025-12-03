'use client';

import { useState, useEffect, useRef } from 'react';
import AnalyzingStepLayout from '../components/AnalyzingStepLayout';
import InsightCard from '../components/InsightCard';
import { getInsightText, type InsightSections } from '../utils/personalization';

// Animation configuration
interface AnimationConfig {
  transitionDuration: number; // Duration of each card animation (ms)
  delayBetweenCards: number; // Delay between card appearances (ms)
  initialDelay: number; // Initial delay before first card (ms)
}

const DEFAULT_CONFIG: AnimationConfig = {
  transitionDuration: 400,
  delayBetweenCards: 1000, // 1.5 seconds
  initialDelay: 500,
};

// Mobile configuration (slightly faster for better UX)
const MOBILE_CONFIG: AnimationConfig = {
  transitionDuration: 350,
  delayBetweenCards: 1000, // 1.5 seconds
  initialDelay: 300,
};

export default function InsightsPage() {
  const [insight, setInsight] = useState<InsightSections | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMobileRef = useRef(false);

  // Check for prefers-reduced-motion and mobile
  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Set initial value via callback to avoid sync setState
    const updateReducedMotion = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    setTimeout(updateReducedMotion, 0);

    mediaQuery.addEventListener('change', handleChange);

    // Check if mobile
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 768;
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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

  // Sequential animation logic
  useEffect(() => {
    if (!insight) {
      return;
    }

    if (prefersReducedMotion) {
      // Show all cards immediately if reduced motion is preferred
      setTimeout(() => {
        setVisibleCards([true, true, true]);
      }, 0);
      return;
    }

    // Reset visibility when insight changes
    setTimeout(() => {
      setVisibleCards([false, false, false]);
      setIsPaused(false);
    }, 0);

    const config = isMobileRef.current ? MOBILE_CONFIG : DEFAULT_CONFIG;

    // Clear any existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    // Start animation sequence
    const animateCards = () => {
      if (isPaused) return;

      // Show first card after initial delay
      animationTimeoutRef.current = setTimeout(() => {
        if (!isPaused) {
          setVisibleCards([true, false, false]);
        }

        // Show second card
        animationTimeoutRef.current = setTimeout(() => {
          if (!isPaused) {
            setVisibleCards([true, true, false]);
          }

          // Show third card
          animationTimeoutRef.current = setTimeout(() => {
            if (!isPaused) {
              setVisibleCards([true, true, true]);
            }
          }, config.delayBetweenCards);
        }, config.delayBetweenCards);
      }, config.initialDelay);
    };

    // Delay animation start slightly to avoid sync setState
    setTimeout(animateCards, 0);

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [insight, prefersReducedMotion, isPaused]);

  const getInsightContent = () => {
    if (!insight) return null;

    const config = isMobileRef.current ? MOBILE_CONFIG : DEFAULT_CONFIG;
    const cardIcons = [
      <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)', strokeWidth: 2 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>,
      <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)', strokeWidth: 2 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)', strokeWidth: 2 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>,
    ];

    const cardTexts = [insight.section2, insight.section3, insight.section4];

    return (
      <div className="w-full flex flex-col gap-4">
        {/* Sections 2-4: Insight Cards with Sequential Animation */}
        {cardIcons.map((icon, index) => (
          <InsightCard
            key={index}
            icon={icon}
            text={cardTexts[index]}
            isVisible={visibleCards[index]}
            animationDelay={0}
            transitionDuration={config.transitionDuration}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    );
  };

  return (
    <AnalyzingStepLayout
      loadingDuration={3000}
      headline={insight?.section1}
      content={getInsightContent}
      onAnalyze={handleAnalyze}
      onContinue={handleContinue}
      nextRoute="/personalized-program"
      continueButtonText="See the Solution"
    />
  );
}
