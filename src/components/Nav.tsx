import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const links = [
    { text: 'Home', to: 'home' },
    { text: 'Ecosystem', to: 'ecosystem' },
    { text: 'DAOn', to: 'daon' },
    { text: 'Roadmap', to: 'roadmap' },
    { text: 'FAQ', to: 'faq' },
  ]

  const activeClass = 'text-white transition delay-150 duration-500'
  const inactiveClass = 'text-white opacity-50 transform hover:scale-90'

  // Anchor
  const [anchor, setValue] = useState('home');

  useEffect(() => {
    console.log(anchor)
    ifAnchorJustScorll(anchor)
  }, [anchor]);

  let ifAnchorJustScorll = (anchor: string) => {
    if (!!anchor) {
      let anchorElement = document.getElementById(anchor);
      if (anchorElement) {
        window.scrollTo(0, anchorElement.offsetTop - window.innerHeight / 2);
      }
    }
    else {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
  return (
    <nav className="h-screen z-50">
      <div className="ml-11 ">
        <div className="flex items-center  justify-between  h-16 lg:fixed lg:w-full z-50">
          <div className="flex ">
            <div className="relative mt-6">
              <a href="/" className="cursor-pointer transition duration-300">
              <img
                className="h-10 w-24"
                src="/imgs/logo.png"
                alt="nnsdao logo"
              />
              </a>
            </div>
            
          </div>
          <div className="hidden md:block">
            {/* right nav */}
            <div className="ml-4 flex relative  md:ml-6 mr-20 mt-6">

              <div className="hidden md:block ">
                <div className="ml-10 flex   space-x-10">
                  {links.map((link, i) => (
                    <Link
                      key={link.text}
                      to={''}
                      onClick={() => {
                        setValue(
                          link.to
                        );
                      }}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        anchor === link.to
                          ? activeClass
                          : inactiveClass
                      } ${i > 0 && 'ml-4'}`}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="z-50 inline-flex items-center justify-center p-2 pr-5 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
            >
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        
      </div> 
      {/* Menu open: "block", Menu closed: "hidden"  */}
      <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {links.map((link, i) => (
            <Link
              key={link.text}
              to={''}
              onClick={() => {
                setValue(
                  link.to
                );
              }}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${anchor === link.to ? activeClass : inactiveClass
                } ${i > 0 && 'mt-1'}`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav
