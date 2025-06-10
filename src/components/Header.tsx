'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FaApple, FaSpotify, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import LogoTagline from './LogoTagline';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/all-songs', label: 'All Songs' },
    { href: '/albums/for-the-glory', label: 'For the Glory' },
    { href: '/albums/my-kind-of-success', label: 'My Kind of Success' },
    { href: '/live', label: 'Live' },
    { href: '/store', label: 'Store' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <header className="bg-black rounded-lg mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between mt-2">
      {/* Logo and Tagline */}
      <div className="mt-4 pr-6 sm:pr-0 cursor-pointer">
        <LogoTagline />
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow flex justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 bg-black/50 rounded-full px-3 py-2 backdrop-blur-sm">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-4 py-2 rounded-full text-md font-medium transition-all duration-300 ease-in-out flex items-center justify-center
                    ${active 
                      ? 'text-red-500 hover:bg-red-600/20 hover:scale-100' 
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20 hover:scale-100'
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

      {/* Desktop Icons */}
      <div className="flex items-center space-x-4">
        <a href="https://music.apple.com/us/artist/scott-glorioso/1637244084" target="_blank" className="text-white hover:text-gray-400 hover:scale-110 text-3xl duration-300 mr-1">
          <FaApple />
        </a>
        <a href="https://open.spotify.com/artist/2r4EbUh8eNVrjHb4KAS5rp?si=yvBkF0F4SuymbAPO4VSClw" target="_blank" className="text-white hover:text-gray-400 hover:scale-110 duration-300 text-3xl">
          <FaSpotify />
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="ml-6 flex-1 flex justify-end md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-red-500 transition-colors duration-300 text-2xl border p-2 mr-4"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
    
    {/* Mobile Menu Overlay */}
    {isMenuOpen && (
      <div className="fixed inset-0 z-50 md:hidden">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeMenu}
        />
        {/* Menu Content */}
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-b from-gray-900 to-black shadow-2xl transform transition-transform duration-300 ease-in-out">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="text-white hover:text-red-500 transition-colors duration-300 text-2xl"
            >
              <FaTimes />
            </button>
          </div>
          {/* Menu Items */}
          <nav className="px-4 py-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`
                    block px-4 py-3 rounded-lg mb-2 text-lg font-medium transition-all duration-300 ease-in-out
                    ${active 
                      ? 'text-red-500 bg-red-600/10 border-l-4 border-red-500' 
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          
          {/* Social Icons in Mobile Menu */}
          <div className="absolute bottom-8 left-4 flex space-x-4">
            <a 
              href="https://music.apple.com/us/artist/scott-glorioso/1637244084" 
              target="_blank" 
              className="text-white hover:text-red-500 text-2xl transition-colors duration-300"
            >
              <FaApple />
            </a>
            <a 
              href="https://open.spotify.com/artist/2r4EbUh8eNVrjHb4KAS5rp?si=yvBkF0F4SuymbAPO4VSClw" 
              target="_blank" 
              className="text-white hover:text-red-500 text-2xl transition-colors duration-300"
            >
              <FaSpotify />
            </a>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Header;
