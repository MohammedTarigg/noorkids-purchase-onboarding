'use client';

import ContentStepLayout from '../components/ContentStepLayout';

const bulletPoints = [
  {
    text: 'Evidence-based curriculum',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary-dark)', strokeWidth: 2.5 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    text: '36 topics across character, faith, & community',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary-dark)', strokeWidth: 2.5 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    text: 'Designed for real behavioral change',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary-dark)', strokeWidth: 2.5 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function CurriculumPage() {
  return (
    <ContentStepLayout
      currentStep={10}
      totalSteps={17}
      headline="Created at Harvard. Backed by Scholars. Loved by Parents."
      bulletPoints={bulletPoints}
      nextRoute="/monthly-magic"
    />
  );
}

