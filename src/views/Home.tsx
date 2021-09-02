import React,{useState} from 'react'
import "./home.css"
import Faq from 'react-faq-component'
import Nav from '../components/Nav'
import Video from '../components/Video'
import Starfish from '../components/Starfish'
import Footer from '../components/Footer'

const data = {
  rows: [
    {
      title: "What is a DAO?",
      content: "DAO stands for “Decentralized Autonomous Organization”. Each of these words can be interpreted in many ways, spawning different definitions of DAOs with emphasis on one aspect or another. In order to clarify the concept, let’s analyze each term."
    },
    {
      title: "What is the Network Nervous System?",
      content: "The NNS is the autonomous software that governs the Internet Computer and manages everything from economics to network structure. The NNS is hosted within the network itself, and is part of the system of protocols that securely weaves together the compute capacity of node machines to create the Internet Computer blockchain network, allowing the network to be autonomous and adaptive. The NNS acts as an autonomous “master” blockchain with a public key to validate all ICP transactions."
    },
    {
      title: "What is the Internet Computer Protocol?",
      content: "The Internet Computer is formed by an advanced decentralized protocol called ICP (Internet Computer Protocol) that independent data centers around the world run to combine the power of individual computers into an unstoppable seamless universe where internet native software is hosted and run with the same security guarantees as smart contracts. It is integrated with Internet standards such as DNS, and can server user experiences directly to Web browsers and smartphones."
    },
    {
      title: "The origin of NnsDAO?",
      content: "NnsDAO originates from the combination of IC's Network Nervous System idea and DAO organization. In analogy to the complexity of human neural networks and combined with the prospect of individuals in the pursuit of independence, freedom, and autonomy, NnsDAO was established with the main vision of achieving a decentralized, user-led, free and autonomous protocol."
    },
    {
      title: "What is NnsDAO?",
      content: "NnsDAO is a boundaryless autonomous organization, which provides some basic modular programmable services for building the world of DAOn."
    },
    {
      title: "The NnsDAO's Vision?",
      content: "The goal of NnsDAO is to realize the interconnection of everything, container interconnection, and application interconnection on the basis of ICP, in the era of WEB3.0, everyone can have their own data sovereignty, everyone can realize autonomy for their favorite DAOs, everything is like neurons with rules and orderly governance,and NnsDAO is not just a DAO, it is more like glue, how do you feel? Just DAOs it."
    },
    {
      title: "What is Nomos Core?",
      content: "Nomos is the core of the entire NnsDAO protocol. It was formed by the community and developers jointly maintaining the early rules before the NnsDAO mainnet went live, which is what Vitalik pointed out before: 'gradual decentralization', used to develop the early protocol rules After the launch of the mainnet, NnsDAO will conduct asset allocation, development progress, and protocol management based on the entire development roadmap and proposal model."
    },
    {
      title: "What is DAOn Governance?",
      content: "DAOn was established at the beginning of its establishment by a catalytic approach and adding restraint rules. Each DAOn will form its own field when it is established, and it will be proposed in the form of a proposal, that is, when each DAOn is established, it will be the same as NDP DAOn."
    },
    {
      title: "What is NnsDAO protocol?",
      content: "The NnsDAO protocol is a programmable and intelligent modular protocol, which includes but is not limited to the following basic protocol functions: Nomos Core, DAOn domain rules, DAOs service functions and rules, virtual passport system, governance module, and other functions."
    },
    {
      title: "What is NDP?",
      content: "NDP is the governance token of NnsDAO Protocol. It is a kind of rights for the community to participate in governance and voting after the main network of the NnsDAO protocol runs. However, NDP only occupies a part of the voting weight. NDP holders can participate in Grant, create DAOn, DAOs, Get airdrops, unlock rare NFTs, etc."
    },
    {
      title: "What is NnsDAO Virtual Passport?",
      content: "In the WEB3.0 era, independent dApps or protocols will record each user's on-chain behavior, and use this to measure the reputation of user behavior. Based on this on-chain behavior, NnsDAO proposes a governance hypothesis based on the user system. At the beginning of the agreement, each user who enters will receive a certain token reward. With the growth of time, under the effect of DAOs, each user will form its own unique virtual reputation."
    }
  ]
}


