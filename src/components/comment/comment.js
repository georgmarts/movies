'use client'

import { useEffect, useState, useContext } from "react"
import Nested from "../nested/nested"
import './comment.style.css'
import Comments from '@/components/comments/comments'
import { CommentsContext } from "@/app/movie/[pid]/page"

export default function Comment({id}) {
  const context = useContext(CommentsContext)
  const childComments = context.getReplies(id)
return (<>
      {childComments?.length > 0 && <Comments rootComments={childComments}/>}
  </>)
}
