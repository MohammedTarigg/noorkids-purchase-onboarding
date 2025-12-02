'use client';

import QuestionStepLayout from '../components/QuestionStepLayout';

const impactOptions = [
  {
    id: 'stress',
    label: 'Stress',
  },
  {
    id: 'arguments',
    label: 'Arguments',
  },
  {
    id: 'worry-about-future',
    label: 'Worry about future',
  },
  {
    id: 'hard-to-motivate',
    label: 'Hard to motivate child',
  },
];

export default function FamilyImpactPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleContinue = (_selectedIds: string[]) => {
    // Storage is handled by the wrapper via storageKey prop
  };

  return (
    <QuestionStepLayout
      currentStep={5}
      totalSteps={19}
      headline="How does this impact your family?"
      options={impactOptions}
      selectionType="multi"
      onContinue={handleContinue}
      nextRoute="/values"
      storageKey="familyImpact"
    />
  );
}

