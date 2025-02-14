import React from 'react';
import { FeatureCard } from './FeatureCard';
import { features } from '@/utils/constant';

const FeatureSection: React.FC = () => {
  return (
    <section className='relative w-full h-full bg-white dark:text-white mt-0 dark:bg-[#121212]'>
      <div className='relative z-20'>
        <div className='text-center container mx-auto mb-8 relative z-1 text-black'>
          <h2 className='font-sans antialiased text-3xl md:text-4xl lg:text-5xl pt-2 text-black dark:text-white font-bold tracking-tight'>
            Built for the Future of Development
          </h2>
          <p className='font-sans antialiased text-foreground text-xl text-orange-500 max-w-2xl mx-auto mt-4 px-4'>
            Discover the difference our AI and Tailwind CSS features can bring to your web projects.
          </p>
        </div>
        <div id='scroll-cards' className='space-y-6 container mx-auto -translate-y-24 pt-32'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
