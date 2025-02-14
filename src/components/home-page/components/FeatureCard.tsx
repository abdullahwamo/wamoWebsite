import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  listItems: string[];
  imageSrc: string;
  bottom: string;
  zIndex: number;
  marginLeft: string;
  marginRight: string;
  marginTop: string;
  padding?: string | '0px';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  listItems,
  imageSrc,
  bottom,
  zIndex,
  marginLeft,
  marginRight,
  marginTop,
  padding,
}) => {
  return (
    <div className='scroll-card sticky' style={{ bottom, zIndex, marginLeft, marginRight, marginTop, padding }}>
      <div className='shadow-lg scroll-card-content grid grid-cols-1 bg-white dark:bg-[#1e1e1e] items-center md:grid-cols-2 gap-6 border border-surface rounded-lg pt-[1rem] pb-[4rem] md:pr-12 p-2'>
        <div className='row-start-2 md:row-start-1 p-6 px-10'>
          <h3 className='font-sans antialiased font-bold text-2xl md:text-3xl lg:text-4xl text-blue-700'>{title}</h3>
          <p className='font-sans antialiased mt-2 mb-6 text-lg text-stone-500'>{description}</p>
          <ul className='space-y-4'>
            {listItems.map((item, index) => (
              <li key={index} className='flex items-center gap-2'>
                <span className='size-5 rounded-full bg-surface text-orange-500 grid place-items-center'>
                  <svg
                    width='1em'
                    height='1em'
                    strokeWidth='2'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    color='currentColor'
                    className='w-3.5 stroke-8 h-3.5'
                  >
                    <path
                      className='font-bold'
                      d='M5 13L9 17L19 7'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </span>
                <p className='font-sans antialiased text-base font-bold  text-orange-500'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <Image
          alt='feature-image'
          loading='lazy'
          width={1024}
          height={1024}
          decoding='async'
          data-nimg='1'
          className='rounded-md mt-4 md:mt-0 md:h-128 object-cover object-center w-full'
          style={{ color: 'transparent' }}
          src={imageSrc}
        />
      </div>
    </div>
  );
};
