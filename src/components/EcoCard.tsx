import React from 'react'

interface Props {
  title: string
}

const EcoCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="justify-center p-20 flex items-center">
        <div className="max-w-2xl">
        <img src="/imgs/Icpscan.png" width="840px" height="537px" />
        </div>
        <div className="relative max-w-2xl">
        <h2 className="text-xl font-bold text-white mb-2 text-left ">Icpscan</h2>
        <p className="text-white  text-left align-middle text-xs leading-7">Icpscan is a block browser service based on IC.</p>
        <p className="text-white  text-left align-middle text-xs leading-7 pb-2" >
            Our vision is to access all Token information within the IC ecosystem, so that users can learn
            all the ecological dynamics of IC, such as wallet activity, user ranking, token ranking and 
            holders, etc. through one site. The target group of the project will be every user who is
            interested in IC, and also in aggregating other Dapps within the IC ecology as a tool, all can
            go through Icpscan to check the content they need in the future. </p>
        <div className="text-left  text-xs leading-7">
            <p>·View token information </p>
            <p>·Obtain information about different tokens </p>
            <p>·Observe address dynamics</p>
        </div>
        </div>
    </div>
  );
};

export default EcoCard
