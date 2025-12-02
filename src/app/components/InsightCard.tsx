'use client';

import { ReactNode, useEffect, useState } from 'react';

interface InsightCardProps {
  icon: ReactNode;
  text: string;
  isVisible: boolean;
  animationDelay?: number;
  transitionDuration?: number;
  prefersReducedMotion?: boolean;
}

export default function InsightCard({ 
  icon, 
  text, 
  isVisible,
  animationDelay = 0,
  transitionDuration = 400,
  prefersReducedMotion = false,
}: InsightCardProps) {
  const [shouldAnimate, setShouldAnimate] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setShouldAnimate(true);
      return;
    }

    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, animationDelay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, animationDelay, prefersReducedMotion]);

  return (
    <div 
      className="flex items-center gap-3 rounded-xl"
      style={{ 
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-bg-alt)',
        minHeight: '80px',
        padding: 'var(--spacing-md)',
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`,
      }}
    >
      <div 
        className="flex items-center justify-center shrink-0 rounded-lg"
        style={{
          width: '48px',
          height: '48px',
          backgroundColor: 'var(--color-bg-alt)',
        }}
      >
        {icon}
      </div>
      <div className="flex-1" style={{ paddingLeft: 'var(--spacing-xs)' }}>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
          {text}
        </p>
      </div>
    </div>
  );
}

