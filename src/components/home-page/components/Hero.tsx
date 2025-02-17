import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { slidesHeroData } from '@/utils/constant';

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesHeroData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative w-full h-screen text-white'>
      {slidesHeroData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt='Hero Background'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 w-full h-full brightness-50 
                       md:object-cover sm:object-contain sm:h-[60vh]'
          />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6 mb-20 md:pb-0'>
            <h1 className='text-2xl md:text-5xl font-bold mb-4 md:mb-8 pt-2 md:pt-0 text-orange-500'>{slide.title}</h1>
            <h2 className='text-xl font-bold mb-6 w-[80%]'>{slide.quote}</h2>
            <a
              href='#contact'
              className='mt-6 px-6 py-3 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:bg-[#0073b1] transition duration-300'
            >
              Get Started
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};
