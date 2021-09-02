

import React from 'react'
import Box from './Box'
import './dao.css'
const BoxData = [
    {
        'name':'DAOs',
        'nameCount':100,
    },
    {
        'name':'DAOn',
        'nameCount':20,
    },
    {
        'name':'dToken',
        'nameCount':822,
    },
]

const Daobout: React.FC = () => {
  return (
    <div>
        <div className="relative md:-top-60 sm:top-10 flex flex-col items-center  justify-center">
            <div className="text-left">
                <p className="md:flex flex-row text-white md:text-4xl">
                    Forming an organization with values and touchy-feely 
                    guides keeps the community off the edge, where everyone 
                    wants to contribute, provides security for thousands of
                    DAOs, returns sovereignty to the user, and flattens the organization.
                </p>
            </div>

            <div className="w-full  flex flex-row ">
                {
                    [...BoxData].map(box =>
                        <Box name = { box.name } key={box.nameCount}  nameCount ={box.nameCount} />
                    )
                }
            </div>

            <div className="w-full pt-30  pl-6">
                <p className="text-white text-sm mb-10">
                    We are committed to creating a different kind of sovereign governance protocol in the WEB 3.0 <br />era, built on IC's contract Canister.
                </p>
                <p className="text-sm text-white font-bold">
                    {/* <a href="https://github.com/NnsDao/nnsdao-org/blob/main/static/NnsDAO_Boundaryless_Autonomous_Organization.pdf" className="cursor-pointer duration-300 pr-3"> NDP  </a> */}
                    <a href="https://github.com/NnsDao/nnsdao-org/blob/main/static/NnsDAO_Boundaryless_Autonomous_Organization.pdf" className="cursor-pointer">NnsDAO Protocol Whitepaper ↗ </a>
                </p>
            </div>
        </div>
    </div>
  );
};

export default Daobout
