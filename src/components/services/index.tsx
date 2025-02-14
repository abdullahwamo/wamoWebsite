import React from 'react';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import ServiceQuestion from './components/ServiceQuestion';

export const ServicesIndex = () => {
  return (
    <div className='flex flex-col w-full h-full bg-white dark:bg-[#121212]'>
      <Hero />
      <OurServices />
      <ServiceQuestion />
    </div>
  );
};
