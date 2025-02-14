import Image from 'next/image';
import React from 'react';
// import { TeamSection } from './TeamSection';

export const About = () => {
  return (
    <>
      <section className='py-14 lg:py-24 relative z-0 bg-white dark:bg-[#121212]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center bg-white dark:bg-[#121212]'>
          <h1 className='max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 dark:text-white mb-5 md:text-5xl md:leading-normal'>
            Control your Finances with our <span className='text-orange-500'>Smart Tool </span>
          </h1>
          <p className='max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9'>
            Invest intelligently and discover a better way to manage your entire wealth easily.
          </p>
        </div>
      </section>

      <section className='py-14 lg:py-24 relative dark:bg-[#121212]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative '>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
            <div className='img-box'>
              <Image
                height={1024}
                width={1024}
                src='/images/smart.jpg'
                alt='About Us tailwind page'
                className='max-lg:mx-auto object-cover'
              />
            </div>
            <div className='lg:pl-[100px] flex items-center'>
              <div className='data w-full'>
                <h2 className='font-manrope font-bold text-4xl lg:text-5xl text-black dark:text-white mb-9 max-lg:text-center relative'>
                  About Us{' '}
                </h2>
                <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                  Driven by a passion for seamless user experiences, we have meticulously curated pagedone to empower
                  creators, designers, and developers alike. Our mission is to provide a comprehensive toolkit, enabling
                  you to build intuitive, beautiful interfaces that resonate with users on every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-14 lg:py-24 relative bg-white dark:bg-[#121212]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative '>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-9 '>
            <div className='lg:pr-24 flex items-center'>
              <div className='data w-full'>
                <Image
                  height={1024}
                  width={1024}
                  src='/images/smart.jpg'
                  alt='About Us tailwind page'
                  className='block lg:hidden mb-9 mx-auto object-cover'
                />
                <h2 className='font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center dark:text-white'>
                  We are Creative Since 2005
                </h2>
                <p className='font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto'>
                  Pagedone isnt just a collection of components and guidelines; its a philosophy. We go beyond
                  aesthetics, prioritizing accessibility, scalability, and usability. Every element, from the tiniest
                  detail to the grandest layout, is meticulously crafted to enhance functionality and elevate user
                  satisfaction.
                </p>
              </div>
            </div>
            <div className='img-box '>
              <Image
                height={1024}
                width={1024}
                src='/images/future.jpg'
                alt='About Us tailwind page'
                className='hidden lg:block object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-white dark:bg-[#121212]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='font-manrope text-4xl text-center text-gray-900 dark:text-white font-bold mb-14'>
            Our results in numbers
          </h2>
          <div className='flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between'>
            <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white dark:bg-zinc-700 p-6 rounded-2xl shadow-md shadow-orange-500 dark:shadow-orange-500'>
              <div className='flex gap-5'>
                <div className='font-manrope text-2xl font-bold text-orange-500'>240%</div>
                <div className='flex-1'>
                  <h4 className='text-xl text-gray-900 font-semibold mb-2 dark:text-white'>Company growth</h4>
                  <p className='text-xs text-black dark:text-white leading-5'>
                    Company remarkable growth journey as we continually innovate and drive towards new heights of
                    success.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white dark:bg-zinc-700 p-6 rounded-2xl shadow-md shadow-orange-500 dark:shadow-orange-500'>
              <div className='flex gap-5'>
                <div className='font-manrope text-2xl font-bold text-orange-500'>175+</div>
                <div className='flex-1'>
                  <h4 className='text-xl text-gray-900 font-semibold mb-2 dark:text-white'>Company growth</h4>
                  <p className='text-xs text-black dark:text-white leading-5'>
                    Our very talented team members are the powerhouse of pagedone and pillars of our success.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white dark:bg-zinc-700 p-6 rounded-2xl shadow-md shadow-orange-500 dark:shadow-orange-500'>
              <div className='flex gap-5'>
                <div className='font-manrope text-2xl font-bold text-orange-500'>625+</div>
                <div className='flex-1'>
                  <h4 className='text-xl text-gray-900 font-semibold mb-2 dark:text-white'>Projects Completed</h4>
                  <p className='text-xs text-black dark:text-white leading-5'>
                    We have accomplished more than 625 projects worldwide and we are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
