'use client';

import React from 'react';
import CTAButton from './CTAButton';

interface OptionButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export default function OptionButton({ label, selected, onClick, icon }: OptionButtonProps) {
  return (
    <CTAButton
      onClick={onClick}
      borderRadius="var(--radius-lg)"
      width="100%"
      minHeight="56px"
      padding="var(--spacing-md) var(--spacing-lg)"
      fontSize="0.875rem"
      backgroundColor={selected ? 'var(--color-cta)' : 'var(--color-bg-alt)'}
      textColor={selected ? 'black' : 'var(--color-text-primary)'}
      selected={selected}
      showShadow={!selected}
      textAlign="left"
      showElevation={false}
    >
      <div className="flex items-center gap-4 w-full">
        {icon && (
          <div 
            className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ 
              backgroundColor: selected ? 'rgba(0,0,0,0.1)' : 'var(--color-bg-white)',
            }}
          >
            {icon}
          </div>
        )}
        <span className="font-semibold flex-1">
          {label}
        </span>
      </div>
    </CTAButton>
  );
}

