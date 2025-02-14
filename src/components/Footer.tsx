import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image'; // If you're using Next.js, otherwise use <img>

export const Footer: React.FC = () => {
  return (
    <footer className='bg-white dark:bg-[#121212] text-white py-12 relative overflow-hidden'>
      {/* Floating Gradient Background */}
      <div className='absolute inset-0 bg-white dark:bg-[#121212] opacity-60 blur-3xl'></div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Logo */}
        <div className='flex mb-6'>
          <Image src='/images/wamo-logo.png' alt='Wamolabs Logo' width={150} height={50} className='object-contain' />
        </div>
        <div className='mx-6'>
          <div className='text-black dark:text-white flex-start mb-2'>We are more than ordinary</div>

          {/* Footer Content */}
          <div className='grid md:grid-cols-3 gap-8 text-center md:text-left'>
            {/* About Us Section */}
            <div className='hidden md:visible'>
              <h3 className='text-xl text-black dark:text-white font-semibold mb-4'>About Us</h3>
              <p className='text-sm text-black dark:text-white'>
                Wamolabs specializes in building cutting-edge software solutions tailored to your business needs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-xl text-black dark:text-white font-semibold mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                {['Home', 'Services', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href='#'
                      className='text-sm text-black dark:text-white hover:text-orange-500 transition duration-300'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className='text-xl text-black dark:text-white font-semibold mb-4'>Contact Us</h3>
              <p className='text-sm text-black dark:text-white'>
                123 Wamolabs St.
                <br />
                Tech City, TX 75001
                <br />
                <a
                  href='mailto:info@wamolabs.com'
                  className='text-orange-500 hover:text-orange-400 transition duration-300'
                >
                  info@wamolabs.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className='mt-8 flex justify-center space-x-6'>
            {[
              { icon: <FaFacebook />, link: '#', label: 'Facebook' },
              { icon: <FaTwitter />, link: '#', label: 'Twitter' },
              { icon: <FaLinkedin />, link: '#', label: 'LinkedIn' },
              { icon: <FaInstagram />, link: '#', label: 'Instagram' },
            ].map(({ icon, link, label }) => (
              <motion.a
                key={label}
                href={link}
                aria-label={label}
                className='text-xl text-black dark:text-white hover:text-gray-300 transition duration-300'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className='mt-12 text-center border-t border-gray-600 pt-6'>
            <p className='text-sm text-black dark:text-white'>
              &copy; {new Date().getFullYear()} Wamolabs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
