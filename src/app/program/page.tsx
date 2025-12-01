'use client';

import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';

export default function ProgramPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/trial');
  };

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={6} totalSteps={6} />
      
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
                className="w-full h-full flex items-center justify-center text-center"
                style={{
                  backgroundColor: 'var(--color-bg-white)',
                  border: '2px solid var(--color-bg-alt)',
                  borderRadius: 'var(--radius-lg)',
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
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-primary)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>Fun & Effective</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Engaging stories kids actually enjoy reading.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-primary)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>Harvard-Designed Curriculum</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Evidence-based framework for Character, Faith, and Community.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-primary)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>Consistent Routine</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>A new book every month your child will look forward to.</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-xl p-6 text-center mb-6" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
              <div className="flex justify-center gap-1 mb-4" style={{ color: 'var(--color-accent)' }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-base italic mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                &quot;My kids have learned behavior skills and manners they would not have otherwise.&quot;
              </p>
              <p className="font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>– Maria S., Mom of two</p>
            </div>

            {/* Info Section */}
            <div className="text-center">
              <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                Try it for 1 month. Cancel anytime.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs" style={{ color: 'var(--color-text-light)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                <span>Secure Checkout • 30-Day Money-Back Guarantee</span>
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
            Start My 99¢ Trial
          </CTAButton>
        </div>
      </footer>
    </>
  );
}
