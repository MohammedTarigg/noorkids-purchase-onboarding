'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AnalyzingStepLayout from '../components/AnalyzingStepLayout';
import { getInsightText, type InsightSections } from '../utils/personalization';

export default function InsightsPage() {
  const [insight, setInsight] = useState<InsightSections | null>(null);

  const handleAnalyze = () => {
    const age = parseInt(sessionStorage.getItem('childAge') || '8');
    const challenges = JSON.parse(sessionStorage.getItem('challenges') || '[]');
    const values = JSON.parse(sessionStorage.getItem('values') || '[]');
    const frequency = sessionStorage.getItem('challengeFrequency') || undefined;
    
    setInsight(getInsightText(age, challenges, values, frequency));
  };

  const handleContinue = () => {
    // Any additional logic before navigation
  };

  const getInsightContent = () => {
    if (!insight) return null;

    // Section 1 is plain text, sections 2-4 are carousel cards
    const carouselCards = [
      { text: insight.section2 },
      { text: insight.section3 },
      { text: insight.section4 },
    ];

    return (
      <div className="w-full flex flex-col">
        {/* Section 1: Plain text, no animation */}
        <p
          className="text-lg leading-relaxed mb-6"
          style={{ 
            color: 'var(--color-text-primary)',
            fontWeight: 500,
          }}
        >
          {insight.section1}
        </p>

        {/* Sections 2-4: Carousel cards */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{
              el: '.insights-pagination',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            className="insights-swiper"
            style={{ width: '100%', overflow: 'hidden' }}
          >
            {carouselCards.map((card, index) => (
              <SwiperSlide key={index} style={{ width: '100%', flexShrink: 0 }}>
                <div className="w-full">
                  <div
                    className="w-full"
                    style={{
                      backgroundColor: 'var(--color-bg-white)',
                      borderRadius: 'var(--radius-xl)',
                      padding: 'var(--spacing-lg)',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Pagination Dots */}
          <div className="flex items-center justify-center mt-4">
            <div className="insights-pagination"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AnalyzingStepLayout
      currentStep={8}
      totalSteps={19}
      loadingDuration={3000}
      content={getInsightContent}
      onAnalyze={handleAnalyze}
      onContinue={handleContinue}
      nextRoute="/personalized-program"
      continueButtonText="See the Solution"
    />
  );
}
