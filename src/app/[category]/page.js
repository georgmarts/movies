'use client'

import { useState, useEffect } from 'react'
import MovieSlider from '../../components/movieslider/movieslider'
import './category.style.css'

export default function Category({params}) {

  const {category} = params
  let label
  if(category != 'anime') {label = `${category}s`}
  if(category === 'anime') {label = category}
  if(category === 'tvshow') {label = 'tv shows'}

  return (
    <main className='category-page-container'>
      <p className='category-label'>{label.toUpperCase()}</p>
      <MovieSlider category = {category} genre='action' country='undefined' year='undefined' label='Action'></MovieSlider>
      <MovieSlider category = {category} genre='comedy' country='undefined' year='undefined' label='Comedy'></MovieSlider>
      <MovieSlider category = {category} genre='drama' country='undefined' year='undefined' label='Drama'></MovieSlider>
      <MovieSlider category = {category} genre='adventure' country='undefined' year='undefined' label='Adventure'></MovieSlider>
      <MovieSlider category = {category} genre='scifi' country='undefined' year='undefined' label='Sci Fi'></MovieSlider>
    </main>
  )
}
