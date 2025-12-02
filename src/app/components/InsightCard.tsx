'use client';

import { ReactNode } from 'react';

interface InsightCardProps {
  icon: ReactNode;
  text: string;
}

export default function InsightCard({ icon, text }: InsightCardProps) {
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
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
          {text}
        </p>
      </div>
    </div>
  );
}

