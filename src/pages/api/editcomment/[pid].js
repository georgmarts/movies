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
    likes: receivedData.likes
   }

   const newObject2 = {
    id: receivedData.id,
    user: receivedData.user,
    comment: receivedData.newComment,
    parentId: receivedData.parentId,
    date: receivedData.date,
    milliseconds: receivedData.milliseconds,
    likes: receivedData.likes
   }


   const removeData = await db.collection('moviesDB').doc(pid).update({
    comments: FieldValue.arrayRemove(newObject)
  })

  const addData = await db.collection('moviesDB').doc(pid).update({
    comments: FieldValue.arrayUnion(newObject2)
  })
  res.json('Working')
  }

  res.json('not working')}
