import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TeamMember } from './TeamMember';
import { teamData } from '@/utils/constant';

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end end'] });

  const totalProfiles = teamData.length; // 8
  const profileWidth = 40;
  const gapBetweenProfiles = 0;

  const startX = 125;
  const endX = startX - (totalProfiles - 1) * (profileWidth + gapBetweenProfiles);

  console.log(startX, endX);
  const xScroll = useTransform(scrollYProgress, [0, 1], [`${startX}%`, `${endX}%`]);
  const xSmooth = useSpring(xScroll, { stiffness: 100, damping: 30 });

  const [isScrollingStopped, setIsScrollingStopped] = useState(false);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest >= 1) {
        setIsScrollingStopped(true);
      } else {
        setIsScrollingStopped(false);
      }
    });
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className='relative w-full h-[300vh] bg-white dark:bg-[#121212]'>
      {/* Sticky container that holds the team members */}
      <div className='sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden'>
        <motion.div ref={containerRef} className='relative w-full h-full flex items-center justify-center'>
          <motion.div style={{ x: xSmooth }} className='flex space-x-[8vw] w-full'>
            {teamData.map((member, index) => (
              <div key={index} className='w-[60vw] max-w-[200px] flex-shrink-0 flex justify-center'>
                <TeamMember {...member} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* When horizontal scrolling is done, allow vertical scrolling */}
      <div
        className={`transition-opacity duration-700 ${
          isScrollingStopped ? 'opacity-0' : 'opacity-0 pointer-events-none dark:bg-[#121212]'
        }`}
      >
        <section className='py-0 lg:py-24 bg-white dark:bg-[#121212]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-4xl font-bold text-gray-900 text-center mb-6'></h2>
            <p className='text-lg text-gray-500 text-center'></p>
          </div>
        </section>
      </div>
    </section>
  );
};
