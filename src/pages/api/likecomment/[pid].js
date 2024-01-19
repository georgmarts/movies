import { collection, query, where, getDoc, doc } from '@firebase/firestore';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import db from '../../../utils/db';

export default async function handler (req, res) {
  const { pid } = req.query

  if (req.method === 'POST') {
   const receivedData = JSON.parse(req.body)
   
   const newObject = {
    id: receivedData.id,
    user: receivedData.user,
    comment: receivedData.comment,
    parentId: receivedData.parentId,
    date: receivedData.date,
    milliseconds: receivedData.milliseconds,
    likes: receivedData.likes,
   }

   const userWhoLiked = receivedData.userWhoLiked
   const newLikesArray = newObject.likes

  //  const newObject2 = {
  //   id: receivedData.id,
  //   user: receivedData.user,
  //   comment: receivedData.comment,
  //   parentId: receivedData.parentId,
  //   date: receivedData.date,
  //   milliseconds: receivedData.milliseconds,
  //   likes: [...newLikesArray, {user: newObject.user, like: true}]
  //  }

   const doesLikeExist = newLikesArray.find(element => element.user === userWhoLiked)
   const filteredLikeArray = newLikesArray.filter(element => element.user != userWhoLiked)

  //  const newObject3 = {
  //   id: receivedData.id,
  //   user: receivedData.user,
  //   comment: receivedData.comment,
  //   parentId: receivedData.parentId,
  //   date: receivedData.date,
  //   milliseconds: receivedData.milliseconds,
  //   likes: filteredLikeArray
  //  }

   if(!doesLikeExist) {
    const removeData = await db.collection('moviesDB').doc(pid).update({
    comments: FieldValue.arrayRemove(newObject)
  })
  const addData = await db.collection('moviesDB').doc(pid).update({
    comments: FieldValue.arrayUnion({...newObject, likes: [...newLikesArray, {user: userWhoLiked}]})
  }) } else { 
    const removeData = await db.collection('moviesDB').doc(pid).update({
      comments: FieldValue.arrayRemove(newObject)
    })
    const addData = await db.collection('moviesDB').doc(pid).update({
      comments: FieldValue.arrayUnion({...newObject, likes: filteredLikeArray})
    })
  }
  res.json('Working')
  }

  res.json('not working')}
