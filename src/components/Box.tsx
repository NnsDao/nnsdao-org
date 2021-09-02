import React from 'react'

interface Props {
  name: string,
  nameCount: number,
}

const Box: React.FC<Props> = ({ nameCount,name }) => {
  return (
    <div className="group flex items-center gap-5 pl-6 pr-32 py-5 mt-5">
        <div>
            <span className="text-white text-2xl ">{ nameCount }</span>
            <span className="text-xs text-white opacity-40 block">{ name }</span>
        </div>
        <div>
            <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
        </div>
    </div>
  );
};

export default Box
