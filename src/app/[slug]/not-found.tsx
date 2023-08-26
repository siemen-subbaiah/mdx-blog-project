import Link from 'next/link';
import React from 'react';

const notFoundPost = () => {
  return (
    <>
      <h1 className='text-2xl mb-8'>The requested post does not exist!</h1>
      <Link className='bg-[#2A2A28] rounded-md py-[0.12rem] px-1' href='/'>
        Back to Home
      </Link>
    </>
  );
};

export default notFoundPost;
