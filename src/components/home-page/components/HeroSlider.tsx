import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faRocket, faServer, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const HeroSlider = () => {
  const services = [
    { icon: faMobileAlt, title: 'Development', description: 'Mobile App or Website' },
    { icon: faRocket, title: 'Launching', description: 'Helping you identify the' },
    { icon: faServer, title: 'Validation', description: 'Ensuring robust initial stages' },
  ];

  return (
    <div className='flex space-x-6 animate-marquee px-2 bg-white dark:bg-[#121212]'>
      {[...services, ...services, ...services].map((service, index) => (
        <div
          key={index}
          className='flex flex-col items-center mt-6 justify-center bg-transparent dark:bg-[#1e1e1e] text-orange-500 py-4 rounded-lg shadow-lg text-center'
        >
          <div className='flex items-center justify-center text-xl'>
            <FontAwesomeIcon icon={service.icon} size='xs' />
            <h5 className='font-bold ml-3'>{service.title}</h5>
          </div>
          <p className='text-sm text-black dark:text-white'>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
