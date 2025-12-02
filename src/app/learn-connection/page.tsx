'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function LearnConnectionPage() {
  return (
    <ContentStepLayout
      currentStep={12}
      totalSteps={17}
      headline="Learn and Build Connection"
      subtext="Our stories get kids thinking, and asking questions, making Islam a part of everyday life in a way that feels natural."
      nextRoute="/track-journey"
    />
  );
}

