'use client';

import QuestionStepLayout from '../components/QuestionStepLayout';

const values = [
  {
    id: 'honesty',
    label: 'Honesty',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    ),
  },
  {
    id: 'kindness',
    label: 'Kindness / Empathy',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
  },
  {
    id: 'discipline',
    label: 'Discipline & self-control',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    ),
  },
  {
    id: 'respect',
    label: 'Respect',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
  },
  {
    id: 'confidence',
    label: 'Confidence',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    id: 'faith',
    label: 'Faith / Islamic knowledge',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
      </svg>
    ),
  },
];

export default function ValuesPage() {
  // Storage and navigation are handled by the wrapper
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleContinue = (_selectedIds: string[]) => {
    // Storage is handled by the wrapper via storageKey prop
  };

  return (
    <QuestionStepLayout
      currentStep={4}
      totalSteps={15}
      headline="What values do you most want to instill in your child?"
      options={values}
      selectionType="multi"
      maxSelections={3}
      onContinue={handleContinue}
      nextRoute="/insights"
      storageKey="values"
    />
  );
}
