'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function HarvardScholarsPage() {
  return (
    <ContentStepLayout
      headline="Designed at Harvard. Backed by Scholars."
      subtext="Built with real educational science. Reviewed and trusted by scholars and Muslim families worldwide."
      image={{
        src: "/hardvard_scholars.webp",
        alt: "Harvard Scholars"
      }}
      nextRoute="/fun"
    />
  );
}

