'use client';

import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';

export default function ProgramPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/trial-offer');
  };

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={14} totalSteps={15} />
      
      <div 
        className="min-h-screen flex flex-col" 
        style={{ 
          background: 'var(--color-bg)',
          padding: 'var(--spacing-sm)',
          paddingTop: 'calc(var(--spacing-sm) + 52px)',
          paddingBottom: 'calc(var(--spacing-sm) + 80px)',
        }}
      >
        <div className="w-full max-w-2xl mx-auto flex-1 flex items-start">
          <div 
            className="w-full animate-fade-in"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--spacing-md)',
            }}
          >
          {/* Headline */}
          <h1 className="text-2xl font-bold mb-3 animate-slide-in text-left" style={{ color: 'var(--color-text-primary)' }}>
            Meet the Character-Building Program
          </h1>
          
          {/* Subtitle with Book Cover */}
          <div className="flex gap-4 items-start mb-8 animate-slide-in" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            {/* Subtitle Text */}
            <div className="flex-1">
              <p className="text-base mb-2 text-left" style={{ color: 'var(--color-text-secondary)' }}>
                A monthly journey to raise a confident, kind Muslim child.
              </p>
              <p className="text-sm text-left" style={{ color: 'var(--color-text-light)' }}>
                Monthly Storybooks & Activities
              </p>
            </div>
            
            {/* Book Image Placeholder */}
            <div 
              className="relative rounded-xl overflow-hidden flex items-center justify-center shrink-0"
              style={{
                width: '100px',
                height: '130px',
                backgroundColor: 'var(--color-bg-alt)',
              }}
            >
              <div 
                className="w-full h-full flex items-center justify-center text-center rounded-xl"
                style={{
                  backgroundColor: 'var(--color-bg-white)',
                  border: '2px solid #D1D5DB',
                }}
              >
                <p className="text-xs font-medium" style={{ color: 'var(--color-text-light)' }}>
                  Book Cover
                </p>
              </div>
            </div>
          </div>

          <div>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#111827', strokeWidth: 2.5 }}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>Fun & Effective</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Engaging stories kids actually enjoy reading.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF', strokeWidth: 2.5 }}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>Harvard-Designed Curriculum</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Evidence-based framework for Character, Faith, and Community.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--color-accent)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFFFFF', strokeWidth: 2.5 }}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>Consistent Routine</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>A new book every month your child will look forward to.</p>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>
      
      {/* Sticky Footer with CTA Button */}
      <footer 
        className="fixed bottom-0 left-0 right-0 z-40"
        style={{
          backgroundColor: 'var(--color-bg-white)',
          padding: 'var(--spacing-md)',
          borderTop: '1px solid var(--color-bg-alt)',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <CTAButton onClick={handleContinue}>
            Continue
          </CTAButton>
        </div>
      </footer>
    </>
  );
}
