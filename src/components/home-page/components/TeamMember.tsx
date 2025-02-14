import React from 'react';
import Image from 'next/image';
import { TeamMemberProps } from '@/utils/type';

export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc, socialLinks }) => {
  return (
    <div className='p-6 flex flex-col items-center w-[300px]'>
      <div className='w-48 h-64'>
        <Image
          height={256}
          width={150}
          src={imageSrc}
          alt={name}
          className='rounded-full h-full object-cover mx-auto'
        />
      </div>
      <div className='text-center mt-4'>
        <h6 className='text-lg text-gray-900 font-semibold dark:text-white'>{name}</h6>
        <span className='text-sm text-gray-500'>{role}</span>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className='cursor-pointer text-gray-900 hover:text-white group w-10 h-10 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600'
          >
            <Image height={25} width={25} src={link.icon} alt='social-icon' className='w-5 h-5' />
          </a>
        ))}
      </div>
    </div>
  );
};
