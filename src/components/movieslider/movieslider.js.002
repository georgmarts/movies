'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import './movieslider.style.css'

export default function MovieSlider({category, genre, country, year, label}) {

    const router = useRouter()
    const container = useRef(null)
    const [width, setWidth] = useState(0)
    const [windowWidth, setWindowWidth] = useState(0)
    const [slideCount, setSlideCount] = useState(0)
    const [transition, setTransition] = useState(null)
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)   
      async function fetchData() {
      try {
        const res = await fetch(`/api/allmovies/1?category=${category}&genre=${genre}&country=${country}&year=${year}`)
        if(!res.ok) throw new Error('Server did not respond')
        const data = await res.json()
        setData(data)
        setError(null)
      } catch(error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
      fetchData() 
    }, [])      
    
    let moviesPerSlide = 5
    let movieWidth = width/moviesPerSlide
    if (windowWidth <= 1050) {movieWidth = width/3} // the order of conditions must be the same as in CSS, don't know why
    if (windowWidth <= 700) {movieWidth = width/4}
    const slideLimit = data.length*movieWidth - width
    let slideDistance = slideCount*width
    if(slideDistance < -slideLimit && data.length > moviesPerSlide) {slideDistance = -slideLimit}

    // get WINDOW and DIV WIDTH dynamically

    useEffect(() => {
      setWindowWidth(window.innerWidth)
      setWidth(container.current.offsetWidth)
      function handleResize() {
        setWindowWidth(window.innerWidth)
        setWidth(container.current.offsetWidth)
      }
      window.addEventListener('resize', handleResize)
    }, [])

    // TOGGLE TRANSITION EFFECT

    useEffect(() => {
        setTransition(null)
      }, [width])

    // STYLE OF SLIDING CONTAINER

    const childContainer = {
      transform: `translateX(${slideDistance}px)`,
      transition: transition
    }

    // FUNCTION FOR SLIDING BUTTONS

      function slide(arg) {
        setSlideCount(slideCount + arg)
        setTransition('transform 1s')
      }

  return (<>
    <main className='movie-slider-hero-container'>
        {isLoading && <div className='loader'></div>}
        {error && <p className="loading">{error}</p>}
        {!isLoading && !error && <>
        {data.length != 0 && <div className='movie-slider-label'>{label} <a href={`/${category}`} className='show-all'>Show all</a></div>}
        <div ref={container} className="movie-slider-overlay-container">
            <div className="movie-slider-container" style={childContainer}>
                {data?.map((movie, i) =>
                  <div key={i} className="movie-slider-single-container">
                    <a href={`/movie/${movie.id}`}>
                    <div className='movie-slider-img-container'>
                    <picture >
                      <source media="(max-width:700px)" srcSet={movie.imgPortrait}/>
                      <img className='movie-slider-img' src={movie.imgLandscape}/>
                    </picture>
                    <div className="dark-layer"></div>
                    <p className='movie-title'>{movie.title}</p>
                    </div>
                    </a>
                  </div>)}
            </div>
            {slideDistance != 0 && data.length > moviesPerSlide && <img className='movie-slider-left-btn' src='/angle-left.svg' onClick={() => slide(1)}/>}
            {slideDistance != -slideLimit && data.length > moviesPerSlide && <img className='movie-slider-right-btn' src='/angle-right.svg' onClick={() => slide(-1)}/>}            
        </div>
        </>}
    </main>
    </>
  )
}
