import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

const slides = [
  {
    image: '/images/innovation.jpg',
    title: 'Empowering Businesses',
    quote:
      "At WAMO LABS, we transform ambitious ideas into powerful digital solutions. Whether you're a startup or an enterprise, our innovative web technologies and customized strategies are designed to help you stay ahead in a competitive landscape. Let us be your partner in success.",
  },
  {
    image: '/images/teamwork.jpg',
    title: 'A Team That Inspires',
    quote:
      'Join a team where creativity meets technology. At WAMO LABS, we value our people as much as our projects. We foster a culture of innovation, collaboration, and continuous learning, making it the perfect place for professionals to grow and thrive.',
  },
  {
    image: '/images/future.jpg',
    title: 'Building for the Future',
    quote:
      "With WAMO LABS, you're not just investing in technology - you're investing in the future. Our commitment to quality, cutting-edge solutions, and a client-focused approach ensures that every project creates lasting value for our customers and partners. Together, we build solutions that stand the test of time.",
  },
];

export const Hero: React.FC = () => {
  return (
    <section className='relative w-full h-screen text-white'>
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect={'fade'}
        direction={'vertical'}
        autoplay={{ delay: 3000 }}
        className='w-full h-full'
        navigation={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='absolute inset-0 w-full h-full '>
              <Image
                src={slide.image}
                alt='Hero Background'
                layout='fill'
                objectFit='cover'
                className='absolute inset-0 w-full h-full brightness-50'
              />
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6 mb-20 md:pb-0'>
              <h1 className='text-2xl md:text-5xl font-bold mb-4 md:mb-8 pt-2 md:pt-0 text-orange-500'>
                {slide.title}
              </h1>
              <h2 className='text-xl font-bold mb-6 w-[80%] text'>{slide.quote}</h2>
              <a
                href='#contact'
                className='mt-6 px-6 py-3 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:bg-[#0073b1] transition duration-300'
              >
                Get Started
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
