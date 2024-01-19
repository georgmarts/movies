'use client'

import AppContext from "@/context/context"
import { useSession } from "next-auth/react"
import { useEffect, useState, useRef, useContext } from "react"
import './page.style.css'

export default function Rating() {
    const context = useContext(AppContext)
    const movie = context.movie
    const rateMovie = context.rateMovie
    const [scrollOffset, setScrollOffset] = useState(0)
    const [ratingOffset, setRatingOffset] = useState(0)
    const [mouseStatus, setMouseStatus] = useState(false)
    const [rating, setRating] = useState(0)
    const {data: session} = useSession()
    
    const container = useRef()
    let containerWidth = 300
    const containerHeight = containerWidth/10
  
    const averageRating = (movie.rating?.reduce((a, b) => a + Number(b.rating), 0))/movie.rating?.length
    const currentRating = averageRating*containerHeight
    const averageRatingRounded = Math.round(averageRating*10)/10
    const didUserRatedMovie = movie.rating?.some(rating => rating.user === session?.user.id)
  
    const containerStyle = {
      width: `${containerWidth}px`,
      height: `${containerHeight}px`
    }
  
    const scrollStyle = {
      transform: `translateX(${-containerWidth+scrollOffset}px)`
    }
  
    const ratingStyle = {
      transform: `translateX(${-containerWidth+ratingOffset}px)`
    }
  
    function handleMouseOver() {
      setMouseStatus(true)
    }
  
    function handleMouseMove(e) {
      if(!mouseStatus || didUserRatedMovie || !session) return;
      e.preventDefault()
      const offsetLeft = container.current.getBoundingClientRect().left
      setScrollOffset(e.pageX - offsetLeft)
    }
  
    function handleMouseLeave() {
      setMouseStatus(false)
      setScrollOffset(0)
    }
  
    function handleClick(e) {
      const offset = container.current.getBoundingClientRect().left
      rateMovie((e.pageX - offset)/containerHeight)
    }
  
    useEffect(() => {
      scrollOffset > containerWidth ? setScrollOffset(containerWidth) : null
      scrollOffset < 0 ? setScrollOffset(0) : null
      setRatingOffset(currentRating)
    }, [scrollOffset, currentRating])
    
  
    return <main className="rating-hero-container">
      {movie.rating && <div className='average-rating-value'>{averageRatingRounded}</div>}
      <div ref={container} className='rating-container' style={containerStyle}
      onPointerDown={handleMouseOver}
      onPointerOver={handleMouseOver}
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      onPointerUp={handleClick}>
      <div className='empty'></div>
      <div className='rating' style={ratingStyle}></div>
      <div className='scroll' style={scrollStyle}></div>
  
  <svg  className='star-container' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 50"><defs></defs>
  <path className="cls-1" d="M359.74,1438.67H349.55V1408a1.12,1.12,0,0,0,.31.77l11.2,11.46a1.08,1.08,0,0,1,.3,1l-2.64,16.18A1.07,1.07,0,0,0,359.74,1438.67Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M349.55,1408v-19.36h25a1,1,0,0,0-.92.6L366.69,1404a1.07,1.07,0,0,1-.77.6l-5.79.88-9.7,1.48A1.06,1.06,0,0,0,349.55,1408Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M388.88,1438.54a1,1,0,0,0,.48.13H359.74a1,1,0,0,0,.48-.13l13.84-7.64a1,1,0,0,1,1,0Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M399.23,1408.8a1.08,1.08,0,0,0,.32-.77,1.12,1.12,0,0,0,.31.77l11.2,11.46a1.08,1.08,0,0,1,.3,1l-2.64,16.18a1.07,1.07,0,0,0,1,1.27H389.36a1.08,1.08,0,0,0,1-1.27l-2.65-16.18a1.08,1.08,0,0,1,.3-1Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M424.54,1388.67a1,1,0,0,0-.92.6L416.69,1404a1.07,1.07,0,0,1-.77.6L400.43,1407a.9.9,0,1,1-1.77,0l-15.48-2.36a1.06,1.06,0,0,1-.78-.6l-6.93-14.72a1,1,0,0,0-.93-.6Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M438.88,1438.54a1,1,0,0,0,.48.13H409.74a1,1,0,0,0,.48-.13l13.84-7.64a1,1,0,0,1,1,0Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M449.23,1408.8a1.08,1.08,0,0,0,.32-.77,1.12,1.12,0,0,0,.31.77l11.2,11.46a1.08,1.08,0,0,1,.3,1l-2.64,16.18a1.07,1.07,0,0,0,1,1.27H439.36a1.08,1.08,0,0,0,1-1.27l-2.65-16.18a1.08,1.08,0,0,1,.3-1Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M474.54,1388.67a1,1,0,0,0-.92.6L466.69,1404a1.07,1.07,0,0,1-.77.6L450.43,1407a.9.9,0,1,1-1.77,0l-15.48-2.36a1.06,1.06,0,0,1-.78-.6l-6.93-14.72a1,1,0,0,0-.93-.6Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M488.88,1438.54a1,1,0,0,0,.48.13H459.74a1,1,0,0,0,.48-.13l13.84-7.64a1,1,0,0,1,1,0Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M509.74,1438.67H489.36a1.08,1.08,0,0,0,1-1.27l-2.65-16.18a1.08,1.08,0,0,1,.3-1l11.2-11.46a1.08,1.08,0,0,0,.32-.77,1.12,1.12,0,0,0,.31.77l11.2,11.46a1.08,1.08,0,0,1,.3,1l-2.64,16.18A1.07,1.07,0,0,0,509.74,1438.67Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M499.55,1408a1.07,1.07,0,0,0-.89-1.08l-15.48-2.36a1.06,1.06,0,0,1-.78-.6l-6.93-14.72a1,1,0,0,0-.93-.6h50a1,1,0,0,0-.92.6L516.69,1404a1.07,1.07,0,0,1-.77.6L500.43,1407A1.06,1.06,0,0,0,499.55,1408Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M538.88,1438.54a1,1,0,0,0,.48.13H509.74a1,1,0,0,0,.48-.13l13.84-7.64a1,1,0,0,1,1,0Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M559.74,1438.67H539.36a1.08,1.08,0,0,0,1-1.27l-2.65-16.18a1.08,1.08,0,0,1,.3-1l11.2-11.46a1.08,1.08,0,0,0,.32-.77,1.12,1.12,0,0,0,.31.77l11.2,11.46a1.08,1.08,0,0,1,.3,1l-2.64,16.18A1.07,1.07,0,0,0,559.74,1438.67Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M549.55,1408a1.07,1.07,0,0,0-.89-1.08l-15.48-2.36a1.06,1.06,0,0,1-.78-.6l-6.93-14.72a1,1,0,0,0-.93-.6h50a1,1,0,0,0-.92.6L566.69,1404a1.07,1.07,0,0,1-.77.6L550.43,1407A1.06,1.06,0,0,0,549.55,1408Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M588.88,1438.54a1,1,0,0,0,.48.13H559.74a1,1,0,0,0,.48-.13l13.84-7.64a1,1,0,0,1,1,0Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M609.74,1438.67H589.36a1.08,1.08,0,0,0,1-1.27l-2.65-16.18a1.08,1.08,0,0,1,.3-1l11.2-11.46a1.08,1.08,0,0,0,.32-.77,1.12,1.12,0,0,0,.31.77l11.2,11.46a1.08,1.08,0,0,1,.3,1l-2.64,16.18A1.07,1.07,0,0,0,609.74,1438.67Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M599.55,1408a1.07,1.07,0,0,0-.89-1.08l-15.48-2.36a1.06,1.06,0,0,1-.78-.6l-6.93-14.72a1,1,0,0,0-.93-.6h50a1,1,0,0,0-.92.6L616.69,1404a1.07,1.07,0,0,1-.77.6L600.43,1407A1.06,1.06,0,0,0,599.55,1408Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M638.88,1438.54a1,1,0,0,0,.48.13H609.74a1,1,0,0,0,.48-.13l13.84-7.64a1,1,0,0,1,1,0Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M659.74,1438.67H639.36a1.08,1.08,0,0,0,1-1.27l-2.65-16.18a1.08,1.08,0,0,1,.3-1l11.2-11.46a1.08,1.08,0,0,0,.32-.77,1.12,1.12,0,0,0,.31.77l11.2,11.46a1.08,1.08,0,0,1,.3,1l-2.64,16.18A1.07,1.07,0,0,0,659.74,1438.67Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M649.55,1408a1.07,1.07,0,0,0-.89-1.08l-15.48-2.36a1.06,1.06,0,0,1-.78-.6l-6.93-14.72a1,1,0,0,0-.93-.6h50a1,1,0,0,0-.92.6L666.69,1404a1.07,1.07,0,0,1-.77.6L650.43,1407A1.06,1.06,0,0,0,649.55,1408Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M688.88,1438.54a1,1,0,0,0,.48.13H659.74a1,1,0,0,0,.48-.13l13.84-7.64a1,1,0,0,1,1,0Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M709.74,1438.67H689.36a1.08,1.08,0,0,0,1-1.27l-2.65-16.18a1.08,1.08,0,0,1,.3-1l11.2-11.46a1.08,1.08,0,0,0,.32-.77,1.12,1.12,0,0,0,.31.77l11.2,11.46a1.08,1.08,0,0,1,.3,1l-2.64,16.18A1.07,1.07,0,0,0,709.74,1438.67Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M699.55,1408a1.07,1.07,0,0,0-.89-1.08l-15.48-2.36a1.06,1.06,0,0,1-.78-.6l-6.93-14.72a1,1,0,0,0-.93-.6h50a1,1,0,0,0-.92.6L716.69,1404a1.07,1.07,0,0,1-.77.6L700.43,1407A1.06,1.06,0,0,0,699.55,1408Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M738.88,1438.54a1,1,0,0,0,.48.13H709.74a1,1,0,0,0,.48-.13l13.84-7.64a1,1,0,0,1,1,0Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M759.74,1438.67H739.36a1.08,1.08,0,0,0,1-1.27l-2.65-16.18a1.08,1.08,0,0,1,.3-1l11.2-11.46a1.08,1.08,0,0,0,.32-.77,1.12,1.12,0,0,0,.31.77l11.2,11.46a1.08,1.08,0,0,1,.3,1l-2.64,16.18A1.07,1.07,0,0,0,759.74,1438.67Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M749.55,1408a1.07,1.07,0,0,0-.89-1.08l-15.48-2.36a1.06,1.06,0,0,1-.78-.6l-6.93-14.72a1,1,0,0,0-.93-.6h50a1,1,0,0,0-.92.6L766.69,1404a1.07,1.07,0,0,1-.77.6L750.43,1407A1.06,1.06,0,0,0,749.55,1408Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M788.88,1438.54a1,1,0,0,0,.48.13H759.74a1,1,0,0,0,.48-.13l13.84-7.64a1,1,0,0,1,1,0Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M809.74,1438.67H789.36a1.08,1.08,0,0,0,1-1.27l-2.65-16.18a1.08,1.08,0,0,1,.3-1l11.2-11.46a1.08,1.08,0,0,0,.32-.77,1.12,1.12,0,0,0,.31.77l11.2,11.46a1.08,1.08,0,0,1,.3,1l-2.64,16.18A1.07,1.07,0,0,0,809.74,1438.67Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M799.55,1408a1.07,1.07,0,0,0-.89-1.08l-15.48-2.36a1.06,1.06,0,0,1-.78-.6l-6.93-14.72a1,1,0,0,0-.93-.6h50a1,1,0,0,0-.92.6L816.69,1404a1.07,1.07,0,0,1-.77.6L800.43,1407A1.06,1.06,0,0,0,799.55,1408Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M838.88,1438.54a1,1,0,0,0,.48.13H809.74a1,1,0,0,0,.48-.13l13.84-7.64a1,1,0,0,1,1,0Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M849.55,1388.67V1408a1.07,1.07,0,0,0-.89-1.08l-15.48-2.36a1.06,1.06,0,0,1-.78-.6l-6.93-14.72a1,1,0,0,0-.93-.6Z" transform="translate(-349.55 -1388.67)"/>
  <path className="cls-1" d="M849.23,1408.8a1.08,1.08,0,0,0,.32-.77v30.64H839.36a1.08,1.08,0,0,0,1-1.27l-2.65-16.18a1.08,1.08,0,0,1,.3-1Z" transform="translate(-349.55 -1388.67)"/></svg>
  
      </div>
  
    </main>
   
  }