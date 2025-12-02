'use client';

import { useRouter } from 'next/navigation';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';
import PublicationsCarousel from '../components/PublicationsCarousel';
import FeatureCard from '../components/FeatureCard';

export default function ProgramPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/program-details');
  };

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={16} totalSteps={18} />
      
      <div 
        className="min-h-screen flex flex-col" 
        style={{ 
          background: 'var(--color-bg)',
          paddingLeft: 'var(--spacing-md)',
          paddingRight: 'var(--spacing-md)',
          paddingTop: 'calc(var(--spacing-sm) + 52px)',
          paddingBottom: 'calc(var(--spacing-sm) + 80px)',
        }}
      >
        <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col">
          <div 
            className="w-full animate-fade-in flex-1 flex flex-col justify-between gap-4"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--spacing-md)',
            }}
          >
            {/* Hero Section */}
            <div className="animate-slide-in">
              <h1 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                What is the Character-Building Program?
              </h1>
              <p className="text-base mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                Monthly stories, activities, and lessons that teach Islamic values.
              </p>
              
              {/* Cards Section */}
              <div className="flex flex-col gap-3">
                <FeatureCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)', strokeWidth: 2 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  }
                  label="Designed For"
                  title="Ages 4-9"
                />
                
                <FeatureCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)', strokeWidth: 2 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  label="Fun & Engaging"
                  title="Engaging stories kids enjoy reading"
                />
                
                <FeatureCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-secondary)', strokeWidth: 2 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  label="Harvard-Designed"
                  title="Evidence-based curriculum framework"
                />
              </div>
            </div>

            {/* Publications Carousel */}
            <div 
              className="animate-slide-in"
              style={{ 
                animationDelay: '0.2s', 
                opacity: 0, 
                animationFillMode: 'forwards',
              }}
            >
              <PublicationsCarousel />
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
