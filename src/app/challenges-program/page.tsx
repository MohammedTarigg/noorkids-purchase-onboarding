'use client';

import { useState } from 'react';
import ContentStepLayout from '../components/ContentStepLayout';

// Mapping of challenge IDs to display labels
const challengeLabels: Record<string, string> = {
  'not_listening_disrespect': 'Not Listening & Disrespect',
  'lying_hiding_truth': 'Lying & Hiding the Truth',
  'screen_time_faith': 'Excess Screen Time & Faith Distraction',
  'low_confidence_identity': 'Low Confidence & Islamic Identity',
  'character_manners': 'Overall Character & Manners',
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

  // Format challenges for display: "Not Listening & Disrespect / Lying & Hiding the Truth"
  const formattedChallenges = challengesList.length > 0 
    ? challengesList.join(' / ')
    : 'Not Listening & Disrespect'; // Fallback

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

