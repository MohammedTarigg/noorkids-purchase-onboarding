'use client';

import { useState } from 'react';
import ContentStepLayout from '../components/ContentStepLayout';

// Mapping of value IDs to display labels
const valueLabels: Record<string, string> = {
  'strong_faith_allah': 'Strong Faith & Love of Allah',
  'confidence_resilience': 'Confidence & Emotional Resilience',
  'compassion_empathy': 'Compassion & Empathy',
  'self_discipline_habits': 'Self-Discipline & Good Habits',
  'gratitude_attitude': 'Gratitude & Positive Attitude'
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

  // Format values for display: "Strong Faith & Love of Allah / Confidence & Emotional Resilience"
  const formattedValues = valuesList.length > 0 
    ? valuesList.join(' / ')
    : 'Strong Faith & Love of Allah'; // Fallback

  return (
    <ContentStepLayout
      currentStep={11}
      totalSteps={19}
      headline={`Helps Build Values Like: ${formattedValues}`}
      subtext="Each month's book focuses on one character trait through stories children remember."
      nextRoute="/challenges-program"
    />
  );
}

