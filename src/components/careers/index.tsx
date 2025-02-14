import React from 'react';
import { JobListing } from './components/JobListing';
import { Banner } from './components/Banner';
import CareerBenefits from './components/CareerBenefits';

export const CareersIndex = () => {
  return (
    <div className='w-full h-full bg-white dark:bg-[#121212]'>
      <Banner />
      <JobListing />
      <CareerBenefits />
    </div>
  );
};