const Home = () => {
  return (
    <React.Fragment>
      <main>
        <div className="bg-primary">
          <Video />
          <Starfish />
          <Nav />
          {/* Ecosystem */}
          <div className=" ">
            <div className="p-4 text-center text-white" id='ecosystem' >
              Ecosystem
                <div className="p-6 md:flex justify-center items-center md:p-20">
                  <div className="max-w-2xl">
                    <img src="/imgs/icpscan.png" width="840px" height="537px" />
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

                <div className="p-6 md:flex justify-center items-center md:p-20">
                  <div className="max-w-2xl">
                    <img src="/imgs/texas.png" width="539px" height="539px" />
                  </div>
                  <div className="relative max-w-2xl md:pl-10">
                    <h2 className="text-xl font-bold text-white mb-2 text-left ">Texas hold'em </h2>
                    <p className="text-white  text-left align-middle text-xs leading-7 pb-2 break-words" >
                      There is a famous saying in Texas Hold'em: "Victory comes not from your opponent making more mistakes, but from you making fewer". Texas Hold'em is a very skillful game that combines luck, patience, perseverance, and wisdom together. It tests each person's character, ability and determines the ultimate winner through chips. Developed by DAOs, Texas is completely built on IC and controls all settlements through Motoko Actor smart contract, all codes, contracts, and algorithms are publicly visible, it features decentralization and opens up a new game of life. </p>
                    <div className="text-left  text-xs leading-7">
                      <p>·Free chips, login to get experience token</p>
                      <p>·Super jackpot, all the winners </p>
                      <p>·Tournament, smart contract rewards the ultimate winner</p>
                      <p>·Free circulation of chips, anyone can participate</p>
                      <p>·No ads, the best quality experience</p>
                      <p>·Fair, just and open</p>
                    </div>
                  </div>
                </div>

                <div className="md:flex flex-row justify-center">
                  <div className="ec-box">
                    <img src="/imgs/icpdrops.png" width="256px" height="107px" />
                    <div className="ec-text">
                      Icpdrops is an integrated airdrop platform for the IC ecosystem. After each authorized Nnsdao user can obtain different rights and interests, then participate in the airdrop within the IC ecosystem.
                      <div className="ec-bottom-text"  >
                        <p>·Participate in the ecology to get different token airdrops</p>
                        <p>·Follow the status of new coins and airdrops in real time</p>
                      </div>
                    </div>
                  </div>

                  <div className="ec-box">
                    <img src="/imgs/ec-logo.png" width="260px" height="537px" />
                    <div className="ec-text">
                      Nnsdao is simply a boundaryless autonomous organization. that provides some basic modular programmable services for building the world of DAOn.
                      <div className="ec-bottom-text"  >
                        <p>··Nnsdao nomos core  protocol</p>
                        <p>·DAOn DAOs constraint rules</p>
                        <p>·Virtual passport system</p>
                        <p>·Credit-based voting system</p>
                      </div>
                    </div>
                  </div>
                </div>

                 {/* nnsdao Protocol */}
                <div className="mnp-core" id='daon'>
                  <p className="mn-protocol"> Nnsdao Protocol </p>

                  <div className="mnp-text">
                      <p>Nomos Core:Underlying protocol principles after mainline.</p>
                      <p>DAOn:The constraint rules are generally referred to as the ground rules of the current domain.</p>
                      <p>DAOs:Service functions are generally referred to as programmable DAOs, which have a number of fundamental properties.
                    </p>
                  </div>
                  <div className="justify-center bg-cover md:mx-96" >
                    <img width="1111px" height="514px"  src="/imgs/nnsdao-nomos-core.png"  />
                  </div>

                  {/* roadmap */}
                  <div className="relative top-20 md:top-60" id='roadmap'> Roadmap </div>
                  <div className="relative -left-16 mt-6 justify-center md:-left-1/4 md:-mt-44">
                      <img width="2256px" height="2253px"  src="/imgs/roadmap.png"  />
                  </div>
                  {/* faq */}
                  <div className="relative md:-top-60" id='faq' >
                    <div > FAQ’s</div>
                      <div className="md:w-1/11 mx-auto text-left ">
                      <Faq data={data}  styles={{
                        bgColor: "false",
                        titleTextColor: "#FFFFFF",
                        titleTextSize: '16px',
                        rowTitleColor: "#FFFFFF",
                        rowTitleTextSize: 'medium',
                        rowContentColor: "#C9CCD1",
                        rowContentTextSize: '14px',
                        arrowColor: "white",
                        }} />
                      </div>
                  </div>

                </div>

                {/* NnsDAO Newsletter */}
                {/* max-w-lg  container  */}
                <div id='newsletter' className="mt-20">
                  <div className="text-lg text-white font-bold capitalize"> Get our weekly</div>
                  <div className="max-w-xl mx-auto flex items-center relative">
                    <div className="w-1/2 mr-4 md:mr-10">
                      <img  width="100%" height="100%" src="/imgs/newsletter.png"  />
                    </div>
                    <div className="md:w-2/4 pt-36 relative -top-16">
                      <div className="font-medium text-newsletterText text-left uppercase mb-7">newsletter</div>
                        <p className="text-white text-sm leading-5 text-left md:w-max">
                        Get weekly updates on the newest design stories, case</p>
                        <p className="md:w-max text-white text-sm leading-5 text-left ">studies and tips right in your mailbox.  </p>
                        <p className="md:w-max text-white text-sm leading-5 text-left transform hover:scale-70"> Subscribe Now!</p>
                    </div>
                  </div>

                  <div className="w-full flex flex-row mx-auto justify-center items-center relative ">
                      <form className=" flex">
                        {/* <input type="text" value="email" className="newletter-input px-5 py-3.5 text-newsletterHolder   focus:outline-none focus:ring focus:text-primary" placeholder="your@mail.com"/> */}
                       <a href="https://nnsdao.substack.com/"> <button className="md:w-32 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 uppercase button-blue ">Subscribe</button></a>
                      </form>
                  </div>
                </div>

                {/* footer */}
                <Footer />
            </div>
          </div>
          {/* /End Ecosystem */}

        </div>
      </main>
    </React.Fragment>
  );
};

export default Home
