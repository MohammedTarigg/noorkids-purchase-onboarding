import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  const percentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full mb-4 animate-fade-in">
      {/* Progress Bar */}
      <div className="w-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)', height: '12px' }}>
        <div 
          className="h-full transition-all duration-500 ease-out"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: 'var(--color-secondary-light)',
          }}
        />
      </div>
      
      {/* Motivational Text */}
      {currentStep >= totalSteps - 1 && (
        <div className="text-center mt-2 animate-pulse">
          <span className="text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>
            ✨ Almost there!
          </span>
        </div>
      )}
    </div>
  );
}
