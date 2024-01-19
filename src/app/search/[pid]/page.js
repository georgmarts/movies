'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import './allmovies.style.css'
import Filter from '@/components/filter/filter'

export default function Home({params, searchParams}) {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [queries, setQueries] = useState({category: 'undefined', genre: 'undefined', country: 'undefined', year: 'undefined'})  
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [display, setDisplay] = useState(false)

  // FETCH FILTERED MOVIES LIST

  useEffect(() => {
    setLoading(true)
    async function fetchedData() {
      try {
        const response = await fetch(`/api/allmovies/${params.pid}?category=${queries.category}&genre=${queries.genre}&country=${queries.country}&year=${queries.year}`)
        if(!response.ok) throw new Error('Error')
        const data = await response.json()
        setMovies(data)
        setError(null)
      } catch(err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    searchValue.length === 0 && fetchedData()
    }, [searchParams, searchValue, queries])

  // SEARCH FILTER

    useEffect(() => {
      setLoading(true)
      async function fetchedData() {
          try {
          const response = await fetch(`/api/searchmovies/${searchValue}`)
          if(!response.ok) throw new Error('Something went wrong')
          const data = await response.json()
          setMovies(data)
          setError(null)
          } catch(err) {
            setError(err.message)
          } finally {
            setLoading(false)
          }
      }
      searchValue ? fetchedData() : null
      }, [searchValue])

      
  function clickOnContainer() {
    display ? setDisplay(false) : null
  }
        

    return <div className="search-container">
    <Filter searchValue={searchValue} setSearchValue ={setSearchValue} setQueries={setQueries} queries={queries} display={display} setDisplay={setDisplay} clickOnContainer={clickOnContainer}></Filter>
    <div className="movies-container" onClick={clickOnContainer}>  
    {loading && <div className="search-loading">Loading...</div>}  
    {error && <div className="search-loading">{error}</div>}  
     {!loading && movies?.map(movie =>
        <div className="single-movie-container" onClick={() => router.push(`/movie/${movie.id}`)}>
          <div className="single-movie" style={
          {backgroundImage: `url(${movie.imgLandscape})`}}></div>
        </div>)}
    </div>
    </div>
}
