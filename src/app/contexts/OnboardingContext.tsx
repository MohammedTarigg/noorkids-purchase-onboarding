'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TOTAL_ONBOARDING_STEPS } from '../utils/onboardingSteps';

interface OnboardingContextType {
  currentStep: number;
  totalSteps: number;
  setCurrentStep: (step: number) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

interface OnboardingProviderProps {
  children: ReactNode;
  initialStep?: number;
}

export function OnboardingProvider({ 
  children, 
  initialStep = 1,
}: OnboardingProviderProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  // Total steps is now fixed and centralized
  const totalSteps = TOTAL_ONBOARDING_STEPS;

  return (
    <OnboardingContext.Provider value={{ currentStep, totalSteps, setCurrentStep }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingContext() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboardingContext must be used within an OnboardingProvider');
  }
  return context;
}

