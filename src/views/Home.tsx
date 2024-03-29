import React from 'react';
import Faq from 'react-faq-component';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Starfish from '../components/Starfish';
import './home.css';

const data = {
  rows: [
    {
      title: 'What is a DAO?',
      content:
        'DAO stands for “Decentralized Autonomous Organization”. Each of these words can be interpreted in many ways, spawning different definitions of DAOs with emphasis on one aspect or another. In order to clarify the concept, let’s analyze each term.'
    },
    {
      title: 'What is the Network Nervous System?',
      content:
        'The NNS is the autonomous software that governs the Internet Computer and manages everything from economics to network structure. The NNS is hosted within the network itself, and is part of the system of protocols that securely weaves together the compute capacity of node machines to create the Internet Computer blockchain network, allowing the network to be autonomous and adaptive. The NNS acts as an autonomous “master” blockchain with a public key to validate all ICP transactions.'
    },
    {
      title: 'What is the Internet Computer Protocol?',
      content:
        'The Internet Computer is formed by an advanced decentralized protocol called ICP (Internet Computer Protocol) that independent data centers around the world run to combine the power of individual computers into an unstoppable seamless universe where internet native software is hosted and run with the same security guarantees as smart contracts. It is integrated with Internet standards such as DNS, and can server user experiences directly to Web browsers and smartphones.'
    },
    {
      title: 'The origin of NnsDAO?',
      content:
        "NnsDAO originates from the combination of IC's Network Nervous System idea and DAO organization. In analogy to the complexity of human neural networks and combined with the prospect of individuals in the pursuit of independence, freedom, and autonomy, NnsDAO was established with the main vision of achieving a decentralized, user-led, free and autonomous protocol."
    },
    {
      title: 'What is NnsDAO?',
      content:
        'NnsDAO is a boundaryless autonomous organization, which provides some basic modular programmable services for building the world of DAOn.'
    },
    {
      title: "The NnsDAO's Vision?",
      content:
        'The goal of NnsDAO is to realize the interconnection of everything, container interconnection, and application interconnection on the basis of ICP, in the era of WEB3.0, everyone can have their own data sovereignty, everyone can realize autonomy for their favorite DAOs, everything is like neurons with rules and orderly governance,and NnsDAO is not just a DAO, it is more like glue, how do you feel? Just DAOs it.'
    },
    {
      title: 'What is Nomos Core?',
      content:
        "Nomos is the core of the entire NnsDAO protocol. It was formed by the community and developers jointly maintaining the early rules before the NnsDAO mainnet went live, which is what Vitalik pointed out before: 'gradual decentralization', used to develop the early protocol rules After the launch of the mainnet, NnsDAO will conduct asset allocation, development progress, and protocol management based on the entire development roadmap and proposal model."
    },
    {
      title: 'What is DAOn Governance?',
      content:
        'DAOn was established at the beginning of its establishment by a catalytic approach and adding restraint rules. Each DAOn will form its own field when it is established, and it will be proposed in the form of a proposal, that is, when each DAOn is established, it will be the same as NDP DAOn.'
    },
    {
      title: 'What is NnsDAO protocol?',
      content:
        'The NnsDAO protocol is a programmable and intelligent modular protocol, which includes but is not limited to the following basic protocol functions: Nomos Core, DAOn domain rules, DAOs service functions and rules, virtual passport system, governance module, and other functions.'
    },
    {
      title: 'What is NDP?',
      content:
        'NDP is the governance token of NnsDAO Protocol. It is a kind of rights for the community to participate in governance and voting after the main network of the NnsDAO protocol runs. However, NDP only occupies a part of the voting weight. NDP holders can participate in Grant, create DAOn, DAOs, Get airdrops, unlock rare NFTs, etc.'
    },
    {
      title: 'What is NnsDAO Virtual Passport?',
      content:
        "In the WEB3.0 era, independent dApps or protocols will record each user's on-chain behavior, and use this to measure the reputation of user behavior. Based on this on-chain behavior, NnsDAO proposes a governance hypothesis based on the user system. At the beginning of the agreement, each user who enters will receive a certain token reward. With the growth of time, under the effect of DAOs, each user will form its own unique virtual reputation."
    },
    {
      title: 'What is Sponsors?',
      content:
        'Sponsors are early supporters of the project, and each user can donate using their own II wallet. All users who participate in the donation will receive tokens in the amount of 2% of the total and will make a part of the airdrop, the number of donations and participation time will determine the final number of tokens the donor will receive. After the official launch of NnsDAO, donors will be rewarded generously, and will also be rewarded with a portion of the token airdrop within the NnsDAO ecosystem. Sponsors Address:76f532b532a89440773abd7b45f513f39369882f4aafecd36809e4dd8d46d820 '
    },
    {
      title: 'What is Airdrops?',
      content:
        'The airdrop is an official NnsDAO event, all those who complete the contest will be rewarded with token, please check the airdrop description for specific rules. Participate in the airdrop now: https://nnsdao.medium.com/nnsdao-protocol-airdrop-activity-description-bf06e788cd6a'
    }
  ]
};

