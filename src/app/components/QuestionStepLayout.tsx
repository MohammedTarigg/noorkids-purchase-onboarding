'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingHeader from './OnboardingHeader';
import OptionButton from './OptionButton';
import CTAButton from './CTAButton';

interface QuestionOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface QuestionStepLayoutProps {
  currentStep: number;
  totalSteps: number;
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
  currentStep,
  totalSteps,
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
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

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
      
      // Navigate to next route
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
            <h1 
              className="text-2xl font-bold animate-slide-in text-left" 
              style={{ 
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-xl)',
              }}
            >
              {headline}
            </h1>
            
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

