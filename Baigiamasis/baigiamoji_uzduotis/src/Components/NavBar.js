"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import "./NavBar.css";
import Image from 'next/image';

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);

  const handleBurgerClick = () => {
    setNavActive(prev => !prev);
  };

  return (
    <header>
      <Link href="/"><Image  src="/logo.svg" alt="logo" width={153} height={40}/></Link>
      <nav className={navActive ? 'nav-active' : 'nav-hidden'}>
        <Link href="/">Home</Link>
        <Link href="/AboutUS">About Us</Link>
        <Link href="/Services">Services</Link>
        <Link href="/LifeStyle">LifeStyle</Link>
        <Link href="/ContactUs" className="contact-button-hidden">Contact Us</Link>
      </nav>
      <Link href="/ContactUs" className="contact-button">Contact Us</Link>
      <div 
        className={`burger ${navActive ? 'toggle' : ''}`} 
        onClick={handleBurgerClick} 
        aria-expanded={navActive}
        aria-label="Toggle Navigation"
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        
      </div>
    </header>
  );
};

export default NavBar;
