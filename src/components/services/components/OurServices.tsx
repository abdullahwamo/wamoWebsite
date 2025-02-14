import React from 'react';
import { FaRobot, FaCode, FaMobileAlt, FaPencilRuler, FaBug, FaCog } from 'react-icons/fa';

const services = [
  {
    title: 'GenAI',
    description:
      'Empower your business with AI-driven automation, smart solutions, and adaptive technologies that enhance efficiency, scalability, and innovation.',
    icon: <FaRobot />,
  },
  {
    title: 'Web Development',
    description:
      'Build high-performance web applications with modern frameworks, responsive designs, and scalable architecture tailored to your business needs.',
    icon: <FaCode />,
  },
  {
    title: 'Mobile Development',
    description:
      'Develop seamless, user-friendly mobile apps with a focus on performance, accessibility, and cross-platform compatibility for iOS and Android.',
    icon: <FaMobileAlt />,
  },
  {
    title: 'UI/UX Design',
    description:
      'Craft intuitive and visually appealing user interfaces that enhance engagement, improve accessibility, and ensure a seamless digital experience.',
    icon: <FaPencilRuler />,
  },
  {
    title: 'QA & Testing',
    description:
      'Ensure software reliability with rigorous testing methodologies, automated test cases, and performance audits for seamless user experiences.',
    icon: <FaBug />,
  },
  {
    title: 'IT Consultancy',
    description:
      'Optimize your IT strategy with expert guidance, technology integration, workflow improvements, and tailored solutions for business growth.',
    icon: <FaCog />,
  },
];

const OurServices = () => {
  return (
    <div className='flex flex-col h-full w-full py-20 bg-white dark:bg-[#1e1e1e]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-12'>Our Services</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6'>
          {services.map((service, index) => (
            <div key={index} className='flex items-start space-x-4'>
              {/* Icon with custom animation */}
              <div className='w-16 h-16 flex items-center justify-center text-4xl text-blue-500 transition-all duration-500 hover:animate-spin-custom'>
                {service.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>{service.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 mt-2'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
