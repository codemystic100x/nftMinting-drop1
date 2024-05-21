/* eslint-disable @next/next/no-img-element */
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import React from 'react';

const NFTDropPage = () => {
  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
      <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
          <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
            <img
              src='https://links.papareact.com/8sg'
              alt='Apes'
              className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
            />
          </div>
          <div className='space-y-2 p-5 text-center'>
            <h1 className='text=4xl font-bold text-white'>PAPAFAM APES</h1>
            <h2 className='text-xl text-gray-300'>
              A collection of PAPAFAM APes whonlive & breathe React
            </h2>
          </div>
        </div>
      </div>

      <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        {/* Header */}
        <Header />

        <hr className='my-2 border' />
        {/* Content */}

        <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
          <img
            className='w-80 object-cover pb-10 lg:h-40'
            src='https://links.papareact.com/bdy'
            alt=''
          />
          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>
            The PAPAFAM Ape COding Club | NFT Drop
          </h1>

          <p className='pt-2 text-xl text-green-500'>12 /21 NFTs Claimed</p>
        </div>
        {/* Mint Button */}

        <Button className='h-16 bg-red-600 w-full text-white rounded-full mt-10'>
          Mint NFT (0.01 ETH)
        </Button>
      </div>
    </div>
  );
};

export default NFTDropPage;
