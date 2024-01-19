'use client'

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import './signup.style.css'


export default function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isFormCompleted, setIsFormCompleted] = useState(false)

    useEffect(() => {
      isFormCompleted && setTimeout(() => {
        signIn()
      }, 3000)
      }, [isFormCompleted])

     async function fetchData(e) {
          e.preventDefault()
          if (username.trim() != '' && password.trim() != '' && email.trim() != '') {
          const res = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({username, password, email}),
            headers: {
                'Content-Type': 'application.json'
            },},)
          const data = await res.json()
          setUsername('')
          setPassword('')
          setEmail('')
          setIsFormCompleted(prev => !prev)
          } else if (username.trim() === '' && password.trim() === '' && email.trim() === '') {
            alert('You did not fill in the form') 
          } else if (username.trim() === '') {
            alert('You did not specify username')
          } else if (password.trim() === '') {
            alert('You did not specify password')
          } else if (email.trim() === '') {
            alert('You did not specify email')
          }
        }

  return (<main className="form-container">
  <div className="circle-1"></div>
  <div className="circle-2"></div>
  <div className="form-main-div">
    { isFormCompleted ? <p>Congratulations! You have registered an account on Movie Site<br></br>
    You will be redirected to the login page in 3 seconds</p> :
    <form className="inputs-container" >
        <p className="form-label">Registration</p>
        <input className="form-input" value={username} type='text' placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
        <input className="form-input" value={password} type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <input className="form-input" value={email} type='email' placeholder="Email or Phone" onChange={(e) => setEmail(e.target.value)}/>
        <input className="form-btn" type='submit' value="Sign up" onClick={fetchData}/>
    </form> }

  </div>
  </main>)
}
