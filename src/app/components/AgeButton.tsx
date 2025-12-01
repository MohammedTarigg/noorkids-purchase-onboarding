import React from 'react';

interface AgeButtonProps {
  age: number;
  selected: boolean;
  onClick: () => void;
}

export default function AgeButton({ age, selected, onClick }: AgeButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
      style={{
        padding: 'var(--spacing-sm) var(--spacing-md)',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: selected ? 'transparent' : 'var(--color-bg-white)',
        color: selected ? 'white' : 'var(--color-text-primary)',
        border: selected ? 'none' : '2px solid var(--color-bg-alt)',
        fontSize: '0.875rem',
      }}
    >
      {selected && (
        <span 
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center animate-scale-in"
          style={{
            backgroundColor: 'var(--color-accent)',
          }}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </span>
      )}
      {selected ? (
        <span style={{ 
          display: 'block',
          padding: 'inherit',
          margin: 'calc(-1 * var(--spacing-md)) calc(-1 * var(--spacing-lg))',
          borderRadius: 'inherit',
          backgroundColor: 'var(--color-primary)',
        }}>
          {age}
        </span>
      ) : (
        age
      )}
    </button>
  );
}
