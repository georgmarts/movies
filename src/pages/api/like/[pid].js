import { collection, query, where, getDoc, doc } from '@firebase/firestore';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import db from '../../../utils/db';

export default async function handler (req, res) {
  const { pid } = req.query

  if (req.method === 'POST') {
   const reqBody = JSON.parse(req.body)
   const parsedObj = {
      user: reqBody.userID,
      rating: reqBody.rating,
   }
   const updateData = await db.collection('moviesDB').doc(pid).update({
    rating: FieldValue.arrayUnion(parsedObj)
  })

  const finalData = await db.collection('moviesDB').doc(pid).get()
  res.json(finalData.data())
  }}
