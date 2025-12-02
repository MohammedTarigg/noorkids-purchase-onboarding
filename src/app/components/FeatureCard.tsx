'use client';

import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  label: string;
  title: string;
}

export default function FeatureCard({ icon, label, title }: FeatureCardProps) {
  return (
    <div 
      className="flex items-center gap-3 rounded-xl"
      style={{ 
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-bg-alt)',
        minHeight: '80px',
        padding: 'var(--spacing-md)',
      }}
    >
      <div 
        className="flex items-center justify-center shrink-0 rounded-lg"
        style={{
          width: '48px',
          height: '48px',
          backgroundColor: 'var(--color-bg-alt)',
        }}
      >
        {icon}
      </div>
      <div className="flex-1" style={{ paddingLeft: 'var(--spacing-xs)' }}>
        <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {label}
        </p>
        <p className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </p>
      </div>
    </div>
  );
}

