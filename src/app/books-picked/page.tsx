'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';

export default function BooksPickedPage() {
  const router = useRouter();

  const bookBundles = [
    {
      id: 'overcoming-times',
      title: '5-Book Bundle: Overcoming Times of Difficulty',
      image: '/overcoming_times.webp'
    },
    {
      id: 'being-great',
      title: '5-Book Bundle: Being a Great Family Member',
      image: '/being_agreat.webp'
    }
  ];

  // Initialize state from sessionStorage if available
  const [selectedBooks, setSelectedBooks] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('selectedBooks');
      return saved ? new Set(JSON.parse(saved)) : new Set(bookBundles.map(b => b.id));
    }
    return new Set(bookBundles.map(b => b.id));
  });

  // Save state to sessionStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('selectedBooks', JSON.stringify(Array.from(selectedBooks)));
    }
  }, [selectedBooks]);

  const handleContinue = () => {
    router.push('/trial-offer');
  };

  const toggleBook = (bookId: string) => {
    setSelectedBooks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(bookId)) {
        newSet.delete(bookId);
      } else {
        newSet.add(bookId);
      }
      return newSet;
    });
  };

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={18} totalSteps={15} />
      
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
            className="w-full animate-fade-in flex-1 flex flex-col gap-6"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--spacing-md)',
            }}
          >
            {/* Headline */}
            <h1 className="text-2xl font-bold animate-slide-in text-center" style={{ color: 'var(--color-text-primary)' }}>
              Books Picked Just for Your Family
            </h1>
            
            {/* Main Content */}
            <div className="flex flex-col gap-6">
              {/* Main Text */}
              <p className="text-base animate-slide-in text-center leading-relaxed" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                These books match the challenges and values you shared — and since they were printed in past months, they won&apos;t be shipped again.
              </p>

              {/* Subtext */}
              <p className="text-base animate-slide-in text-center leading-relaxed" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                This is the best time to add the ones most relevant to your child&apos;s growth.
              </p>

              {/* Book Bundles List */}
              <div className="flex flex-col gap-4 mt-2">
                {bookBundles.map((bundle, index) => {
                  const isSelected = selectedBooks.has(bundle.id);
                  return (
                    <div 
                      key={bundle.id}
                      className="animate-slide-in"
                      style={{ 
                        animationDelay: `${0.3 + index * 0.1}s`, 
                        opacity: 0, 
                        animationFillMode: 'forwards' 
                      }}
                    >
                      <div
                        className="relative cursor-pointer transition-all duration-200 flex flex-row items-center gap-4"
                        onClick={() => toggleBook(bundle.id)}
                        style={{
                          backgroundColor: isSelected ? 'var(--color-bg-secondary)' : 'var(--color-bg-white)',
                          padding: 'var(--spacing-md)',
                          borderRadius: 'var(--radius-xl)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        {/* Checkbox overlay */}
                        <div 
                          className="absolute top-3 right-3 z-10 flex items-center justify-center"
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: 'var(--radius-md)',
                            border: `2px solid ${isSelected ? 'var(--color-secondary)' : 'var(--color-bg-secondary)'}`,
                            backgroundColor: isSelected ? 'var(--color-secondary)' : 'var(--color-bg-white)',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {isSelected && (
                            <svg 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ 
                                transition: 'opacity 0.2s ease',
                                stroke: 'white'
                              }}
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          )}
                        </div>

                        {/* Image - squared and smaller */}
                        <div
                          className="relative shrink-0"
                          style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                          }}
                        >
                          <Image
                            src={bundle.image}
                            alt={bundle.title}
                            fill
                            style={{
                              objectFit: 'cover',
                              opacity: isSelected ? 1 : 0.7,
                              transition: 'opacity 0.2s ease',
                            }}
                          />
                        </div>

                        {/* Title */}
                        <div className="flex-1">
                          <p className="text-base font-semibold leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                            {bundle.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
            Review My Plan
          </CTAButton>
        </div>
      </footer>
    </>
  );
}

