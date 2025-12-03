'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import OptionButton from './OptionButton';
import CTAButton from './CTAButton';
import AnimatedText from './AnimatedText';
import { useOnboardingContext } from '../contexts/OnboardingContext';
import { getStepForRoute } from '../utils/onboardingSteps';

interface QuestionOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface QuestionStepLayoutProps {
  headline: string;
  options: QuestionOption[];
  selectionType: 'single' | 'multi';
  maxSelections?: number; // For multi-select with limits
  onContinue: (selectedIds: string[]) => void;
  nextRoute: string;
  storageKey?: string; // For sessionStorage persistence
  validateSelection?: (selectedIds: string[]) => boolean; // Custom validation
}

export default function QuestionStepLayout({
  headline,
  options,
  selectionType,
  maxSelections,
  onContinue,
  nextRoute,
  storageKey,
  validateSelection,
}: QuestionStepLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { setCurrentStep } = useOnboardingContext();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Automatically determine current step from route
  const currentStep = getStepForRoute(pathname);

  // Update context when component mounts or route changes
  useEffect(() => {
    setCurrentStep(currentStep);
  }, [currentStep, setCurrentStep]);

  const handleOptionClick = (id: string) => {
    if (selectionType === 'single') {
      setSelectedIds([id]);
    } else {
      // Multi-select
      setSelectedIds(prev => {
        if (prev.includes(id)) {
          // Deselect
          return prev.filter(selectedId => selectedId !== id);
        } else {
          // Select (check maxSelections limit if provided)
          if (maxSelections && prev.length >= maxSelections) {
            return prev; // Don't add if limit reached
          }
          return [...prev, id];
        }
      });
    }
  };

  const handleContinue = () => {
    if (isValidSelection()) {
      // Call the onContinue callback with selected IDs
      onContinue(selectedIds);
      
      // Optionally persist to sessionStorage
      if (storageKey) {
        if (selectionType === 'single') {
          sessionStorage.setItem(storageKey, selectedIds[0]);
        } else {
          sessionStorage.setItem(storageKey, JSON.stringify(selectedIds));
        }
      }
      
      // Update step before navigation to trigger animation
      const nextStep = getStepForRoute(nextRoute);
      setCurrentStep(nextStep);
      router.push(nextRoute);
    }
  };

  const isValidSelection = (): boolean => {
    if (selectedIds.length === 0) {
      return false;
    }
    
    // Use custom validation if provided
    if (validateSelection) {
      return validateSelection(selectedIds);
    }
    
    // Default validation: at least one selection required
    return selectedIds.length > 0;
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
        <div className="w-full max-w-2xl mx-auto flex-1 flex items-start">
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
              className="text-2xl font-bold text-left"
              style={{ 
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-xl)',
              }}
            />
            
            {/* Options - One per row */}
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-md)',
              }}
            >
              {options.map((option, index) => (
                <div
                  key={option.id}
                  className="animate-slide-in"
                  style={{ 
                    animationDelay: `${0.2 + index * 0.05}s`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                >
                  <OptionButton
                    icon={option.icon}
                    label={option.label}
                    selected={selectedIds.includes(option.id)}
                    onClick={() => handleOptionClick(option.id)}
                  />
                </div>
              ))}
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
          <CTAButton 
            onClick={handleContinue}
            disabled={!isValidSelection()}
          >
            Continue
          </CTAButton>
        </div>
      </footer>
    </>
  );
}

