import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="pt-10 sm:mt-10">
        <div className="max-w-6xl m-auto flex flex-wrap justify-left text-left">
            {/* Col-1 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                {/* Col Title */}
                <div className="text-opacity-50 text-xs uppercase text-white font-medium mb-6">
                    Getting Started
                </div>
                {/* Links */}
                <a href="#" className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700">
                    Docs
                </a>
                <a href="#" className="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700">
                    White Paper
                </a>
              
            </div>
      
            {/* Col-2 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                {/* Col Title */}
                <div className="text-opacity-50 text-xs uppercase text-white font-medium mb-6">
                      Ecosystem
                </div>
      
                {/* Links */}
                <a href="https://sznps-4aaaa-aaaah-qab2a-cai.ic0.app/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Icpscan
                </a>
                <a href="https://lm5fh-ayaaa-aaaah-aafua-cai.ic0.app/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Texas
                </a>
                <a  className="my-3 block text-gray-300 text-sm font-medium duration-700">
                    Icpdrops
                </a>
                <a className="my-3 block text-gray-300 text-sm font-medium duration-700">
                    Dfinity Social
                </a>
               
            </div>
      
            {/* Col-3 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                {/* Col Title */}
                <div className="text-opacity-50 text-xs uppercase text-white font-medium mb-6">
                    DAOs
                </div>
      
                {/* Links */}
                <a href="/about" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    About
                </a>
                <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Mission
                </a>
                <a href="https://angel.co/company/nnsdao-labs" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Careers
                </a>
                <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Sponsors
                </a>
               
            </div>
      
            {/* Col-3 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                {/* Col Title */}
                <div className="text-opacity-50 text-xs uppercase text-white font-medium mb-6">
                    Community
                </div>
      
                {/* Links */}
                <a href="https://twitter.com/NnsDaos" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Twitter
                </a>
                <a href="https://t.me/NnsDaos" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Telegram
                </a>
                <a href="https://dscvr.ic0.app/user/nnsdao" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Dscvr
                </a>
                <a href="https://az5sd-cqaaa-aaaae-aaarq-cai.ic0.app/u/nnsdaos" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Distrikt
                </a>
                <a href="https://nnsdao.substack.com/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Substack
                </a> 
                {/*<a href="" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    Discord
                </a>
                 <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                    YouTube
                </a> */}
                
            </div>
        </div>
      
        {/* Copyright Bar */}
        <div className="pt-2">
            <div className="flex pb-5 px-3 m-auto pt-5 
                 text-gray-400 text-sm 
                flex-col md:flex-row max-w-6xl">
                <div className="mt-2 flex">
                    NnsDAO Labs © Copyright 2021. Build on

                    <img src="/imgs/deploy-ic.png" className="w-24 h-full ml-1" />
                </div>
      
                <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    
                    <a href="https://twitter.com/NnsDaos" className="w-6 mx-1  hover:text-gray-100 text-sm font-medium duration-700">
                        <img src="/imgs/twitter.png"  />
                    </a>
      
                    <a href="https://nnsdao.medium.com/" className="w-6 mx-1 hover:text-gray-100 text-sm font-medium duration-700">
                        <img src="/imgs/medium.png"  />
                    </a>
      
                    <a href="https://github.com/NnsDao" className="w-6 mx-1 hover:text-gray-100 text-sm font-medium duration-700">
                        <img src="/imgs/github.png"  />
                    </a>
      
                    <a href="https://t.me/NnsDaos" className="w-6 mx-1 hover:text-gray-100 text-sm font-medium duration-700">
                        <img src="/imgs/telegram.png"  />
                    </a>
      
                </div>
            </div>
        </div>
      </footer>
    );
  };
  
export default Footer



