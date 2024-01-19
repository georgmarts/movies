'use client'

import { useEffect, useState } from 'react'
import './nested.style.css'
import Comment from '@/components/comment/comment'

export default function Nested({getReplies, rootComments}) {
  return (
    <div>
      {rootComments?.map(x => <>
      <div>
        {x.text}
      </div>
      <Comment id = {x.id} getReplies={getReplies}/>
      </>
)}
    </div>
  )
}
