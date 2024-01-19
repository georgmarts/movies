'use client'

import AppContext from '@/context/context'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef, useContext} from 'react'
import './favmoviesgrid.style.css'

export default function FavMoviesGrid({props}) {

  const [isEditMode, setIsEditMode] = useState(false)
  const movieContainerRef = useRef([])
  const [isScale, setIsScale] = useState(true)
  const [moviesToRemove, setmoviesToRemove] = useState([])
  const router = useRouter()
  const user = props.user
  const addToFavs = props.addToFavs

  function handleEditClick() {
    setIsEditMode(prev => !prev)
    setIsScale(prev => !prev)
  }

  function handleCheckClick(arg) {
    const matched = moviesToRemove.find(movie => movie.id === arg.id)
    if(matched) {
      const filtered = moviesToRemove.filter(movie => movie.id != arg.id)
      setmoviesToRemove(filtered)
    } else {
      setmoviesToRemove([...moviesToRemove, arg])
    }
  }

  function handleRemoveClick() {
    addToFavs(moviesToRemove)
    setmoviesToRemove([])
    handleEditClick()
  }

  const editbtnStyle = {
    backgroundColor: 'white',
    color: '#E50914',
    transform: 'scale(1.1)',
    transition: 'all 0.5s'
  }

  return ( <main>
        <div className='fav-btn-container'>
          <div className='fav-label'>Favorites</div>
          <div className='edit-delete-btn-container'>
            {isEditMode && <button className='fav-edit-btn' onClick={handleRemoveClick}>Remove</button>}
            <button className='fav-edit-btn' style={isEditMode ? editbtnStyle : null} onClick={handleEditClick}>Edit</button>
          </div>
        </div>
        <div className='fav-movies-grid'>
          {user.favorites?.map((movie, i) =>
            <div key={i} className='fav-movie-container'
            style={{backgroundImage: `url(${movie.imgLandscape})`}}
            ref={(element) => movieContainerRef.current.push(element)} onClick={!isEditMode ? () => router.push(`/movie/${movie.id}`) : null}>
            {isEditMode && <input type='checkbox' className='fav-checkbox' onClick={() => handleCheckClick(movie)}/>}
            </div> )}
        </div>
    </main>
  )
}
