import React from 'react';
import Image from 'next/image';
import { projectsData } from '@/utils/constant';

export const Portfolio = () => {
  return (
    <section className='py-16 bg-gray-100 dark:bg-[#121212]'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-4xl font-bold text-orange-500 mb-12'>Our Portfolio</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='group bg-white dark:bg-[#1e1e1e] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl'
            >
              <div key={index} className='relative w-full h-56 overflow-hidden'>
                <Image
                  width={200}
                  height={200}
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>

              <div className='p-4'>
                <div className='flex flex-wrap gap-2 text-xs font-medium text-gray-700 dark:text-gray-300'>
                  {project.tags.map((tag, index) => (
                    <span key={index} className='px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md'>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className='mt-3 text-lg font-semibold text-gray-900 dark:text-white'>{project.title}</h3>
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                  <strong>Industry:</strong> {project.industry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
