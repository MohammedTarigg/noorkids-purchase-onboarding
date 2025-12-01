import React from 'react';

interface MultiSelectButtonProps {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function MultiSelectButton({ icon, label, selected, onClick }: MultiSelectButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-full text-left transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
      style={{
        padding: 'var(--spacing-lg)',
        borderRadius: 'var(--radius-xl)',
        backgroundColor: selected ? 'transparent' : 'var(--color-bg-white)',
        color: selected ? 'white' : 'var(--color-text-primary)',
        border: selected ? 'none' : `2px solid var(--color-bg-alt)`,
        boxShadow: selected ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      }}
    >
      {selected && (
        <span 
          className="absolute inset-0 rounded-2xl"
          style={{ 
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--color-primary)',
          }}
        />
      )}
      
      {/* Checkmark indicator */}
      {selected && (
        <div 
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-lg animate-scale-in"
          style={{
            backgroundColor: 'var(--color-accent)',
          }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
      
      {/* Content */}
      <div className="flex items-center gap-4 relative z-10">
        {/* Icon */}
        <div 
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ 
            backgroundColor: selected ? 'rgba(255,255,255,0.2)' : 'var(--color-bg-alt)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          {icon}
        </div>
        
        {/* Label */}
        <span className="font-semibold text-base md:text-lg">
          {label}
        </span>
      </div>
    </button>
  );
}
