import Image from 'next/image';
import React from 'react';

export const Banner = () => {
  return (
    <div className='relative w-full h-[200px] sm:h-[300px] md:h-[700px]'>
      <Image src='/images/future.jpg' alt='Background' layout='fill' objectFit='cover' className='absolute inset-0' />
      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4'>
        <div className='max-w-2xl text-center px-4 sm:px-6'>
          <h1 className='text-orange-500 text-xl sm:text-3xl font-bold'>
            Creating an inclusive & diverse environment for your success
          </h1>
          <p className='text-white mt-4 text-sm sm:text-base'>
            Get a chance to work with a global network of 800+ members, with offices in Malaysia, USA, Australia,
            Germany, and Pakistan. Using cutting-edge technologies, we help businesses move one step closer to digital
            transformation.
          </p>
        </div>
      </div>
    </div>
  );
};
