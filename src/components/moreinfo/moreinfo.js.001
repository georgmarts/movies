'use client'

import { useState } from 'react'
import './moreinfo.style.css'

export default function MoreInfo({movie, setIsClosed}) {

  const averageRating = (movie.rating?.reduce((a, b) => a + Number(b.rating), 0))/movie.rating?.length
  const averageRatingRounded = Math.round(averageRating*10)/10
  const actors = [
    {name: 'Matthew McConaughey', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Matthew_McConaughey_2019_%2848648344772%29.jpg/440px-Matthew_McConaughey_2019_%2848648344772%29.jpg'},
    {name: 'Anne Hathaway', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Anne_Hathaway_at_Berlinale_2023_%28cropped%29.jpg/440px-Anne_Hathaway_at_Berlinale_2023_%28cropped%29.jpg'},
    {name: 'Jessica Chastain', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/SDCC_2015_-_Jessica_Chastain_%2819111308673%29_%28cropped%29.jpg/440px-SDCC_2015_-_Jessica_Chastain_%2819111308673%29_%28cropped%29.jpg'},
    {name: 'Bill Irwin', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bill_Irwin_by_Gage_Skidmore.jpg/440px-Bill_Irwin_by_Gage_Skidmore.jpg'},
    {name: 'Ellen Burstyn', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Ellen_Burstyn_at_the_2009_Tribeca_Film_Festival.jpg/440px-Ellen_Burstyn_at_the_2009_Tribeca_Film_Festival.jpg'},
    {name: 'Michael Caine', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Michael_Caine_-_Viennale_2012_a_%28cropped%29.jpg/440px-Michael_Caine_-_Viennale_2012_a_%28cropped%29.jpg'}
  ]

  return (<main className='more-info-container'>
    <div className='more-info-card'>
        <div onClick={() => setIsClosed(prev => !prev)} className='more-info-close'>Close</div>
        <div className='more-info-left-side'>
            <div className='more-info-img' style={{backgroundImage: `url(${movie.imgPortrait})`}}></div>
            <button className='more-info-play-btn'>Watch</button>
            <button className='more-info-play-btn'>Add to fav</button>
        </div>
        <div className='more-info-text-card'>
            <div className='more-info-title'>{movie.title}</div>
            <div className='more-info-description'>{movie.description}</div>
            <div className='border-bottom'></div>
            <div className='more-info-details'>{averageRatingRounded ? <span className='text-red'>RATING:</span> : null} {averageRatingRounded ? averageRatingRounded : null} <span className='text-red'>LANGUAGE:</span> English, Spanish<br></br><span className='text-red'>COUNTRY:</span> USA  <span className='text-red'>GENRE:</span> {movie.genre}<br></br><span className='text-red'>YEAR:</span> {movie.year}</div>
            <div className='border-bottom'></div>
            <div className='more-info-details'>Starring:</div>
            <div className='actors-card'>
            {actors.map(actor => <div className='actor-card'> <div className='actor-img' style={{backgroundImage: `url(${actor.img})`}}></div><div className='actor-name'>{actor.name}</div></div>)}
            </div>
    </div>
  </div>
  </main>
  )
}
