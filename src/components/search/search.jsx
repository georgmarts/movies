'use client'

import React, { useEffect, useState } from 'react'

export default function Search() {

    const [test, setTest] = useState([])
    const [searchInput, setSearchInput] = useState('')

        
    useEffect(() => {
        async function fetchedData() {
            const response = await fetch(`/api/testdata/${searchInput}`)
            const data = await response.json()
            setTest(data)
        }

        fetchedData()
    }, [searchInput])    
    
  return <main>

    <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>

    {test.map(x => <p>{x.title}</p>)}
    
    </main>
}

