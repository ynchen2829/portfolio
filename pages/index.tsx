import React from 'react';
import Head from 'next/head';

function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-300 to-gray-600 flex flex-col justify-center items-center text-black">
      <Head>
        <title>Yinuo Chen</title>
      </Head>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-6">
        This is Yinuo Chen.
      </h1>
      <p className="text-xl sm:text-2xl lg:text-3xl font-italic text-center max-w-prose mb-10 px-4">
        Full stack developer and photographer. 
      </p>
        <a href="/photo" className="bg-gray-200 hover:bg-white py-3 px-8 rounded-lg text-gray-800 font-medium transition-all duration-200 ease-in-out">
          View Photo Portfolio
        </a>
    </div>
  );
}

export default Hero;
