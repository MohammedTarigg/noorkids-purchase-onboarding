'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function PersonalizedProgramPage() {
  return (
    <ContentStepLayout
      currentStep={9}
      totalSteps={15}
      headline="A Fun Way to Teach Islamic Values"
      subtext="Kids learn best through stories they enjoy. Noor Kids makes Islamic values feel fun and natural."
      nextRoute="/harvard-scholars"
    />
  );
}

