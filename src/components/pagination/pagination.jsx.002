'use client'

import './pagination.style.css'

import Link from 'next/link';
import { useState, useEffect, useContext, useRef } from 'react';

export default function Pagination() {

// STYLE FOR SELECTED BUTTON

const selectedButtonStyle = {width: '50px', height: '50px', backgroundColor: "brown", color: 'white'}

// REVERSED DATA

const [posts, setPosts] = useState([])
const [singlePost, setSinglePost] = useState({})

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/data')
    const data = await response.json()
    setPosts(data)
  }
  fetchData()
}, [])

const data = [...posts].reverse()

// SETTING UP LOGIC FOR DISPLAYING SPECIFIC NUMBER OF POSTS PER PAGE

const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage, setpostsPerPage ] = useState(3)

const lastPostIndex = currentPage * postsPerPage
const firstPostIndex = lastPostIndex - postsPerPage
const currentPosts = data.slice(firstPostIndex, lastPostIndex)

// CREATING PAGE NUMBERS

const totalPosts = data.length

let pages = []

for (let i = 0; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i)
}

// VARIABLE FOR NUMBER OF PAGE NUMBERS ON BOTH SIDES OF THE CHOSEN ONE (IF 2 TOTAL PAGE NUMBER = 5)

const siblingCount = 1

// PAGINATION LOGIC

const [firstPagesIndex, setFirstPagesIndex] = useState(1)
const [lastPagesIndex, setLastPagesIndex] = useState(6)

const pagesSliced = pages.slice(firstPagesIndex, lastPagesIndex)

useEffect(() => 
  currentPage > siblingCount ? 
  currentPage > pages.length - siblingCount - 1 ?
  (setFirstPagesIndex(pages.length - ((siblingCount*2) + 1)),
  setLastPagesIndex(pages.length)) :
  (setFirstPagesIndex(currentPage - siblingCount),
  setLastPagesIndex(currentPage + siblingCount + 1)) :
  (setFirstPagesIndex(1),
  setLastPagesIndex((siblingCount*2) + 2)), [currentPage])

return <main>

  <div className='posts-container'>
  {currentPosts.map((x, index)=>{
    return <><div key={index} className='post-container'>
      <p className='title'>{x.title}</p>
      </div></>
  })}
  </div>

  <div className='pagination-container'>

  {currentPage === 1 ? <span className='pagination-btn-active'>&#8592;</span> : null}
  
  {currentPage > 1 ? <button className='next-prev' onClick={()=>setCurrentPage(x=>x-1)}>Prev</button> : null}

  {currentPage > siblingCount + 1 ? <><button className='btn-first' onClick={() => setCurrentPage(1)}>1</button><>...</></> : null}

  {pagesSliced.map((x, index) => {return <>
      <button className={x === currentPage ? 'pagination-btn-active' : 'pagination-btn'}
        disabled={x === 0 || x > Math.ceil(totalPosts/postsPerPage)} onClick={() => setCurrentPage(x)}
        key={index}>{x}</button></>
        })}

  {currentPage < pages.length - siblingCount - 1 ? 
    <>
      <>...</>
      <button className='btn-last' onClick={() => setCurrentPage(pages.length - 1)}>{pages.length - 1}</button>
    </>
      : null}

  {currentPage < pages.length - 1 ? <button className='next-prev' onClick={()=>setCurrentPage(x=>x+1)}>Next</button> : null}

  {currentPage === pages.length - 1 ? <span className='pagination-btn-active'>&#8594;</span> : null}

  </div>
  
  </main>

}