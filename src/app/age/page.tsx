'use client';

import QuestionStepLayout from '../components/QuestionStepLayout';

type AgeRange = {
  id: string;
  label: string;
  minAge: number;
  maxAge: number;
};

const ageRanges: AgeRange[] = [
  { id: '6-7', label: '6-7 years', minAge: 6, maxAge: 7 },
  { id: '8-9', label: '8-9 years', minAge: 8, maxAge: 9 },
  { id: '10-11', label: '10-11 years', minAge: 10, maxAge: 11 },
  { id: '12-13', label: '12-13 years', minAge: 12, maxAge: 13 },
  { id: '14+', label: '14+ years', minAge: 14, maxAge: 14 },
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
      totalSteps={17}
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

