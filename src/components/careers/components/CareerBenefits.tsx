import Image from 'next/image';
import React from 'react';

const benefits = [
  { icon: '/images/dumbbell.png', title: 'Fitness Trainer' },
  { icon: '/images/performance.png', title: 'Performance Based Awards' },
  { icon: '/images/insurance.png', title: 'Parents Medical Coverage' },
  { icon: '/images/fuel.png', title: 'Fuel Allowance' },
];

const CareerBenefits = () => {
  return (
    <div className='grid w-full h-full my-0 py-4 bg-white dark:bg-[#121212]'>
      <div className='mx-auto px-6'>
        <h2 className='text-3xl font-semibold text-center text-orange-500 mb-8'>Our Benefits</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2  gap-24'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='bg-white shadow-lg dark:bg-[#1e1e1e] rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105'
            >
              <div className='w-12 h-12 mb-4'>
                <Image width={200} height={200} src={benefit.icon} alt={benefit.title} className='' />
              </div>
              <h4 className='text-lg font-medium text-black dark:text-white'>{benefit.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerBenefits;
