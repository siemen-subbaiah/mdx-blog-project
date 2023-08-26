import React from 'react';

const SimpleLoader = () => {
  return (
    <div role='status' className='max-w-sm animate-pulse'>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default SimpleLoader;
