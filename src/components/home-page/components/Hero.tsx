import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { slidesHeroData } from '@/utils/constant';

export const Hero: React.FC = () => {
  return (
    <section className='relative w-full h-screen text-white'>
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect={'fade'}
        direction={'vertical'}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className='w-full h-full'
        navigation={true}
      >
        {slidesHeroData.map((slide, index) => (
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
