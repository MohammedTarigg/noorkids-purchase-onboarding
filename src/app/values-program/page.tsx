'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function ValuesProgramPage() {
  return (
    <ContentStepLayout
      currentStep={12}
      totalSteps={15}
      headline="A New Book Delivered Monthly"
      subtext="One new book every month to build consistent habits. Simple for parents, exciting for kids."
      image={{
        src: "/asad-astronaut.png",
        alt: "Astronaut",
        showBorder: false
      }}
      nextRoute="/muslim-treehouse"
    />
  );
}

