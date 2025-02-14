import React from 'react';
import OurServices from './components/OurServices';
import ServiceQuestion from './components/ServiceQuestion';
import ServicesHero from './components/Hero';

export const ServicesIndex = () => {
  return (
    <div className='flex flex-col w-full h-full bg-white dark:bg-[#121212]'>
      <ServicesHero />
      <OurServices />
      <ServiceQuestion />
    </div>
  );
};
