import React from 'react'
import Nav from '../components/Nav'
import Daobout from '../components/Daobout'
import Footer from '../components/Footer'

const About = () => {
  return (
    <React.Fragment>
      <main>
        <div className="bg-primary">
          <Nav />
          {/* about */}
          <div className="relative -top-96">
            <div className="container max-w-5xl mx-auto px-4">
                <div className="w-4/5"></div>
                  <Daobout />
                   {/* NnsDAO */}
                  <div className="pl-6">
                        <p className="text-white text-2xls font-bold">About NnsDAO</p>
                        <div className="text-sm text-white pt-5 opacity-100">
                            <p>
                                Nnsdao originated from the combination of IC's NNS idea and DAO organization, in analogy<br/> 
                                to the complexity of human neural networks, and combined with the prospect of individuals in <br/>
                                the pursuit of independence, freedom and autonomy to establish NNSDAO, the main vision is <br/>
                                to achieve a decentralized, user-led free autonomous protocol.
                            </p>
                            <p className="pt-5">
                                Nnsdao is simply the boundaryless autonomous organization, which provides some basic<br/>
                                modular programmable services for building the world of DAOn.
                            </p>
                            <p className="pt-5">
                                The Nnsdao protocol is an open source, decentralized, borderless, autonomous organization 
                                <br/>built on the Internet Computer Protocol (ICP) ecology. Nnsdao starts from a people-oriented <br/>
                                principle to realize a virtual passport system based on IC, allowing every user involved in the <br/>
                                DAO ecology to participate in projects within the IC ecology without threshold, and to realize <br/>
                                a new form of organization to DAO, DAO can link organizations, companies, communities, <br/>
                                finance, art, games and other ecologies through Nnsdao's virtual identity, and build a world <br/>
                                belonging to DAOn with the transparency of blockchain and virtual user credit system.
                            </p>
                        </div>
                  </div>

                  {/* Mission */}

                  <div className="pl-6 mt-20">
                        <p className="text-white text-2xls font-bold">Mission</p>
                        <div className="text-sm text-white pt-5 opacity-100">
                            <p>
                              Nnsdao's goal is ICP to achieve the interconnection of everything, container interconnection, <br/>
                              application interconnection, in the era of WEB3.0, everyone can have their own data  <br/>
                              sovereignty, everyone can achieve autonomy for their favorite DAOs, everything is like Network<br/>
                              Nervous System with rules to run and orderly governance, and NNSDAO is not just a DAO, it is<br/>
                              more like a glue, how do you feel? Just DAOs it.
                            </p>
                        </div>
                  </div>

                  {/* Careers */}

                  <div className="pl-6 mt-20">
                        <p className="text-white text-2xls font-bold">Careers</p>
                        <div className="text-sm text-white pt-5 opacity-100">
                            <p className="text-white text-xs">
                              We are looking for talented people to join our team!
                            </p>
                            <p className="text-angelColor text-xl mt-5 underline cursor-pointer transition duration-500">
                              <a href="https://angel.co/company/nnsdao-labs"> Full list of roles available at Nnsdao </a>
                            </p>
                        </div>
                  </div>

                  {/* Contact */}

                  <div className="pl-6 mt-20">
                        <p className="text-white text-2xls font-bold">Contact</p>
                        <div className="text-sm text-white pt-5 opacity-100">
                            <p className="text-white text-xs">
                            To get in touch, please email 
                            <span className="text-angelColor cursor-pointer transition duration-500">
                              <a href="mailto:contact@nnsdao.org"> contact@nnsdao.org</a>
                            </span>
                            </p>
                            <p className="text-white text-xs mt-5">
                              We encourage anyone facing issues with their wallet, transaction or Uniswap related <br/> question to join our active community discord.
                            </p>
                            <p className="text-sm text-white font-bold mt-5">
                                <a href="" className="cursor-pointer transition duration-300 pr-3"> Discord ↗ </a>
                                <a href="https://dscvr.ic0.app/user/nnsdao" className="hover:text-white cursor-pointer pr-3"> Dscvr ↗ </a>
                                <a href="https://az5sd-cqaaa-aaaae-aaarq-cai.ic0.app/u/nnsdaos" className="hover:text-white cursor-pointer pr-3"> Distrikt ↗ </a>
                            </p>
                        </div>
                  </div>

                  {/* Sponsors  */}

                  <div className="pl-6 mt-20">
                        <p className="text-white text-2xls font-bold">Sponsors Holder</p>
                        <div className="text-sm text-white pt-5 opacity-100">
                            <p className="text-white text-xs mb-5">
                              Tip: Sponsors and airdrops account for 2% of the total. 
                            </p>
                            <p className="text-white text-xs mb-5">
                              Sponsors ICP Address(Second start): 76f532b532a89440773abd7b45f513f39369882f4aafecd36809e4dd8d46d820.
                            </p>
                            <p className="text-white text-xs">
                              Holder: HWRD / Haru.
                            </p>
                        </div>
                  </div>

                  {/* Design Concept Brand Assets */}

                  <div className="pl-6 mt-20">
                        <p className="text-white text-2xls font-bold">Design Concept Brand Assets</p>
                        <div className="text-sm text-white pt-5 opacity-100">
                            <p className="text-white text-xs">
                              Download the logo and other brand assets samples <a href="" className="text-angelColor cursor-pointer transition"> here </a>.
                            </p>
                        </div>
                  </div>
                </div>
          </div>
          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
};

export default About
