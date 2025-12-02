'use client';

import { useState } from 'react';
import ContentStepLayout from '../components/ContentStepLayout';

export default function PersonalizedProgramPage() {
  const [childAge] = useState<number | null>(() => {
    if (typeof window !== 'undefined') {
      const age = sessionStorage.getItem('childAge');
      return age ? parseInt(age) : null;
    }
    return null;
  });
  const [childName] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('childName');
    }
    return null;
  });

  const displayName = childName || 'your child';
  const displayAge = childAge || 8;

  return (
    <ContentStepLayout
      currentStep={6}
      totalSteps={15}
      headline={`Built For ${displayAge}-Year-Olds Like ${displayName}`}
      subtext="Based on what you shared, here's a program designed specifically for your child's age and needs."
      nextRoute="/fun"
    />
  );
}

