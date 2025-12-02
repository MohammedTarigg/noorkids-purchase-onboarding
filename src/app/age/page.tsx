'use client';

import QuestionStepLayout from '../components/QuestionStepLayout';

type AgeRange = {
  id: string;
  label: string;
  minAge: number;
  maxAge: number;
};

const ageRanges: AgeRange[] = [
  { id: '4-6', label: '4-6 years', minAge: 4, maxAge: 6 },
  { id: '7-9', label: '7-9 years', minAge: 7, maxAge: 9 },
  { id: '10-12', label: '10-12 years', minAge: 10, maxAge: 12 },
  { id: '13+', label: '13+ years', minAge: 13, maxAge: 13 },
];

export default function AgePage() {
  const handleContinue = (selectedIds: string[]) => {
    if (selectedIds.length > 0) {
      const selectedId = selectedIds[0];
      const selectedRange = ageRanges.find(range => range.id === selectedId);
      
      if (selectedRange) {
        // Store the middle age of the range (or minAge for 14+)
        const ageToStore = selectedRange.maxAge === selectedRange.minAge 
          ? selectedRange.minAge 
          : Math.floor((selectedRange.minAge + selectedRange.maxAge) / 2);
        sessionStorage.setItem('childAge', ageToStore.toString());
      }
    }
  };

  return (
    <QuestionStepLayout
      currentStep={2}
      totalSteps={18}
      headline="How old is your child?"
      options={ageRanges.map(range => ({
        id: range.id,
        label: range.label,
      }))}
      selectionType="single"
      onContinue={handleContinue}
      nextRoute="/behavior"
    />
  );
}

