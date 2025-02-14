'use client';

import React, { useState, useEffect } from 'react';
import { testimonials } from '@/utils/constant';
import { motion } from 'framer-motion';

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='py-2 bg-white dark:bg-[#121212] relative'>
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
          className='relative mb-2 max-w-3xl mx-auto text-center'
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
      </div>
    </section>
  );
};

export const TestimonialSlider = () => {
  return <Testimonial />;
};
