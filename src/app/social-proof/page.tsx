'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CTAButton from '../components/CTAButton';
import { useOnboardingContext } from '../contexts/OnboardingContext';
import { getStepForRoute } from '../utils/onboardingSteps';

type Testimonial = {
  name: string;
  username: string;
  initial: string;
  avatar?: string;
  text: string;
  stars: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Musa Gedda',
    username: '@musa_gedda',
    initial: 'M',
    avatar: '/musa-gedda.png',
    text: 'Great 👍 for our kids',
    stars: 5
  },
  {
    name: 'Bushra',
    username: '@bushra',
    initial: 'B',
    avatar: '/bushra.png',
    text: 'It\'s wonderful experience. Thanks Noor kids team',
    stars: 5
  },
  {
    name: 'Madiha',
    username: '@madiha',
    initial: 'M',
    avatar: '/madiha.png',
    text: 'My kindergartner looks forward to receiving our monthly Noor Kids book! He enjoys the format the characters and the stories.',
    stars: 5
  },
  {
    name: 'Malahat Afzal',
    username: '@malahat_afzal',
    initial: 'M',
    avatar: '/malahat-afzal.png',
    text: 'My kids love Noor Kids. They watched the summer program before and they both are enjoying the books now!',
    stars: 5
  },

  {
    name: 'Aleq Jaffery',
    username: '@aleq_jaffery',
    initial: 'A',
    avatar: '/aleq-jaffery.png',
    text: 'Concepts are simple enough for small kids and older ones have fun with the activities. I\'m grateful to have found this resource.',
    stars: 5
  }
];

export default function SocialProofPage() {
  const router = useRouter();
  const { setCurrentStep } = useOnboardingContext();
  const pathname = usePathname();

  // Automatically determine current step from route
  const currentStep = getStepForRoute(pathname);

  // Update context when component mounts
  useEffect(() => {
    setCurrentStep(currentStep);
  }, [currentStep, setCurrentStep]);

  const handleContinue = () => {
    router.push('/start-trial');
  };

  return (
    <>
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
            {/* Headline */}
            <h1 className="text-2xl font-bold animate-slide-in text-center" style={{ color: 'var(--color-text-primary)' }}>
              Kid tested, scholar approved.
            </h1>
            
            {/* Statistics Section */}
            <div 
              className="w-full animate-fade-in"
              style={{
                animationDelay: '0.1s',
                opacity: 0,
                animationFillMode: 'forwards',
                backgroundColor: 'var(--color-stats-bg)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-md)',
              }}
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-text-white)' }}>
                    250K+
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-text-white)' }}>
                    Happy Families
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-text-white)' }}>
                    350+
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-text-white)' }}>
                    Hours of Courses
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-text-white)' }}>
                    100+
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-text-white)' }}>
                    Books Written
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scholar Testimonials Section */}
            <div className="w-full">
              <div className="flex flex-col gap-6">
                {/* Omar Suleiman */}
                <div 
                  className="rounded-lg overflow-hidden animate-fade-in"
                  style={{
                    backgroundColor: 'var(--color-bg-alt)',
                    padding: 'var(--spacing-sm)',
                    animationDelay: '0.2s',
                    opacity: 0,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="flex gap-3 items-start">
                    <div className="shrink-0">
                      <div 
                        className="relative rounded-full overflow-hidden"
                        style={{
                          width: '48px',
                          height: '48px',
                        }}
                      >
                        <Image
                          src="/sh-omar-suleiman.webp"
                          alt="Shaykh Omar Suleiman"
                          width={48}
                          height={48}
                          className="object-cover"
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <h3 className="font-bold text-sm mb-0.5" style={{ color: 'var(--color-text-primary)' }}>
                        Omar Suleiman
                      </h3>
                      <p className="text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Shaykh Omar Suleiman, Yaqeen Institute
                      </p>
                      <p className="text-sm leading-relaxed italic" style={{ color: 'var(--color-text-primary)', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                        &quot;My kids and I love Noor Kids. It is one of the best resources for Muslim Kids.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rania Awaad */}
                <div 
                  className="rounded-lg overflow-hidden animate-fade-in"
                  style={{
                    backgroundColor: 'var(--color-bg-alt)',
                    padding: 'var(--spacing-sm)',
                    animationDelay: '0.3s',
                    opacity: 0,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="flex gap-3 items-start">
                    <div className="shrink-0">
                      <div 
                        className="relative rounded-full overflow-hidden"
                        style={{
                          width: '48px',
                          height: '48px',
                        }}
                      >
                        <Image
                          src="/rania-awaad.avif"
                          alt="Ust. Rania Awaad, MD"
                          width={48}
                          height={48}
                          className="object-cover"
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <h3 className="font-bold text-sm mb-0.5" style={{ color: 'var(--color-text-primary)' }}>
                        Ust. Rania Awaad, MD
                      </h3>
                      <p className="text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Psychiatrist & Islamic Scholar
                      </p>
                      <p className="text-sm leading-relaxed italic" style={{ color: 'var(--color-text-primary)', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                        &quot;Noor Kids helps kids build a love for Allah and our Prophet. My children look forward to receiving Noor Kids each month.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonials Carousel */}
            <div className="w-full">
              <div className="rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--color-bg-white)', border: '1px solid #D1D5DB', padding: 'var(--spacing-md)' }}>
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
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {/* Avatar */}
                            {testimonial.avatar ? (
                              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                                <Image
                                  src={testimonial.avatar}
                                  alt={testimonial.name}
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                  }}
                                />
                              </div>
                            ) : (
                              <div 
                                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm"
                                style={{ backgroundColor: '#FEF3C7', color: '#F59E0B' }}
                              >
                                {testimonial.initial}
                              </div>
                            )}
                            {/* Name and Username */}
                            <div>
                              <p className="font-bold text-sm mb-0.5" style={{ color: 'var(--color-text-primary)' }}>
                                {testimonial.name}
                              </p>
                              <p className="text-xs" style={{ color: 'var(--color-text-light)' }}>
                                {testimonial.username}
                              </p>
                            </div>
                          </div>
                          {/* Stars */}
                          <div className="flex gap-0.5 shrink-0">
                            {[1,2,3,4,5].map(i => (
                              <svg 
                                key={i} 
                                className="w-4 h-4" 
                                viewBox="0 0 24 24" 
                                style={{ 
                                  color: i <= testimonial.stars ? '#FCD34D' : '#E5E7EB',
                                  fill: i <= testimonial.stars ? 'currentColor' : 'none',
                                  stroke: i <= testimonial.stars ? 'none' : 'currentColor',
                                  strokeWidth: 1.5
                                }}
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                              </svg>
                            ))}
                          </div>
                        </div>
                        {/* Testimonial Text */}
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                          {testimonial.text}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Pagination Dots */}
                <div className="flex items-center justify-center mt-4">
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

