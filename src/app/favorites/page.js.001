'use client'

import FavMoviesGrid from '@/components/favmoviesgrid/favmoviesgrid'
import AppContext from '@/context/context'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import './favorites.style.css'


export default function Favorites() {
    const {data: session} = useSession()
    const [user, setUser] = useState({})

    // USER DATA

    async function fetchedData() {
      const response = await fetch(`/api/user/${session.user.id}`)
      const data = await response.json()
      setUser(data)
    }

    useEffect(() => {
        session && fetchedData()
        }, [session])

    // ADD TO FAVORITES

    async function addToFavs(movie) {
      const res = await fetch(`/api/favs/${session.user.id}`, {
        method: 'POST',
        body: JSON.stringify({movie}),
        headers: {
            'Content-Type': 'application.json'
        },},)
      fetchedData()
    }

  return (
    <AppContext.Provider value={{}}>
    <div className='favorites-hero-container'>
      <FavMoviesGrid props={{user, addToFavs}}/>
    </div>
    </AppContext.Provider>
  )
}