const pressData = [
  {
    title:
      'NnsDAO, a globe-spanning network of decentralized autonomous organizations',
    type: 'Cointelegraph',
    time: 'NOV 11, 2021',
    tags: 'DAOs',
    url: 'https://cointelegraph.com/press-releases/nnsdao-a-globe-spanning-network-of-decentralized-autonomous-organizations',
    imgs: 'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9hMDI3MzUwMDllYTFkYmUzNzY3YWFhYzZhYWZjY2MxMy5qcGc=.jpg'
  },
  {
    title: 'Use Wave Collapse Function To Create A NFT Metaverse',
    type: 'Medium',
    tags: 'Metaverse',
    time: 'Oct 18, 2021',
    url: 'https://nnsdao.medium.com/use-wave-collapse-function-to-create-a-nft-metaverse-3c9a218b84cf',
    imgs: 'https://miro.medium.com/max/1400/1*dsFo8S76u9XdYhF05EDhaA.jpeg'
  },
  {
    title: 'Why is the underlying protocol of NnsDAO called Nomos?',
    type: 'Substack',
    tags: 'Nomos',
    time: 'Sep 15, 2021',
    url: 'https://nnsdao.substack.com/p/why-is-the-underlying-protocol-of',
    imgs: 'https://miro.medium.com/max/1400/0*3QPcyr_E3UqbKykm.jpeg'
  },
  {
    title:
      'Interview with NNS DAO- A Borderless Tech World Unlocking Human Potential',
    type: 'Dfinity Community',
    tags: 'DAOs',
    time: 'Nov 16, 2021',
    url: 'https://www.dfinitycommunity.com/interview-with-nns-dao-a-borderless-tech-world-unlocking-human-potential/',
    imgs: 'https://www.dfinitycommunity.com/content/images/size/w2000/2021/11/NNS-Dao.jpg'
  },
  {
    title:
      'NnsDAO、ユーザーがNDPホワイトリストを無料で応募し、NFTを獲得できるエアドロップコンテストを開始',
    type: 'Hide ac',
    tags: 'Airdrops',
    time: 'Nov 12, 2021',
    url: 'https://hide.ac/articles/qGDUtrTo2',
    imgs: 'https://miro.medium.com/max/1400/0*Gqhbldlv4wFbWrYe.jpg'
  },
  {
    title:
      'DAOエコロジーにおける、NnsDAOトークン解釈、自律性、およびエクイティクレデンシャル',
    type: 'Hide ac',
    tags: 'DAOs Fund',
    time: 'Jan 5, 2022',
    url: 'https://hide.ac/articles/EYYMjNn6m',
    imgs: 'https://miro.medium.com/max/1400/1*2kgDUTQxLmzRTi7HkIbEIw.jpeg'
  }
];

