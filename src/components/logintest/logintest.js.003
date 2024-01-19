'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import './singin.style.css'

export default function SignIn() {
    const { data: session } = useSession()
    const [data, setData] = useState([])
    const [sessionValue, setSessionValue] = useState()
    const router = useRouter()
  
    if (session?.user) {
      return (
        <>
          <div className="profile">
            <div className="hero-link">Profile</div>
            <div className="dropdown">
              <button className="dropdown-link" onClick={() => signOut()}>Sign out</button>
            </div>
          </div>

        </>
      )
    }
    return (
      <>
        <button className="main-menu-link" onClick={() => signIn()}>Login</button>
        <button className="main-menu-link" onClick={() => router.push('http://localhost:3000/signup')}>Register</button>
      </>
    )
  }
  