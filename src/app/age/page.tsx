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
      // Store all selected age ranges
      const selectedAges = selectedIds.map(selectedId => {
        const selectedRange = ageRanges.find(range => range.id === selectedId);
        if (selectedRange) {
          // Calculate the middle age of the range (or minAge for 13+)
          return selectedRange.maxAge === selectedRange.minAge 
            ? selectedRange.minAge 
            : Math.floor((selectedRange.minAge + selectedRange.maxAge) / 2);
        }
        return null;
      }).filter((age): age is number => age !== null);
      
      // Store the first age as the primary age (for backward compatibility)
      if (selectedAges.length > 0) {
        sessionStorage.setItem('childAge', selectedAges[0].toString());
      }
      
      // Also store all ages as an array
      sessionStorage.setItem('childAges', JSON.stringify(selectedAges));
    }
  };

  return (
    <QuestionStepLayout
      headline="How old is your child?"
      options={ageRanges.map(range => ({
        id: range.id,
        label: range.label,
      }))}
      selectionType="multi"
      onContinue={handleContinue}
      nextRoute="/behavior"
    />
  );
}

