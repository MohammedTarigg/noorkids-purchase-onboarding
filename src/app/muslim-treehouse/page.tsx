'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function MuslimTreehousePage() {
  return (
    <ContentStepLayout
      currentStep={13}
      totalSteps={15}
      headline="Muslim Treehouse"
      subtext="Weekly live Islamic sessions kids enjoy — free for your first month and easy to add."
      nextRoute="/challenges-program"
    />
  );
}

