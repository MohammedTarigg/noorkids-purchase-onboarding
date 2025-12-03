'use client';

import { useState } from 'react';
import ContentStepLayout from '../components/ContentStepLayout';

export default function ChallengesProgramPage() {
  const [childName] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('childName');
    }
    return null;
  });

  const displayName = childName || 'your child';

  return (
    <ContentStepLayout
      headline={`Imagine ${displayName} in One Year…`}
      subtext="More confident, respectful, and connected to Allah. Little moments today become big changes."
      image={{
        src: "/images/books_bundle.jpg",
        alt: "Books Bundle"
      }}
      nextRoute="/social-proof"
    />
  );
}

