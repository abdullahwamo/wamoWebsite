import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col w-full h-full bg-white dark:bg-[#121212]'>
      <div className='relative w-full h-[200px] md:h-screen z-10'>
        <Image
          src='/images/wiremesh.jpg'
          alt='Background'
          layout='fill'
          objectFit='cover'
          className='relative inset-0'
        />

        <div className='relative bg-transparent inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6'>
          <div className='w-full max-w-3xl text-center px-4 md:px-6 lg:mx-24 lg:my-48'>
            <h1 className='text-orange-500 text-2xl md:text-3xl font-bold w-full'>The key to Solutions</h1>
            <p className='text-white mt-4 w-full break-words text-sm md:text-base'>
              Get a chance to work with a global network of 800+ members, with offices in Malaysia, USA, Australia,
              Germany, and Pakistan. Using cutting-edge technologies, we help businesses move one step closer to digital
              transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
