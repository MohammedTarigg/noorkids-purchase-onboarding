'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function PersonalizedProgramPage() {
  return (
    <ContentStepLayout
      headline="A Fun Way to Teach Islamic Values"
      subtext="Kids learn best through stories they enjoy. Noor Kids makes Islamic values feel fun and natural."
      image={{
        src: "/fun.webp",
        alt: "Fun Islamic Values",
        aspectRatio: "16/9"
      }}
      nextRoute="/harvard-scholars"
    />
  );
}

