'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OnboardingContextType {
  currentStep: number;
  totalSteps: number;
  setCurrentStep: (step: number) => void;
  setTotalSteps: (steps: number) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

interface OnboardingProviderProps {
  children: ReactNode;
  initialStep?: number;
  initialTotalSteps?: number;
}

export function OnboardingProvider({ 
  children, 
  initialStep = 1,
  initialTotalSteps = 19 
}: OnboardingProviderProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [totalSteps, setTotalSteps] = useState(initialTotalSteps);

  return (
    <OnboardingContext.Provider value={{ currentStep, totalSteps, setCurrentStep, setTotalSteps }}>
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