const Home = () => {
  return (
    <React.Fragment>
      <main>
        <div className='bg-primary'>
          {/* <Video /> */}
          <Starfish />
          <Nav />
          {/* Ecosystem */}
          <div className=' '>
            <div className='p-4 text-center text-white' id='ecosystem'>
              Ecosystem
              <div className='p-6 md:flex justify-center items-center md:p-20'>
                <div
                  className='max-w-2xl'
                  data-aos='fade-right'
                  data-aos-offset='100'
                  data-aos-easing='ease-in-sine'>
                  <img
                    src='/imgs/reputation.png'
                    width='850px'
                    height='537px'
                  />
                </div>
                <div className='relative max-w-2xl' data-aos='fade-up'>
                  <a
                    className='text-xl mt-5 cursor-pointer transition duration-500'
                    target='_blank'
                    rel='noopener'
                    href='https://h637e-ziaaa-aaaaj-aaeaa-cai.raw.ic0.app/'>
                    <h2 className='text-xl font-bold text-white mb-2 text-left '>
                      NnsDAO Protocol
                    </h2>
                  </a>
                  <p className='text-white  text-left align-middle text-xs leading-7'>
                    NnsDAO is simply a borderless autonomous organization that
                    provides some basic modular programmable services for
                    building the world of DAOn.
                  </p>

                  <div className='text-left  text-xs leading-7'>
                    <p>·Nnsdao nomos core protocol</p>
                    <p>·DAOn DAOs constraint rules</p>
                    <p>·Virtual passport system</p>
                    <p>·Credit-based voting system</p>
                  </div>
                </div>
              </div>
              <div className='p-6 md:flex justify-center items-center md:p-20'>
                <div
                  className='max-w-2xl'
                  data-aos='fade-right'
                  data-aos-offset='100'
                  data-aos-easing='ease-in-sine'>
                  <img src='/imgs/Icpscan.png' width='840px' height='537px' />
                </div>
                <div className='relative max-w-2xl' data-aos='fade-up'>
                  <a
                    className='text-xl mt-5 cursor-pointer transition duration-500'
                    target='_blank'
                    rel='noopener'
                    href='https://sznps-4aaaa-aaaah-qab2a-cai.raw.ic0.app/'>
                    <h2 className='text-xl font-bold text-white mb-2 text-left '>
                      Icpscan
                    </h2>
                  </a>
                  <p className='text-white  text-left align-middle text-xs leading-7'>
                    Icpscan is a block browser service based on IC.
                  </p>
                  <p className='text-white  text-left align-middle text-xs leading-7 pb-2'>
                    Our vision is to access all Token information within the IC
                    ecosystem, so that users can learn all the ecological
                    dynamics of IC, such as wallet activity, user ranking, token
                    ranking and holders, etc. through one site. The target group
                    of the project will be every user who is interested in IC,
                    and also in aggregating other Dapps within the IC ecology as
                    a tool, all can go through Icpscan to check the content they
                    need in the future.{' '}
                  </p>
                  <div className='text-left  text-xs leading-7'>
                    <p>·View token information </p>
                    <p>·Obtain information about different tokens </p>
                    <p>·Observe address dynamics</p>
                  </div>
                </div>
              </div>
              <div className='p-6 md:flex justify-center items-center md:p-20'>
                <div
                  className='max-w-2xl'
                  data-aos='fade-right'
                  data-aos-offset='100'
                  data-aos-easing='ease-in-sine'>
                  <img src='/imgs/texas.png' width='539px' height='539px' />
                </div>
                <div className='relative max-w-2xl md:pl-10' data-aos='fade-up'>
                  <a
                    className='text-xl mt-5 cursor-pointer transition duration-500'
                    target='_blank'
                    rel='noopener'
                    href='https://lm5fh-ayaaa-aaaah-aafua-cai.raw.ic0.app/'>
                    <h2 className='text-xl font-bold text-white mb-2 text-left '>
                      Texas hold'em{' '}
                    </h2>
                  </a>
                  <p className='text-white  text-left align-middle text-xs leading-7 pb-2 break-words'>
                    There is a famous saying in Texas Hold'em: "Victory comes
                    not from your opponent making more mistakes, but from you
                    making fewer". Texas Hold'em is a very skillful game that
                    combines luck, patience, perseverance, and wisdom together.
                    It tests each person's character, ability and determines the
                    ultimate winner through chips. Developed by DAOs, Texas is
                    completely built on IC and controls all settlements through
                    Motoko Actor smart contract, all codes, contracts, and
                    algorithms are publicly visible, it features
                    decentralization and opens up a new game of life.{' '}
                  </p>
                  <div className='text-left  text-xs leading-7'>
                    <p>·Free chips, login to get experience token</p>
                    <p>·Super jackpot, all the winners </p>
                    <p>
                      ·Tournament, smart contract rewards the ultimate winner
                    </p>
                    <p>·Free circulation of chips, anyone can participate</p>
                    <p>·No ads, the best quality experience</p>
                    <p>·Fair, just and open</p>
                  </div>
                </div>
              </div>
              <div className='p-6 md:flex justify-center items-center md:p-20'>
                <div
                  className='max-w-2xl'
                  data-aos='fade-right'
                  data-aos-offset='100'
                  data-aos-easing='ease-in-sine'>
                  <img src='/imgs/icmarket.png' width='539px' height='539px' />
                </div>
                <div className='relative max-w-2xl md:pl-10' data-aos='fade-up'>
                  <a
                    className='text-xl mt-5 cursor-pointer transition duration-500'
                    target='_blank'
                    rel='noopener'
                    href='https://icmarket.ooo/'>
                    <h2 className='text-xl font-bold text-white mb-2 text-left '>
                      Icmarket
                    </h2>
                  </a>
                  <p className='text-white  text-left align-middle text-xs leading-7 pb-2 break-words'>
                    ICmarket is a 「diversified」 「tradable」platform for NFTs,
                    which provides user-directed creation and collaboration. It
                    also provides subDAO to join and create the common
                    collections and collaborative NFTs.
                  </p>
                  <div className='text-left  text-xs leading-7'>
                    <p>·Derivatives Aggregation.</p>
                    <p>·Unlimited Creations.</p>
                    <p>·Ecological cross-chain.</p>
                    <p>·NDK Proxy, support Multi-Tokens trade.</p>
                    <p>
                      ·All assets are under your full control, displaying your
                      own PFP and PIS via protocol on Web3 applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className='p-6 md:flex justify-center items-center md:p-20'>
                <div
                  className='max-w-2xl'
                  data-aos='fade-right'
                  data-aos-offset='100'
                  data-aos-easing='ease-in-sine'>
                  <img src='/imgs/nlottery.png' width='539px' height='539px' />
                </div>
                <div className='relative max-w-2xl md:pl-10' data-aos='fade-up'>
                  <a
                    className='text-xl mt-5 cursor-pointer transition duration-500'
                    target='_blank'
                    rel='noopener'
                    href='https://ycr3g-2yaaa-aaaah-abq7q-cai.raw.ic0.app/'>
                    <h2 className='text-xl font-bold text-white mb-2 text-left '>
                      NLottery
                    </h2>
                  </a>
                  <p className='text-white  text-left align-middle text-xs leading-7 pb-2 break-words'>
                    Web3 lottery application building on blockchain, using IC in
                    canisters and randomness, fair and just.
                  </p>
                  <div className='text-left  text-xs leading-7'>
                    <p>·Easy to use, three steps to complete the earnings.</p>
                    <p>·Multiple Token pools for fast payouts.</p>
                    <p>·Millions of GHOST, DOGMI, NDP jackpots, buy to win.</p>
                    <p>·Trade eggs for tickets, new ways to play.</p>
                  </div>
                </div>
              </div>
              {/* <div className='p-6 md:flex justify-center items-center md:p-20'>
                <div
                  className='max-w-2xl'
                  data-aos='fade-right'
                  data-aos-offset='100'
                  data-aos-easing='ease-in-sine'>
                  <img src='/imgs/nswap.jpg' width='539px' height='539px' />
                </div>
                <div className='relative max-w-2xl md:pl-10' data-aos='fade-up'>
                  <a
                    className='text-xl mt-5 cursor-pointer transition duration-500'
                    target='_blank'
                    rel='noopener'
                    href='https://twitter.com/nswap_ooo'>
                    <h2 className='text-xl font-bold text-white mb-2 text-left '>
                      NSwap
                    </h2>
                  </a>
                  <p className='text-white  text-left align-middle text-xs leading-7 pb-2 break-words'>
                    Reputation and transaction based swap protocol.
                  </p>
                  <div className='text-left  text-xs leading-7'>
                    <p>
                      ·Each platform can interoperate with other platforms and
                      reputation is not isolated.
                    </p>
                    <p>
                      ·Everything we've built that you can use, operating
                      forever on the IC.{' '}
                    </p>
                    <p>
                      ·The attributes of the NFT set represent the participation
                      and reputation of the members.
                    </p>
                  </div>
                </div>
              </div> */}
              {/* <div className='p-6 md:flex justify-center items-center md:p-20'>
                <div
                  className='max-w-2xl'
                  data-aos='fade-right'
                  data-aos-offset='100'
                  data-aos-easing='ease-in-sine'>
                  <img src='/imgs/icptree.png' width='539px' height='539px' />
                </div>
                <div className='relative max-w-2xl md:pl-10' data-aos='fade-up'>
                  <a
                    className='text-xl mt-5 cursor-pointer transition duration-500'
                    target='_blank'
                    rel='noopener'
                    href='https://hrrqn-4aaaa-aaaai-aasoq-cai.raw.ic0.app/'>
                    <h2 className='text-xl font-bold text-white mb-2 text-left '>
                      Icptree
                    </h2>
                  </a>
                  <p className='text-white  text-left align-middle text-xs leading-7 pb-2 break-words'>
                    A link to your Web 3.0 application. Use links to link
                    different people and create value by doing so. Use links to
                    distinguish people with the same values and consensus, and
                    then use DAOs to aggregate these people with common
                    interests to create dApps.
                  </p>
                  <div className='text-left  text-xs leading-7'>
                    <p>·Keep safe, trusted, private.</p>
                    <p>·Built on ICP and can be used by anyone.</p>
                    <p>
                      ·Icptree doesn't track any personal data on your visitors.
                    </p>
                    <p>
                      ·Data persistence, Everything is stored on the blockchain.
                    </p>
                    <p>
                      ·The more people in the bi-directional link, the more
                      tokens you get.
                    </p>
                  </div>
                </div>
              </div> */}
              {/* <div className='md:flex flex-row justify-center'>
                <div className='ec-box'>
                  <img src='/imgs/icpdrops.png' width='256px' height='107px' />
                  <div className='ec-text' data-aos='fade-up'>
                    Icpdrops is an integrated airdrop platform for the IC
                    ecosystem. After each authorized Nnsdao user can obtain
                    different rights and interests, then participate in the
                    airdrop within the IC ecosystem.
                    <div className='ec-bottom-text'>
                      <p>- Reputation-based airdrop system.</p>
                      <p>
                        - Participate in the ecology to get different token
                        airdrops.
                      </p>
                      <p>
                        - Follow the status of new coins and airdrops in real
                        time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='ec-box'>
                  <img src='/imgs/neuron.png' width='100px' height='100px' />
                  <div className='flex relative ml-24 -top-16'>Nns Bio</div>
                  <div className='ec-text' data-aos='fade-up'>
                    Nns bio, Your web3 in one identity.
                    <div className='ec-bottom-text'>
                      <p>- On-chain Web3 identity based on DID and Nomos.</p>
                      <p>- DID-based bidirectional links.</p>
                      <p>- A collection of badges and NFTs.</p>
                      <p>- Influence spheres of social graphs.</p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* nnsdao Protocol */}
              <div className='mnp-core' id='daon'>
                <p className='mn-protocol'> Nnsdao Protocol </p>

                <div className='mnp-text' data-aos='fade-up'>
                  <p>
                    Nomos Core, Underlying protocol principles after mainline.
                  </p>
                  <p>
                    DAOn, The constraint rules are generally referred to as the
                    ground rules of the current domain.
                  </p>
                  <p>NNSDAO SDK, is realized based on DAOBasic SDK</p>
                  <p>
                    NID, NID is built on the basis of the ICP ecosystem, through
                    which the user reputation value is acquired, the future will
                    continue to improve the corresponding algorithm.
                  </p>
                </div>
                <div className='justify-center mx-auto bg-cover md:mx-96'>
                  <img
                    width='1111px'
                    height='514px'
                    src='/imgs/nnsdao-nomos-core.svg'
                  />
                </div>

                {/* roadmap */}
                <div className='relative top-20 md:top-60' id='roadmap'>
                  {' '}
                  Roadmap{' '}
                </div>
                <div className='relative -left-16 mt-6 justify-center md:-left-1/4 md:-mt-44'>
                  <img width='2256px' height='2253px' src='/imgs/roadmap.png' />
                </div>
                {/* faq */}
                <div
                  className='relative md:-top-60'
                  id='faq'
                  data-aos='fade-up'>
                  <div> FAQ’s</div>
                  <div className='md:w-1/11 mx-auto text-left '>
                    <Faq
                      data={data}
                      styles={{
                        bgColor: 'false',
                        titleTextColor: '#FFFFFF',
                        titleTextSize: '16px',
                        rowTitleColor: '#FFFFFF',
                        rowTitleTextSize: 'medium',
                        rowContentColor: '#C9CCD1',
                        rowContentTextSize: '14px',
                        arrowColor: 'white'
                      }}
                    />
                  </div>
                </div>

                {/* Press */}

                <div className='relative md:-top-28  mt-5'>
                  <div>News</div>
                  <div className='flex justify-center items-center py-10'>
                    <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
                      {pressData.map((pt, i) => (
                        <div
                          className='max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 cursor-pointer'
                          key={i}>
                          <h3 className='mb-3 text-xl font-bold text-indigo-600'>
                            {pt.type}
                          </h3>
                          <div className='relative'>
                            <img
                              className='w-full rounded-xl'
                              src={pt.imgs}
                              alt='Colors'
                            />
                            <p className='absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg'>
                              {pt.tags}
                            </p>
                          </div>
                          <a href={pt.url} target='_blank' rel='noopener'>
                            {' '}
                            <h1 className='mt-4 text-gray-500 text-xl font-bold cursor-pointer'>
                              {pt.title}
                            </h1>{' '}
                          </a>
                          <div className='my-4'>
                            <div className='flex space-x-1 items-center'>
                              <span>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-6 w-6 text-indigo-600 mb-1.5'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'>
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                  />
                                </svg>
                              </span>
                              <p className='text-black justify-center items-center text-sm -mt-2'>
                                {pt.time}
                              </p>
                            </div>
                            <button className='mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg'>
                              <a href={pt.url} target='_blank' rel='noopener'>
                                Read More{' '}
                              </a>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* NnsDAO Newsletter */}
              {/* max-w-lg  container  */}
              <div id='newsletter' className='mt-10'>
                <div className='text-lg text-white font-bold capitalize'>
                  {' '}
                  Get our weekly
                </div>
                <div className='max-w-xl mx-auto flex items-center relative'>
                  <div className='w-1/2 mr-4 md:mr-10'>
                    <img
                      width='100%'
                      height='100%'
                      src='/imgs/newsletter.png'
                    />
                  </div>
                  <div className='md:w-2/4 pt-36 relative -top-16'>
                    <div className='font-medium text-newsletterText text-left uppercase mb-7'>
                      newsletter
                    </div>
                    <p className='text-white text-sm leading-5 text-left md:w-max'>
                      Get weekly updates on the newest design stories, case
                    </p>
                    <p className='md:w-max text-white text-sm leading-5 text-left '>
                      studies and tips right in your mailbox.{' '}
                    </p>
                    <p className='md:w-max text-white text-sm leading-5 text-left transform hover:scale-70'>
                      {' '}
                      Subscribe Now!
                    </p>
                  </div>
                </div>

                <div className='w-full flex flex-row mx-auto justify-center items-center relative '>
                  {/* <form className=" flex"> */}
                  {/* <input type="text" value="email" className="newletter-input px-5 py-3.5 text-newsletterHolder   focus:outline-none focus:ring focus:text-primary" placeholder="your@mail.com"/> */}
                  <a
                    href='https://nnsdao.substack.com/'
                    target='_blank'
                    rel='noopener'>
                    {' '}
                    <button className='md:w-32 uppercase button-blue hover:bg-white transform bg-blue-200 '>
                      Subscribe
                    </button>
                  </a>
                  {/* </form> */}
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

export default Home;
