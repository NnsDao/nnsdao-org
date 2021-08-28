

import React from 'react'

const Starfish: React.FC = () => {
  return (
    <div>
        <div className="max-w-2xl  flex absolute right-40 top-20">
        <img  src="/imgs/starfish.png"  alt="nnsdao starfish logo" />
        </div>
        <div className="flex relative text-white">
                <p className="flex absolute top-60 left-60 text-4xl "> The boundaryless <br/>
                autonomous organization.</p>
        </div>
        <div className="flex relative text-white">
        <p className="flex  absolute top-96 left-60  text-4xl"> DAOs SINGULARITY </p>
        <img  className="flex  absolute  top-120 left-60"  width="204px" height="56px" src="/imgs/bg-whitepaper-hover.png"  alt="nnsdao whitepaper" />
        </div>
    </div>
  );
};

export default Starfish
