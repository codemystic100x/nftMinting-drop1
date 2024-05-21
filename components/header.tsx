'use client';
import React from 'react';
import { Button } from './ui/button';
import { ConnectButton, darkTheme } from 'thirdweb/react';
import { createThirdwebClient } from 'thirdweb';
import { createWallet, inAppWallet } from 'thirdweb/wallets';

const Header = () => {
  const client = createThirdwebClient({
    clientId: '0xdd7f1a016f63b12b296b52121ad99ef8224b607e',
  });

  const wallets = [
    createWallet('io.metamask'),
    createWallet('com.coinbase.wallet'),
    inAppWallet({
      auth: {
        options: ['google', 'apple'],
      },
    }),
  ];

  return (
    <header className='items-center flex justify-between'>
      <h1 className='w-52 cursor-pointer text-xl font-normal sm:w-80'>
        The{' '}
        <span className='font-extrabold underline decoration-pink-600/50'>
          PAPAFAM
        </span>
        {''}
        Nft Marketplace
      </h1>

      <div className='rounded-full px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={darkTheme({
            colors: {
              accentText: '#0066ff',
              accentButtonBg: '#0066ff',
              primaryButtonBg: '#FC947E',
              connectedButtonBg: '#FC947E',
            },
          })}
          connectButton={{ label: 'Sign In' }}
          connectModal={{
            size: 'compact',
            title: 'Sign In & Connect Wallet',
            welcomeScreen: {
              title: 'Your Gateway to the decentralized world',
              subtitle: 'Connect a wallet to get started',
            },
          }}
        />
      </div>
      {/* <Button className='rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base'>
        Sign in
      </Button> */}
    </header>
  );
};

export default Header;
