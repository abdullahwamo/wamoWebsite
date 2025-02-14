import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { DarkModeToggle } from './home-page/components/DarkModeToggle';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Prevents hydration mismatch
  const [activeLink, setActiveLink] = useState('Home'); // Tracks active link

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent rendering until mounted to avoid layout shift
  if (!isMounted) return null;

  return (
    <nav className='bg-white dark:bg-[#121212] border-gray-200 shadow-md'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-12 lg:px-4'>
        {/* Logo */}
        <Link href='/' onClick={() => setActiveLink('')} className='flex items-center space-x-3'>
          <Image
            src='/images/wamo-logo.png'
            className='h-8 md:h-12 md:w-14 bg-none rounded-lg'
            width={40}
            height={75}
            alt='WAMO'
          />
          <span className='self-center text-2xl font-semibold text-blue-950'>
            WA<span className='text-orange-500'>MO </span>
            <span className='text-2xl font-semibold text-black dark:text-white'>LABS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-8 items-center'>
          {['Services', 'Careers', 'Portfolio'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`relative text-blue-950 hover:text-orange-500 dark:hover:text-orange-500 cursor-pointer dark:text-white transition ${
                activeLink === item ? 'font-semibold' : ''
              }`}
              onClick={() => setActiveLink(item)}
            >
              {item}
              <span
                className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-orange-500 hover:opacity-100 hover:scale-x-100 transition-all duration-300 ${
                  activeLink === item ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
              ></span>
              <span
                className={`absolute left-0 bottom-[-2px] h-[2px] w-full focus:bg-orange-500 focus:dark:bg-orange-500 focus:scale-x-100 transition-all duration-300 opacity-100 scale-x-100`}
              ></span>
            </Link>
          ))}
          <Link href='/contact'>
            <div>
              <button className='bg-orange-500 rounded-lg p-2'>Contact Us</button>
            </div>
          </Link>

          <div className='w-[10px]'>
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className='w-[10px] md:hidden'>
          <DarkModeToggle />
        </div>
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          type='button'
          className='md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200'
        >
          {isMobileMenuOpen ? (
            <svg
              className='w-6 h-6 text-blue-700'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg
              className='w-6 h-6 text-blue-700'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-16 left-0 w-full bg-white dark:bg-black z-50 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
          } md:hidden`}
        >
          <ul className='flex flex-col space-y-4 p-4'>
            {['Home', 'Services', 'Careers', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href='#'
                  className={`block text-blue-700 hover:text-blue-500 transition ${
                    activeLink === item ? 'font-semibold' : ''
                  }`}
                  onClick={() => {
                    setActiveLink(item);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
