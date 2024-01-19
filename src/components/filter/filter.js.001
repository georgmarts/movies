'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import './filter.style.css'

export default function Filter({searchValue, setSearchValue, queries, setQueries, display, setDisplay, clickOnContainer}) {

  const [arrowUp, setArrowUp] = useState(false)
  const [arrowId, setArrowId] = useState(0)
  const [filterId, setFilterId] = useState(0)
  let years = []
  for (let i = 1985; i <= 2023; i ++) {
    years.push(i)
  }

  const chosenFilterStyle = {
    width: '90%',
    backgroundColor: '#E50914',
    color: 'white'
}

  function handleMenuClick(props) {
    if(searchValue.length === 0) {
    setFilterId(props)
    setDisplay(prev => !prev)
    setArrowId(props)
    setArrowUp(prev => !prev)}
  }
    
    return <div className="movie-page-boss-container">
     <div className="movie-filter-menu-container" onClick={clickOnContainer}>
    <div className="search-bar-container">
      <p className="label">Search</p>
      <input className="search-bar" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
    </div>

    {searchValue.length === 0 && <>

    <div className="movie-filter-menu">
      <p className="label">Category</p>
      <button onClick={() => handleMenuClick(1)} className="btn-movies-filter-boss">
        {queries.category === 'movie' && <span>Movies</span>}
        {queries.category === 'tvshow' && <span>TV Shows</span>}
        {queries.category === 'cartoon' && <span>Cartoons</span>}
        {queries.category === 'anime' && <span>Anime</span>}
        {queries.category === 'undefined' && <span>All</span>}
        {arrowId === 1 && arrowUp ? <span className="arrow">'&#9650;</span> : <span className="arrow">'&#9660;</span>}
      </button>
      {display && filterId === 1 && <div className="dropdown-menu-container">
      <div className="btn-movies-filter" style={queries.category === 'undefined' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, category: 'undefined'}), setDisplay(prev => !prev))}>All</div>
      <div className="btn-movies-filter" style={queries.category === 'movie' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, category: 'movie'}), setDisplay(prev => !prev))}>Movies</div>
      <div className="btn-movies-filter" style={queries.category === 'tvshow' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, category: 'tvshow'}), setDisplay(prev => !prev))}>TV Shows</div>
      <div className="btn-movies-filter" style={queries.category === 'cartoon' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, category: 'cartoon'}), setDisplay(prev => !prev))}>Cartoons</div>
      <div className="btn-movies-filter" style={queries.category === 'anime' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, category: 'anime'}), setDisplay(prev => !prev))}>Anime</div>
      </div>}
    </div>
    
    <div className="movie-filter-menu">
      <p className="label">Genre</p>
      <button onClick={() => handleMenuClick(2)} className="btn-movies-filter-boss">
        {queries.genre === 'action' && <span>Action</span>}
        {queries.genre === 'adventure' && <span>Adventure</span>}
        {queries.genre === 'drama' && <span>Drama</span>}
        {queries.genre === 'comedy' && <span>Comedy</span>}
        {queries.genre === 'scifi' && <span>Sci-Fi</span>}
        {queries.genre === 'undefined' && <span>All</span>}
        {arrowId === 2 && arrowUp ? <span className="arrow">'&#9650;</span> : <span className="arrow">'&#9660;</span>}
      </button>
      {display &&  filterId === 2 && <div className="dropdown-menu-container">
      <div className="btn-movies-filter" style={queries.genre === 'undefined' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, genre: 'undefined'}), setDisplay(prev => !prev))}>All</div>
      <div className="btn-movies-filter" style={queries.genre === 'action' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, genre: 'action'}), setDisplay(prev => !prev))}>Action</div>
      <div className="btn-movies-filter" style={queries.genre === 'adventure' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, genre: 'adventure'}), setDisplay(prev => !prev))}>Adventure</div>
      <div className="btn-movies-filter" style={queries.genre === 'drama' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, genre: 'drama'}), setDisplay(prev => !prev))}>Drama</div>
      <div className="btn-movies-filter" style={queries.genre === 'comedy' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, genre: 'comedy'}), setDisplay(prev => !prev))}>Comedy</div>
      <div className="btn-movies-filter" style={queries.genre === 'scifi' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries,genre: 'scifi'}), setDisplay(prev => !prev))}>Sci-Fi</div>
      </div>}
    </div>
    
    <div className="movie-filter-menu">
      <p className="label">Country</p>
      <button onClick={() => handleMenuClick(3)} className="btn-movies-filter-boss">
        {queries.country === 'usa' && <span>USA</span>}
        {queries.country === 'japan' && <span>Japan</span>}
        {queries.country === 'india' && <span>India</span>}
        {queries.country === 'turkey' && <span>Turkey</span>}
        {queries.country === 'undefined' && <span>All</span>}
        {arrowId === 3 && arrowUp ? <span className="arrow">'&#9650;</span> : <span className="arrow">'&#9660;</span>}
      </button>
      {display && filterId === 3 && <div className="dropdown-menu-container">
      <div className="btn-movies-filter" style={queries.country === 'undefined' ?  chosenFilterStyle : null} onClick={() => setQueries({...queries, country: 'undefined'})}>All</div>
      <div className="btn-movies-filter" style={queries.country === 'usa' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, country: 'usa'}), setDisplay(prev => !prev))}>USA</div>
      <div className="btn-movies-filter" style={queries.country === 'japan' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, country: 'japan'}), setDisplay(prev => !prev))}>Japan</div>
      <div className="btn-movies-filter" style={queries.country === 'india' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, country: 'india'}), setDisplay(prev => !prev))}>India</div>
      <div className="btn-movies-filter" style={queries.country === 'turkey' ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, country: 'turkey'}), setDisplay(prev => !prev))}>Turkey</div>
      </div>}
    </div>

    <div className="movie-filter-menu">
      <p className="label">Year</p>
      <button onClick={() => handleMenuClick(4)} className="btn-movies-filter-boss">
        {queries.year === 'undefined' ? <span>All</span> : <span>{queries.year}</span>}
        {arrowId === 4 && arrowUp ? <span className="arrow">'&#9650;</span> : <span className="arrow">'&#9660;</span>}
      </button>
      {display && filterId === 4 && <div className="dropdown-menu-container overflow-scroll">
      <div className="btn-movies-filter" style={queries.year === 'undefined' ?  chosenFilterStyle : null} onClick={() => setQueries({...queries, year: 'undefined'})}>All</div>
      {years.map(year =><div className="btn-movies-filter" style={queries.year === `${year}` ?  chosenFilterStyle : null} onClick={() => (setQueries({...queries, year: `${year}`}), setDisplay(prev => !prev))}>{year}</div>)}
      </div>}
    </div>
    
    </>}
    </div>
    </div>
}