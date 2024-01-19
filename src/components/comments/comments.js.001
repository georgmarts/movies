'use client'

import '../../components/comments/comments.style.css'
import { useEffect, useState, useRef, useContext } from "react"
import Comment from '@/components/comment/comment'
import AppContext from '@/context/context'
import { CommentsContext } from '@/app/movie/[pid]/page'

const dateFormatter = new Intl.DateTimeFormat(undefined, {dateStyle: 'medium', timeStyle: 'short'})

export default function Comments({rootComments}) {
    const [isReplyClicked, setIsReplyClicked] = useState(false)
    const [isEditModeOn, setIsEditModeOn] = useState(false)
    const [commentId, setCommentId] = useState()
    const context = useContext(AppContext)
    const commentsContext = useContext(CommentsContext)
    const {session, removeComment, likeComment, editComment, setEditedComment, editedComment, reply, setReply, replyToComment, setParentId} = commentsContext

    function like(singlecomment) {
      likeComment(singlecomment)
      setCommentId(singlecomment.id)
    }
    
  return (<div>
      {rootComments?.sort((a, b) => {return b.id - a.id}).map((singlecomment, i) =>
      <div key={i} className='comments'>
      <div className='comment'>
        <div className='comment-col-1'>
            <div className='comment-avatar'></div>
        </div>
        <div className='comment-col-2'>
          <div className='comment-header'>
            <div className='comment-username'>{singlecomment.user} {singlecomment.parentId && <span className='reply-to'>&gt; reply to {singlecomment.user}</span>}</div>
            <div className='comment-date'>{dateFormatter.format(Date.parse(singlecomment.date))}</div>
          </div>
            <div className='comment-itself'>{singlecomment.comment}</div>
            <div className='comment-btn-card'>
              <p className='likes-count'>Likes &#40;{singlecomment.likes?.length}&#41;</p>
              <svg style={singlecomment.likes.find(like => like.user === session.user.email) ? {fill: 'white'}: null} className='icon' onClick={() => like(singlecomment)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
              <svg className='icon' style={isEditModeOn && commentId === singlecomment.id ? {fill: 'white'} : null} onClick={() => {setIsEditModeOn(prev => !prev), setEditedComment(singlecomment.comment), setIsReplyClicked(false), setCommentId(singlecomment.id)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"/></svg>
              <svg className='icon' style={isReplyClicked && commentId === singlecomment.id ? {fill: 'white'} : null} onClick={() => {setIsReplyClicked(prev => !prev), setIsEditModeOn(false),setParentId(singlecomment.id), setCommentId(singlecomment.id)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"/></svg>
              <svg className='icon' onClick={() => (removeComment(singlecomment), setCommentId(singlecomment.id))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"/></svg>
              {context.commentError && commentId === singlecomment.id && <p className='comment-error'>{context.commentError}</p>}
            </div>
            {isReplyClicked && commentId === singlecomment.id && <div className='reply-input-card'>
                <textarea value={reply} onChange={(e) => setReply(e.target.value)} className="textarea"></textarea>
                <input className='submit-comment mg-t-5' type='submit' value='Leave comment' onClick={(e) => (replyToComment(e), setIsReplyClicked(prev=>!prev))}/>
            </div>}

            {isEditModeOn && commentId === singlecomment.id && <div className='reply-input-card'>
                <textarea value={editedComment} onChange={(e) => setEditedComment(e.target.value)} className="textarea"></textarea>
                <input className='submit-comment mg-t-5' type='submit' value='Leave comment' onClick={() => {editComment(singlecomment), setIsEditModeOn(prev=>!prev)}}/>
            </div>}
            
        </div>
      </div>
      <div className='reply'><Comment id={singlecomment.id}/></div>
      </div>)}
    </div>
  )
}
