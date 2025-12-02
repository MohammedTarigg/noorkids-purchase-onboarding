'use client';

import QuestionStepLayout from '../components/QuestionStepLayout';

const challenges = [
  {
    id: 'disrespect',
    label: 'Disrespect / Not listening',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm0-10h2v6h-2z"/>
      </svg>
    ),
  },
  {
    id: 'dishonesty',
    label: 'Lying or dishonesty',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
      </svg>
    ),
  },
  {
    id: 'discipline',
    label: 'Lack of discipline/routine',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    ),
  },
  {
    id: 'screentime',
    label: 'Screen time or distractions',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
      </svg>
    ),
  },
  {
    id: 'confidence',
    label: 'Struggles with confidence',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.94 10.94C14.86 19.59 13.48 20 12 20zm6.88-3.94L8.94 6.12C10.14 5.41 11.52 5 13 5c4.41 0 8 3.59 8 8 0 1.48-.41 2.86-1.12 4.06z"/>
      </svg>
    ),
  },
];

export default function BehaviorPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleContinue = (_selectedIds: string[]) => {
    // Storage is handled by the wrapper via storageKey prop
  };

  return (
    <QuestionStepLayout
      currentStep={3}
      totalSteps={18}
      headline="Which of these challenges do you face with your child?"
      options={challenges}
      selectionType="multi"
      onContinue={handleContinue}
      nextRoute="/challenge-frequency"
      storageKey="challenges"
    />
  );
}
