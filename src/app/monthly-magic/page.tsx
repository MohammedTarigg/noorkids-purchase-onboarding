'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function MonthlyMagicPage() {
  return (
    <ContentStepLayout
      currentStep={14}
      totalSteps={19}
      headline="A New Book Every Month — For 12 Months"
      subtext="Consistent, bite-sized lessons help your child grow all year long."
      nextRoute="/learn-connection"
    />
  );
}

