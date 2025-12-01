'use client';

import React from 'react';
import CTAButton from './CTAButton';

interface AgeButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function AgeButton({ label, selected, onClick }: AgeButtonProps) {
  return (
    <CTAButton
      onClick={onClick}
      borderRadius="var(--radius-lg)"
      width="100%"
      minHeight="56px"
      padding="var(--spacing-md) var(--spacing-lg)"
      fontSize="1rem"
      backgroundColor={selected ? 'var(--color-cta)' : 'var(--color-bg-alt)'}
      textColor={selected ? 'black' : 'var(--color-text-primary)'}
      selected={selected}
      showShadow={!selected}
    >
      {label}
    </CTAButton>
  );
}
