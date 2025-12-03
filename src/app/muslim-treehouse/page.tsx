'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function MuslimTreehousePage() {
  return (
    <ContentStepLayout
      headline="Muslim Treehouse"
      subtext="Weekly live Islamic sessions kids enjoy — free for your first month and easy to add."
      image={{
        src: "/treehouse.webp",
        alt: "Muslim Treehouse",
        showBorder: true
      }}
      nextRoute="/challenges-program"
    />
  );
}

