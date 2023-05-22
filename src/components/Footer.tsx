import React from 'react';

var today = new Date();
var year = today.getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className='pt-10 sm:mt-10'>
      <div className='max-w-6xl m-auto flex flex-wrap justify-left text-left'>
        {/* Col-1 */}
        <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
          {/* Col Title */}
          <div className='text-opacity-50 text-xs uppercase text-white font-medium mb-6'>
            Getting Started
          </div>
          {/* Links */}
          <a
            href='https://docs.nnsdao.org/'
            target='_blank'
            rel='noopener'
            className='cursor my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700'>
            Docs
          </a>
          <a
            href='https://github.com/NnsDao/nnsdao-org/blob/main/static/NnsDAO_Boundaryless_Autonomous_Organization.pdf'
            target='_blank'
            rel='noopener'
            className='my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700'>
            White Paper V1
          </a>
          <a
            href='https://syunduel.medium.com/nnsdao-whitepaper-japanese-translation-922c47e3840b'
            target='_blank'
            rel='noopener'
            className='my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700'>
            White Paper Japanese V1
          </a>

          <a
            href='https://github.com/NnsDao/nnsdao-org/tree/main/static/comics/English'
            target='_blank'
            rel='noopener'
            className='my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700'>
            DAOs To DAOs Comics
          </a>

          <a
            href='https://app.icpswap.com/swap'
            target='_blank'
            rel='noopener'
            className='my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700'>
            Buy NDP via ICPswap
          </a>

          <a
            href='https://app.sonic.ooo/swap'
            target='_blank'
            rel='noopener'
            className='my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700'>
            Buy NDP via Sonic
          </a>
        </div>

        {/* Col-2 */}
        <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
          {/* Col Title */}
          <div className='text-opacity-50 text-xs uppercase text-white font-medium mb-6'>
            Ecosystem
          </div>

          {/* Links */}

          <a
            href='https://h637e-ziaaa-aaaaj-aaeaa-cai.raw.ic0.app/'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Nomos Platform
          </a>

          <a
            href='https://sznps-4aaaa-aaaah-qab2a-cai.ic0.app/'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Icpscan
          </a>
          <a
            href='https://ltdzc-siaaa-aaaag-qab5q-cai.raw.ic0.app/'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            ICmarket
          </a>
          <a
            href='https://lm5fh-ayaaa-aaaah-aafua-cai.ic0.app/'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Texas
          </a>
          <a
            href='https://hrrqn-4aaaa-aaaai-aasoq-cai.raw.ic0.app/'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Icptree
          </a>

          {/* <a className='cursor-not-allowed  my-3 block text-gray-300 text-sm font-medium duration-700'>
            Icpdrops
          </a>
          <a className='cursor-not-allowed  my-3 block text-gray-300 text-sm font-medium duration-700'>
            ICpodcast
          </a>
          <a className='cursor-not-allowed  my-3 block text-gray-300 text-sm font-medium duration-700'>
            NNS.BIO
          </a> */}
        </div>

        {/* Col-3 */}
        <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
          {/* Col Title */}
          <div className='text-opacity-50 text-xs uppercase text-white font-medium mb-6'>
            DAOs
          </div>
          {/* Links */}
          <a
            href='/about'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            About
          </a>
          <a
            href='https://angel.co/company/nnsdao-labs'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Careers
          </a>

          <a
            href='https://coinmarketcap.com/currencies/nnsdao-protocol/'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Coinmarketcap
          </a>

          <a
            href='https://www.coingecko.com/en/coins/nnsdao-protocol'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Coingecko
          </a>

          <a
            href='https://www.coincarp.com/currencies/nnsdao-protocol/'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Coincarp
          </a>
        </div>

        {/* Col-3 */}
        <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
          {/* Col Title */}
          <div className='text-opacity-50 text-xs uppercase text-white font-medium mb-6'>
            Community
          </div>

          {/* Links */}
          <a
            href='https://twitter.com/NnsDaos'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Twitter
          </a>
          <a
            href='https://t.me/NnsDaos'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Telegram
          </a>
          <a
            href='https://dscvr.ic0.app/user/nnsdao'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Dscvr
          </a>
          <a
            href='https://az5sd-cqaaa-aaaae-aaarq-cai.ic0.app/u/nnsdaos'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Distrikt
          </a>
          <a
            href='https://nnsdao.substack.com/'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Substack
          </a>
          <a
            href='https://discord.gg/UTZvcDkeDr'
            target='_blank'
            rel='noopener'
            className='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'>
            Discord
          </a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className='pt-2'>
        <div
          className='flex pb-5 px-3 m-auto pt-5 
                 text-gray-400 text-sm items-center
                flex-col md:flex-col max-w-6xl'>
          <div className='hidden md:flex md:show'>
            NnsDAO Labs Limited © 2021-{year}.
            <img src='/imgs/ic-logo-dark.svg' className='w-24 h-full ml-2' />
          </div>
          <div className='mb-1 mt-3 hidden md:flex md:show'>
            <p>
              502-507th floor, Rasis Business Centre Building, Al Barsha 1 Dubai
              united arab emirates P.O.BOX-36677
            </p>
          </div>

          <div className='show flex-col  mt-5 md:hidden mb-3'>
            NnsDAO Labs Limited © 2021-{year}.
            <div className='mt-1 mb-1'>
              502-507th floor, Rasis Business Centre Building, Al Barsha 1 Dubai
              united arab emirates P.O.BOX-36677
            </div>
            <div className='flex justify-center items-center pl-2 mt-2'>
              <img src='/imgs/ic-logo-dark.svg' className='w-24 h-full ml-1' />
            </div>
          </div>

          <div className='justify-center items-center md:flex-auto md:flex-row-reverse mt-2 flex-row flex'>
            <a
              href='https://twitter.com/NnsDaos'
              target='_blank'
              rel='noopener'
              className='w-6 mx-1  hover:text-gray-100 text-sm font-medium duration-700'>
              <img src='/imgs/twitter.png' />
            </a>

            <a
              href='https://discord.gg/UTZvcDkeDr'
              target='_blank'
              rel='noopener'
              className='w-5 mx-1 opacity-50 hover:text-gray-100 text-sm font-medium duration-700'>
              <img src='/imgs/discord.png' />
            </a>

            <a
              href='https://nnsdao.medium.com/'
              target='_blank'
              rel='noopener'
              className='w-6 mx-1 hover:text-gray-100 text-sm font-medium duration-700'>
              <img src='/imgs/medium.png' />
            </a>

            <a
              href='https://github.com/NnsDao'
              target='_blank'
              rel='noopener'
              className='w-6 mx-1 hover:text-gray-100 text-sm font-medium duration-700'>
              <img src='/imgs/github.png' />
            </a>

            <a
              href='https://t.me/NnsDaos'
              target='_blank'
              rel='noopener'
              className='w-6 mx-1 hover:text-gray-100 text-sm font-medium duration-700'>
              <img src='/imgs/telegram.png' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
