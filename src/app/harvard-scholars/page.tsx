'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function HarvardScholarsPage() {
  return (
    <ContentStepLayout
      currentStep={10}
      totalSteps={15}
      headline="Designed at Harvard. Backed by Scholars."
      subtext="Built with real educational science. Reviewed and trusted by scholars and Muslim families worldwide."
      nextRoute="/fun"
    />
  );
}

