import { motion } from 'framer-motion';
import { serviceData } from '@/utils/constant';
import React from 'react';

export const Services: React.FC = () => {
  return (
    <section id='services' className='py-16 bg-white dark:bg-[#121212] text-black'>
      <motion.div
        className='container mx-auto px-6 text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <motion.h3
          className='text-4xl font-bold mb-6 dark:text-white'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, ease: 'easeInOut' }}
        >
          Our Services
        </motion.h3>

        <motion.div
          className='grid md:grid-cols-3 gap-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className='p-6 bg-white dark:bg-[#1e1e1e] dark:text-white rounded-lg shadow-lg relative overflow-hidden border border-transparent transition-all duration-300'
              whileHover={{
                scale: 1.05,
                borderColor: 'rgb(59, 130, 246)',
                boxShadow: '0px 4px 30px rgba(59, 130, 246, 0.3)',
              }}
              initial={{ opacity: 0, y: -100, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: 'spring', stiffness: 120, damping: 10 },
              }}
              whileInView={{
                y: [0, -5, 5, 0],
                transition: { repeat: Infinity, duration: 1, ease: 'easeInOut' },
              }}
            >
              <motion.div
                className='absolute inset-0 bg-blue-500 opacity-10 blur-3xl scale-75 transition-all duration-500'
                whileHover={{ scale: 1.2, opacity: 0.2 }}
              />

              <h4 className='text-xl font-semibold text-blue-700 relative z-10'>{service.title}</h4>
              <p className='px-4 relative z-10'>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
