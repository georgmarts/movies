'use client'

import './singlepagebanner.style.css'
import MoreInfo from '@/components/moreinfo/moreinfo'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import Link from 'next/link'
import Rating from '../rating/page'

export default function SinglePageBanner({addToFavs, movie, user}) {
    const router = useRouter()
    const [isClosed, setIsClosed] = useState(true)

    const bannerStyle = {
        backgroundImage: `url(${movie.imgLandscape})`,
        backgroundSize: 'cover'
    }

    const addedToFavs = user.favorites?.some(usermovie => usermovie.id === movie?.id)

  return (<main>
    {Object.keys(movie).length === 0 && <p className='global-loading'>Loading...</p>}
    {Object.keys(movie).length != 0 && <div className="single-page-banner-container" style={bannerStyle}>
        <div className='dark-filter'></div>
        <div className='single-page-banner-info-container'>
            <Rating/>
            <h1>{movie.title}</h1>
            <p className='movie-description'>{movie?.description?.slice(0, 180)}...</p>
            <div className='single-page-banner-btn-container'>
              <button disabled={!movie}><a href={`/watch/${movie.id}`}>Play</a></button>
              <button onClick={() => setIsClosed(prev => !prev)}>More info</button>
              {!addedToFavs && Object.keys(user).length != 0 && <button onClick={addToFavs}>Add</button>}
              {addedToFavs && <button onClick={() => addToFavs(movie)}>Remove</button>}
            </div>
        </div>
    </div>}
    {!isClosed && <MoreInfo setIsClosed={setIsClosed} movie={movie}/>}
    </main>
  )
}
