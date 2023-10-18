import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Hero() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center px-56 text-black bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
      <Head>
        <title>Yinuo Chen</title>
      </Head>
      {/* Hero and Components */}
      <h1 className="font-mono animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black sm:text-6xl lg:text-7xl font-bold tracking-tight mb-10">
        Hi there 👋 This is Yinuo Chen.
      </h1>
      <p className="font-semibold text-lg text-gray-800 font-italic max-w-prose mb-12">
      I am a passionate full stack developer and photographer! I enjoy exploring edge-cutting frameworks
      and taking artistic inspirations to put in my projects and photos.
      </p>
      <div className="space-x-10 hover:space-x-20">
            <Link href="/developer" className="bg-gray-200 hover:bg-white py-3 px-8 rounded-lg text-gray-800 font-medium transition-all duration-200 ease-in-out">
              Developer Portfolio
            </Link>
            <Link href="/photo" className="bg-gray-200 hover:bg-white py-3 px-8 rounded-lg text-gray-800 font-medium transition-all duration-200 ease-in-out">
              Photo Portfolio    
            </Link>
          </div>
    </div>
  );
}

export default Hero;
