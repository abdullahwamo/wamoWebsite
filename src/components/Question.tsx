import Link from 'next/link';
import React from 'react';

const Question = () => {
  return (
    <div className='flex flex-col items-center rounded-xl justify-center mt-2 mx-auto my-24 bg-gray-50 dark:bg-[#1e1e1e] w-[80%] h-[200px] text-black dark:text-white'>
      <div className=''>
        <div className='text-3xl my-2 px-8 md:px-4 items-center justify-center w-full '>
          Do you have any question for us?
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center w-full'>
          <span className='text-2xl my-2 md:my-0 '>Reach us Out </span>
          <span className='hidden md:visible'>{'->'}</span>
          <Link className='ml-2' href='/contact'>
            <div>
              <button className='bg-orange-500 rounded-lg p-2 text-white'>Contact Us</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question;
