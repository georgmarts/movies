'use client'

import { useState, useEffect, createContext } from "react"
import AppContext from "./context"

// const MoviesContext = createContext()

function MoviesContextProvider({children}) {
    const [queries, setQueries] = useState({category: 'undefined', genre: 'undefined', country: 'undefined', year: 'undefined'})  
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {
      setIsLoading(true)   
      async function fetchData() {
      try {
        const res = await fetch(`/api/allmovies/1?category=${queries.category}&genre=${queries.genre}&country=${queries.country}&year=${queries.year}`)
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

  return (
    <AppContext.Provider value={{data}}>
        {children}
    </AppContext.Provider>
  )
}

export {MoviesContextProvider}
