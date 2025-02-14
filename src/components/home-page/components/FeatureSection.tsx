import React from 'react';
import { FeatureCard } from './FeatureCard';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: 'Built on Tailwind CSS',
      description: 'Currently we support Tailwind CSS. Every component in the library is lightweight and flexible.',
      listItems: ['Tailwind CSS - ready now', 'Figma - ready now', 'React - soon', 'Vuejs - soon', 'Angular - soon'],
      imageSrc: '/images/innovation.jpg',
      bottom: '-0px',
      zIndex: 1,
      marginTop: '10px',
      marginLeft: '0px',
      marginRight: '0px',
    },
    {
      title: '300+ Ready to Use Components',
      description: 'Skip repetitive tasks and focus on your core application logic to deliver stunning results.',
      listItems: ['Buttons, Inputs, Tables, Cards', 'Figma Design Files Included', 'Responsive & Customizable'],
      imageSrc: '/images/teamwork.jpg',
      bottom: '-200px',
      zIndex: 0,
      marginTop: '50px',
      marginLeft: '15px',
      marginRight: '15px',
    },
    {
      title: 'AI Agents for Delivering Interfaces',
      description: 'Let AI handle the heavy lifting for your UI design.',
      listItems: ['10+ AI Agents', 'AI Blocks Generator', 'AI Pages Generator'],
      imageSrc: '/images/future.jpg',
      bottom: '-200px',
      marginTop: '50px',
      zIndex: -1,
      marginLeft: '30px',
      marginRight: '30px',
    },
  ];

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
