'use client'

import Header from '@/components/header/header'
import { SessionProvider } from 'next-auth/react'
import MobileMenu from '@/components/mobilemenu/mobileMenu'
import Footer from '../components/footer'
import './globals.css'

export default function RootLayout({ children }) { 

  return (
    <html lang="en">
      <head/>
      <body>
        <SessionProvider>
          <div><Header className='header'/>
          <MobileMenu/></div>
          <div className='children'>{children}</div>
        <Footer className='footer'/>
        </SessionProvider>
        </body>
    </html>
  )
}