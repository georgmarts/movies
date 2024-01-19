'use client'

import './loginerror.style.css'

export default function LoginError({params, searchParams}) {
  const error = searchParams.error
  return (
    <div className='loginerror-hero-container'>{error}</div>
  )
}
