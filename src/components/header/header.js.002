'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import './header.style.css'
import DarkModeBtn from '../darkmodebtn/darkmodebtn'
import SignIn from '../logintest/logintest'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Header() {

    const router = useRouter()
    const { data: session } = useSession()    

    return <main className='header-container'>
        <div className="main-menu-container">
        <a href='/'><div className='logo'></div></a>
            <a className="main-menu-link" href='/movie'>Movies</a>
            <a className="main-menu-link" href='/cartoon'>Cartoons</a>
            <a className="main-menu-link" href='/tvshow'>TV Shows</a>
            <a className="main-menu-link" href='/anime'>Anime</a>
            <a className="main-menu-link search-link" href='/search/1'>Search</a>
        </div>
        <div className='fav-and-login-container'> 
            {session && <a className="main-menu-link" href='/favorites'>Favorites</a>}
            <SignIn></SignIn>
        </div>
    </main>
    
}
