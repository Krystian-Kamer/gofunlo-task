'use client';

import { AccountOptions, ActiveWindowOption } from '@/components';
import { useState } from 'react';

const Home = () => {
  const [activeWindow, setActiveWindow] = useState('Dedykowane oferty');

  return (
    <div className='my-8'>
      <h1 className='text-5xl font-semibold text-blue-900'>Moje konto</h1>

      <div className='flex mt-8 w-full min-h-96'>
        <AccountOptions
          setActiveWindow={setActiveWindow}
          activeWindow={activeWindow}
        />
        <ActiveWindowOption activeWindow={activeWindow} />
      </div>
    </div>
  );
};
export default Home;
