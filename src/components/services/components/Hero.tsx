import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col w-full h-full bg-white dark:bg-[#121212]'>
      <div className='relative w-full h-screen z-10'>
        <Image
          src='/images/wiremesh.jpg'
          alt='Background'
          layout='fill'
          objectFit='cover'
          className='relative inset-0'
        />

        <div className='relative bg-transparent inset-0 bg-black bg-opacity-50 flex'>
          <div className='w-full text-center px-6 mx-24 my-40 '>
            <h1 className='text-orange-500 text-3xl font-bold w-1/2'>The key to Solutions</h1>
            <p className='text-white mt-4 w-1/2'>
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
