import React from 'react';

const Starfish: React.FC = () => {
  return (
    <div id='home' className='h-min-screen'>
      <div className='max-w-2xl  flex absolute md:right-40 top-20 md:flex-shrink-0'>
        <img src='/imgs/starfish.png' alt='nnsdao starfish logo' />
      </div>
      <div className='flex relative text-white'>
        <p className='flex absolute top-56 left-16 text-2xl md:top-60 md:left-60 md:text-4xl '>
          {' '}
          The boundaryless <br />
          autonomous organization.
        </p>
      </div>
      <div className='flex relative text-white justify-center'>
        <p className='flex  absolute top-80 left-16 text-2xl md:top-96 md:left-60 md:text-4xl'>
          {' '}
          DAOs SINGULARITY
        </p>
        <a
          href='https://github.com/NnsDao/nnsdao-org/blob/main/static/NnsDAO_Boundaryless_Autonomous_Organization.pdf'
          className='cursor-pointer'>
          <img
            className='flex  absolute top-96 left-16 md:top-120 md:left-60'
            width='204px'
            height='56px'
            src='/imgs/bg-whitepaper-hover.png'
            alt='nnsdao whitepaper'
          />
        </a>
      </div>
    </div>
  );
};

export default Starfish;
