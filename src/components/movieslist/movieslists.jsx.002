'use client'

import PaginationTest from '@/app/paginationtest/page'
import AppContext from '@/context/context'
import React, { useContext, useEffect, useState } from 'react'
import './movieslists.style.css'

export default function Movieslists() {

    const context = useContext(AppContext)
    const movies = context.movies
    const someArray = context.someArray

    // const [movies, setMovies] = useState([])
    // const [context.moviesByCategories, context.setMoviesByCategories] = useState(movies)
    
    const [categoryArg, setCategoryArg] = useState('')
    const [filterArg, setFilterArg] = useState('')
    const [countryArg, setCountryArg] = useState('')

    function filterMoviesByCategories(arg) {
        context.setMoviesByCategories(movies.filter(x =>
            (arg != '' ? x.category === arg : x.category) && 
            (filterArg != '' ? x.status === filterArg : x.status) &&
            (countryArg != '' ? x.country === countryArg : x.country)))
        setCategoryArg(arg)
    }

    function filterMoviesByFilter(arg) {
        context.setMoviesByCategories(movies.filter(x => 
            (arg != '' ? x.status === arg : x.status) && 
            (categoryArg != '' ? x.category === categoryArg : x.category) &&
            (countryArg != '' ? x.country === countryArg : x.country)))
        setFilterArg(arg)
    }

    function filterMoviesByCountries(arg) {
        context.setMoviesByCategories(movies.filter(x => 
            (arg != '' ? x.country === arg : x.country) &&
             (filterArg != '' ? x.status === filterArg : x.status) && 
            (categoryArg != '' ? x.category === categoryArg : x.category)))
        setCountryArg(arg)
    }

  return <main className='movies-main-container'>
    <div className='tag-menu'>

    <div className='categories-tag-menu'>
        <button onClick={() => context.setCategory('all')}><a href='/moviestest/1'>All</a></button>
        <button onClick={() => context.setCategory('movies')}>Movies</button>
        <button onClick={() => context.setCategory('tv shows')}>TV Shows</button>
        <button onClick={() => context.setCategory('cartoons')}>Cartoons</button>
        <button onClick={() => context.setCategory('anime')}>Anime</button>
    </div>

        {/* <div className='status-tag-menu'>
        <button onClick={() => filterMoviesByFilter('')}>All</button>
        <button onClick={() => filterMoviesByFilter('popular')}>Popular</button>
        <button onClick={() => filterMoviesByFilter('now watching')}>Now watching</button>
        <button onClick={() => filterMoviesByFilter('upcoming')}>Upcoming</button>
    </div> */}

    {/* <div className='country-tag-menu'>
        <button onClick={() => filterMoviesByCountries('all')}>All</button>
        <button onClick={() => filterMoviesByCountries('USA')}>US</button>
        <button onClick={() => filterMoviesByCountries('Canada')}>Canada</button>
        <button onClick={() => filterMoviesByCountries('Great Britain')}>Great Britain</button>
        <button onClick={() => filterMoviesByCountries('Germany')}>Germany</button>
    </div> */}
    </div>

    <div className='movies-container'>
        {movies.map((movie, index) => <>
        <div  className='movie-container'>
            <img src={movie.img} style={{display:'block', width: '166px', height: '250px', border: '1px solid black'}}/>
            <p>{movie.title}</p>
        </div> </> )} </div>

    <div>{context.pageNumber}</div>
    
    </main>
}

