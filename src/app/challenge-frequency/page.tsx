'use client';

import QuestionStepLayout from '../components/QuestionStepLayout';

const frequencyOptions = [
  {
    id: 'almost-daily',
    label: 'Almost every day',
  },
  {
    id: 'few-times-week',
    label: 'A few times a week',
  },
  {
    id: 'few-times-month',
    label: 'A few times a month',
  },
  {
    id: 'rarely',
    label: 'Rarely',
  },
];

export default function ChallengeFrequencyPage() {
  const handleContinue = (selectedIds: string[]) => {
    if (selectedIds.length > 0) {
      sessionStorage.setItem('challengeFrequency', selectedIds[0]);
    }
  };

  return (
    <QuestionStepLayout
      currentStep={4}
      totalSteps={18}
      headline="Roughly how often do you notice these challenges?"
      options={frequencyOptions}
      selectionType="single"
      onContinue={handleContinue}
      nextRoute="/values"
      storageKey="challengeFrequency"
    />
  );
}


