import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import VideoPlayer from "react-background-video-player"


const Nav = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()

  const links = [
    { text: 'Home', to: '/' },
    { text: 'Ecosystem', to: '/ecosystem' },
    { text: 'DAOn', to: '/daon' },
    { text: 'Roadmap', to: '/roadmap' },
    { text: 'FAQ', to: '/faq' },
  ]

  const activeClass = 'text-white'
  const inactiveClass = 'text-gray-300 hover:text-white hover:bg-gray-700'

  return (
    <nav className="h-screen relative">
      <div className="ml-11 ">
        <VideoPlayer
          className="w-screen h-3/5 bg-primary"
          src={
            "/imgs/background.mp4"
          }
          autoPlay={true}
          muted={true}
        />
        <div className="flex items-center  justify-between  h-16">
          <div className="flex ">
            <div className="relative mt-6">
              <img
                className="h-10 w-24"
                src="/imgs/logo.png"
                alt="nnsdao logo"
              />
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
                      to={link.to}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        location.pathname === link.to
                          ? activeClass
                          : inactiveClass
                      } ${i > 0 && 'ml-4'}`}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
              {/* notifications */}
              {/* <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button> */}

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                  >
                    <span className="sr-only">Open user menu</span>
                    {/* <span>Login</span> */}
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
                {showProfileMenu && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
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
      
      <div className="flex absolute left-1/3 top-10">
         <img  width="1034px" height="1005px" src="/imgs/starfish.png"  alt="nnsdao starfish logo" />
      </div>

      <div className="flex relative text-white">
                <p className="flex absolute top-60 left-80 text-4xl "> The boundaryless <br/>
                autonomous organization.</p>
      </div>

      <div className="flex relative text-white">
        <p className="flex  absolute top-96 left-80  text-4xl"> DAOs SINGULARITY </p>
        <img  className="flex  absolute  top-120 left-80"  width="204px" height="56px" src="/imgs/bg-whitepaper-hover.png"  alt="nnsdao whitepaper" />
      </div>
      {/* Menu open: "block", Menu closed: "hidden"  */}
      <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {links.map((link, i) => (
            <Link
              key={link.text}
              to={link.to}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === link.to ? activeClass : inactiveClass
              } ${i > 0 && 'mt-1'}`}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                kk
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                kk@nnsdao.com
              </div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Your Profile
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav