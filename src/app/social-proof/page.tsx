'use client';

import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import OnboardingHeader from '../components/OnboardingHeader';
import CTAButton from '../components/CTAButton';

type Testimonial = {
  name: string;
  username: string;
  initial: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Maria',
    username: '@maria_s',
    initial: 'M',
    text: 'My kids picked up manners they weren\'t learning anywhere else… The books made Islamic learning fun.'
  },
  {
    name: 'Amina',
    username: '@amina_uk',
    initial: 'A',
    text: 'My kids have learned behavior skills and manners they would not have otherwise.'
  },
  {
    name: 'Yusuf',
    username: '@yusuf_family',
    initial: 'Y',
    text: 'My daughter now understands the importance of honesty and kindness through these stories.'
  },
  {
    name: 'Fatima',
    username: '@fatima_mom',
    initial: 'F',
    text: 'As a busy parent, I love how these books make teaching Islamic values so easy.'
  },
  {
    name: 'Ahmed',
    username: '@ahmed_dad',
    initial: 'A',
    text: 'I\'ve seen my son\'s confidence and character improve significantly since we started.'
  }
];

export default function SocialProofPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/program');
  };

  return (
    <>
      {/* Header with Progress Bar and Back Button */}
      <OnboardingHeader currentStep={13} totalSteps={15} />
      
      <div 
        className="min-h-screen flex flex-col" 
        style={{ 
          background: 'var(--color-bg)',
          padding: 'var(--spacing-sm)',
          paddingTop: 'calc(var(--spacing-sm) + 52px)',
          paddingBottom: 'calc(var(--spacing-sm) + 80px)',
        }}
      >
        <div className="w-full max-w-2xl mx-auto flex-1 flex items-center justify-center">
          <div 
            className="w-full animate-fade-in"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--spacing-md)',
            }}
          >
            {/* Headline */}
            <h1 className="text-2xl font-bold mb-8 animate-slide-in text-left" style={{ color: 'var(--color-text-primary)' }}>
              Parents Are Seeing Real Change
            </h1>
            
            {/* Testimonials Carousel */}
            <div className="mb-6">
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--color-bg-white)', border: '1px solid #D1D5DB', padding: '24px' }}>
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  pagination={{
                    el: '.swiper-pagination-custom',
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet-custom',
                    bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                  }}
                  className="testimonials-swiper"
                  style={{ width: '100%', overflow: 'hidden' }}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} style={{ width: '100%', flexShrink: 0 }}>
                      <div style={{ width: '100%' }}>
                        {/* Header with Avatar, Name, and Stars */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            {/* Avatar */}
                            <div 
                              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-lg"
                              style={{ backgroundColor: '#FEF3C7', color: '#F59E0B' }}
                            >
                              {testimonial.initial}
                            </div>
                            {/* Name and Username */}
                            <div>
                              <p className="font-bold text-base mb-0.5" style={{ color: 'var(--color-text-primary)' }}>
                                {testimonial.name}
                              </p>
                              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                                {testimonial.username}
                              </p>
                            </div>
                          </div>
                          {/* Stars */}
                          <div className="flex gap-0.5 shrink-0">
                            {[1,2,3,4,5].map(i => (
                              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" style={{ color: '#FCD34D' }}>
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                              </svg>
                            ))}
                          </div>
                        </div>
                        {/* Testimonial Text */}
                        <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                          {testimonial.text}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Pagination Dots */}
                <div className="flex items-center justify-center mt-6">
                  <div className="swiper-pagination-custom"></div>
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

