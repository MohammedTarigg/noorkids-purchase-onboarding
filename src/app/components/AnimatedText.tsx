'use client';

import { useMemo, useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  delayPerWord?: number; // Delay between each word in seconds
  initialDelay?: number; // Initial delay before first word in seconds
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  style?: React.CSSProperties;
}

// Helper function to calculate when the last word starts animating
export function calculateLastWordStartDelay(text: string, delayPerWord: number = 0.1): number {
  if (!text) return 0;
  const words = text.split(/\s+/).filter(word => word.length > 0);
  if (words.length === 0) return 0;
  // Last word starts at (wordCount - 1) * delayPerWord
  return (words.length - 1) * delayPerWord;
}

// Helper function to calculate total animation duration for a text
export function calculateAnimationDuration(text: string, delayPerWord: number = 0.1, animationDuration: number = 1): number {
  if (!text) return 0;
  const words = text.split(/\s+/).filter(word => word.length > 0);
  if (words.length === 0) return 0;
  // Last word starts at (wordCount - 1) * delayPerWord and takes animationDuration to complete
  return (words.length - 1) * delayPerWord + animationDuration;
}

export default function AnimatedText({
  text,
  delayPerWord = 0.1,
  initialDelay = 0,
  className = '',
  as: Component = 'span',
  style,
}: AnimatedTextProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Split text into words while preserving spaces
  const words = useMemo(() => {
    if (!text) return [];
    // Split by whitespace but keep the whitespace in the array
    return text.split(/(\s+)/).filter(part => part.length > 0);
  }, [text]);

  // If reduced motion is preferred, render all text immediately
  if (prefersReducedMotion) {
    return <Component className={className} style={style}>{text}</Component>;
  }

  // Count only non-whitespace words for delay calculation
  let wordIndex = 0;

  return (
    <Component className={className} style={style}>
      {words.map((word, index) => {
        // Check if this is a whitespace-only segment
        const isWhitespace = /^\s+$/.test(word);
        
        // Calculate delay only for non-whitespace words
        const delay = isWhitespace 
          ? 0 
          : initialDelay + wordIndex++ * delayPerWord;
        
        return (
          <span
            key={index}
            className={isWhitespace ? '' : 'animate-fade-in-place'}
            style={
              isWhitespace
                ? undefined
                : {
                    animationDelay: `${delay}s`,
                    opacity: 0,
                    animationFillMode: 'forwards',
                  }
            }
          >
            {word}
          </span>
        );
      })}
    </Component>
  );
}

