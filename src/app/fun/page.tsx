'use client';

import ContentStepLayout from '../components/ContentStepLayout';

export default function FunPage() {
  return (
    <ContentStepLayout
      headline="36 Character Topics (Akhlaq, Faith, Manners, Identity)"
      subtext="Each week or month covers a core value like honesty, kindness, or patience. Topics match the values you chose."
      image={{
        src: "/circle.webp",
        alt: "Character Topics Circle",
        aspectRatio: "1/1",
        showBorder: false
      }}
      nextRoute="/values-program"
    />
  );
}

