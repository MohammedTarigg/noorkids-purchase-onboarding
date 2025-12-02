'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function TrackJourneyPage() {
  return (
    <ContentStepLayout
      currentStep={16}
      totalSteps={19}
      headline="Track Their Journey"
      subtext="Every book comes with a collectible sticker for their Noor Kids passport—so they can see their progress, own their journey, and feel excited about what they're learning."
      nextRoute="/imagine"
    />
  );
}


