import React from 'react';
import { Portfolio } from './components/Portfolio';
import Question from '../Question';

const PortfolioIndex = () => {
  return (
    <div className='w-full h-full bg-white dark:bg-[#121212] text-black dark:text-white'>
      <Portfolio />
      <div className='bg-white dark:bg-[#121212] h-[200px] mt-8 md:mt-10'>
        <Question />
      </div>
    </div>
  );
};

export default PortfolioIndex;
