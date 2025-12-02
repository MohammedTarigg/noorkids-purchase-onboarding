'use client';

import { useState } from 'react';
import ContentStepLayout from '../components/ContentStepLayout';

// Mapping of challenge IDs to display labels
const challengeLabels: Record<string, string> = {
  'disrespect': 'Disrespect / Not listening',
  'dishonesty': 'Lying or dishonesty',
  'discipline': 'Lack of discipline/routine',
  'screentime': 'Screen time or distractions',
  'confidence': 'Struggles with confidence',
  'other': 'Other'
};

export default function ChallengesProgramPage() {
  const [challengesList] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const storedChallenges = sessionStorage.getItem('challenges');
      if (storedChallenges) {
        const challengeIds: string[] = JSON.parse(storedChallenges);
        return challengeIds.map(id => challengeLabels[id] || id).filter(Boolean);
      }
    }
    return [];
  });

  // Format challenges for display: "Disrespect / Lying or dishonesty"
  const formattedChallenges = challengesList.length > 0 
    ? challengesList.join(' / ')
    : 'Disrespect / Not listening'; // Fallback

  return (
    <ContentStepLayout
      currentStep={9}
      totalSteps={17}
      headline={`Designed to Gently Correct Behaviors Like: ${formattedChallenges}`}
      subtext="Kids learn through stories — not lectures. Our stories plant the right habits naturally."
      nextRoute="/curriculum"
    />
  );
}

