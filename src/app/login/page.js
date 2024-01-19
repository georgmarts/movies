'use client'

import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState, useRef, useContext } from "react"
import './login.css'

export default function SignUp({searchParams}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {data: session} = useSession()
    const [error, setError] = useState()
    const router = useRouter()

    async function submit(e) {
      e.preventDefault()
      //  try { // signIn('credentials', {username: username, password: password, callbackUrl: '/'})
      //   const result = await signIn('credentials', {email, password, redirect: false})
      //   if(!result.ok) {throw new Error('Error'), console.log('yes')
      // }
      //  } catch(error) {
      //     setError(error.message)
      //     console.log('no')
      //  }
      // const result = await signIn('credentials', {email, password, redirect: false})
      // console.log(result)
      // console.log('1')
      const result = await signIn('credentials', {email, password, redirect: false})
      result.error ? setError(result.error) : (setError(null),  router.push('/'))
      setEmail('')
      setPassword('')
    }
    

  return (
  <main className="form-container">
  <div className="circle-1"></div>
  <div className="circle-2"></div>
  <div className="form-main-div">
    <form className="inputs-container">
        <p className="form-label">Login</p>
        <input className="form-input" value={email} type='text' placeholder="Username" onChange={(e) => setEmail(e.target.value)}/>
        <input className="form-input" value={password} type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <input className="form-btn" type='submit' value="Log in" onClick={submit}/>
        <p className="login-error">{error}</p>
    </form>
    {/* {session?.user && <p style={{color: 'white'}}>{JSON.stringify(session)} is signed in</p>} */}
  </div>
  </main>)
}
