'use client'

import { useRouter } from 'next/navigation'
import { useState, useContext } from 'react'
import MoreInfo from '../moreinfo/moreinfo'
import './mainbanner.style.css'
import AppContext from '@/context/context'

export default function MainBanner({movie, setIsMoreInfo}) {
    const bannerStyle = {
        backgroundImage: `url(${movie.imgLandscape})`,
        backgroundSize: 'cover'
    }

  return (
    <div className="main-page-banner-container" style={bannerStyle}>
        <div className='main-page-banner-info-container'>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <div className='main-page-banner-btn-container'>
              <a href={`/watch/${movie.id}`}><button>Play</button></a>
              <button onClick={() => setIsMoreInfo(prev => !prev)}>More info</button>
            </div>
        </div>
    </div>
  )
}
