import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Wamolabs | Innovative Software Solutions' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Wamolabs - Pioneering the Future of Software Development' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-white dark:bg-[#121212]text-white min-h-screen font-sans'>
        <Navbar />
        <main className='animate-fadeIn'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
