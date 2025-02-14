'use client';

import React, { useState, useEffect } from 'react';
import { testimonials } from '@/utils/constant';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle Manual Slide Navigation
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className='py-16 bg-white dark:bg-[#121212] relative'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
        {/* Section Title */}
        <motion.h2
          className='text-4xl font-bold text-gray-900 dark:text-white text-center mb-10'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          What Our Happy Users Say!
        </motion.h2>

        {/* Testimonial Text & Name */}
        <motion.div
          key={activeIndex} // Ensures re-render for smooth transitions
          className='relative mb-10 max-w-3xl mx-auto text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-lg text-gray-500 leading-8 mb-6 dark:text-gray-300'>
            &quot;{testimonials[activeIndex].text}&quot;
          </p>
          <h4 className='text-lg font-semibold text-gray-900 dark:text-white'>- {testimonials[activeIndex].name}</h4>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className='hidden md:visible absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition'
        >
          <ChevronLeft size={24} className='text-gray-900 dark:text-white' />
        </button>

        <button
          onClick={goToNext}
          className='hidden md:visible absolute right-12 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition'
        >
          <ChevronRight size={24} className='text-gray-900 dark:text-white' />
        </button>
      </div>
    </section>
  );
};

export const TestimonialSlider = () => {
  return <Testimonial />;
};
