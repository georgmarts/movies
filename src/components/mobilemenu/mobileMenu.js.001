'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import './mobileMenu.style.css'

export default function MobileMenu() {

  const [isHamburderClicked, setIsHamburderClicked] = useState(false)

  function handleHamburgerClick() {
    setIsHamburderClicked(prev => !prev)
    document.body.classList.toggle('change')
  }

  const mobileMenuDropdownContainer = {
    height: isHamburderClicked ? '100vh' : '0',   
    overflow: 'hidden' 
  }

  return (
    <main className='mobile-menu-container'>
        <div className='hamburger' onClick={handleHamburgerClick}>
          {/* <p className='mobile-menu-label'>MENU</p> */}
          <span className='hamburger-icon'>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          </span>
        </div>
        <div className='mobile-menu-links-container' style={mobileMenuDropdownContainer}>
          <Link href='/' onClick={handleHamburgerClick}>Home</Link>
          <Link href='favorites/1' onClick={handleHamburgerClick}>Favorites</Link>
          <Link href='/movie' onClick={handleHamburgerClick}>Movies</Link>
          <Link href='/tvshow' onClick={handleHamburgerClick}>TV Shows</Link>
          <Link href='/cartoon' onClick={handleHamburgerClick}>Cartoons</Link>
          <Link href='/anime' onClick={handleHamburgerClick}>Anime</Link>
        </div>
    </main>
  )
}
