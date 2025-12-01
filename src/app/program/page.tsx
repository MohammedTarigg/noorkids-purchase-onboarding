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
        <div className="w-full max-w-4xl mx-auto flex-1 flex items-center justify-center">
          <div 
            className="w-full bg-white rounded-3xl overflow-hidden animate-fade-in"
          >
          {/* Hero Section */}
          <div className="bg-purple-900 text-white p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="#fff" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#pattern)" />
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">
              Meet the Character-Building Program
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto relative z-10">
              A personalized monthly journey to raise a confident, kind Muslim child.
            </p>
          </div>

          <div className="p-8 md:p-12">
            {/* Main Value Props */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Left: Image Placeholder */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square md:aspect-auto flex items-center justify-center group">
                <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-purple-100 opacity-50"></div>
                {/* Placeholder for Product Image */}
                <div className="text-center p-6 relative z-10">
                  <div className="w-32 h-40 bg-white shadow-2xl mx-auto mb-4 rounded-r-md border-l-4 border-gray-200 transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-gray-300">
                    Book Cover
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Monthly Storybooks & Activities</p>
                </div>
              </div>

              {/* Right: Benefits */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Fun & Effective</h3>
                    <p className="text-gray-600">No dry lectures. Kids learn through engaging stories they actually enjoy reading.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Harvard-Designed Curriculum</h3>
                    <p className="text-gray-600">Evidence-based framework covering Character (Akhlaq), Faith (Aqeedah), and Community.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Consistent Routine</h3>
                    <p className="text-gray-600">A new book arrives every month, creating a habit of learning your child will look forward to.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center mb-10 relative">
              <div className="text-yellow-400 flex justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-4">
                &quot;My kids have learned behavior skills and manners they would not have otherwise... The books teach the kids to engage with Allah and His Prophet along the way.&quot;
              </p>
              <p className="font-bold text-gray-900">– Maria S., Mom of two</p>
            </div>

            {/* Info Section */}
            <div className="text-center max-w-md mx-auto">
              <p className="text-sm text-gray-500">
                Try it for 1 month. Cancel anytime.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
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
        <div className="max-w-4xl mx-auto">
          <CTAButton onClick={handleContinue}>
            Start My 99¢ Trial
          </CTAButton>
        </div>
      </footer>
    </>
  );
}
