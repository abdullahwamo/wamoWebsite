import React from 'react';
import '../globals.css';
import '@fontsource/inter';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Wamolabs | Innovative Software Solutions</title>
        <meta name='description' content='Wamolabs - Pioneering the Future of Software Development' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
