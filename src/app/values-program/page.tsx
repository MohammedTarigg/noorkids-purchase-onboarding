'use client';

import { useState } from 'react';
import ContentStepLayout from '../components/ContentStepLayout';

// Mapping of value IDs to display labels
const valueLabels: Record<string, string> = {
  'honesty': 'Honesty',
  'kindness': 'Kindness',
  'discipline': 'Discipline',
  'respect': 'Respect',
  'confidence': 'Confidence',
  'faith': 'Faith / Islamic knowledge'
};

export default function ValuesProgramPage() {
  const [valuesList] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const storedValues = sessionStorage.getItem('values');
      if (storedValues) {
        const valueIds: string[] = JSON.parse(storedValues);
        return valueIds.map(id => valueLabels[id] || id).filter(Boolean);
      }
    }
    return [];
  });

  // Format values for display: "Honesty / Respect / Discipline"
  const formattedValues = valuesList.length > 0 
    ? valuesList.join(' / ')
    : 'Honesty / Respect / Kindness'; // Fallback

  return (
    <ContentStepLayout
      currentStep={8}
      totalSteps={15}
      headline={`Helps Build Values Like: ${formattedValues}`}
      subtext="Each month's book focuses on one character trait through stories children remember."
      nextRoute="/challenges-program"
    />
  );
}

