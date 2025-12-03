'use client';

import QuestionStepLayout from '../components/QuestionStepLayout';

const priorityOptions = [
  {
    id: 'raising-good-muslims',
    label: 'Raising good Muslims',
  },
  {
    id: 'building-character',
    label: 'Building long-term character',
  },
  {
    id: 'less-arguing',
    label: 'Less arguing',
  },
  {
    id: 'stronger-family-bond',
    label: 'Stronger family bond',
  },
];

export default function ParentPrioritiesPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleContinue = (_selectedIds: string[]) => {
    // Storage is handled by the wrapper via storageKey prop
  };

  return (
    <QuestionStepLayout
      headline="What matters most to you as a parent?"
      options={priorityOptions}
      selectionType="multi"
      onContinue={handleContinue}
      nextRoute="/insights"
      storageKey="parentPriorities"
    />
  );
}

