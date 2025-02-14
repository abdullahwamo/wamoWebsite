import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import FeatureSection from './components/FeatureSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialSlider } from './components/TestimonialSlider';
// import HeroSlider from './components/HeroSlider';

const HomeScreenIndex = () => {
  return (
    <div className='w-full'>
      <Hero />
      {/* <HeroSlider /> */}
      <Services />
      <div className='h-auto'>
        <FeatureSection />
      </div>
      <About />
      <TestimonialSlider />
      <TeamSection />
      <Contact />
    </div>
  );
};

export default HomeScreenIndex;
