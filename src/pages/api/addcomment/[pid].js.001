import { collection, query, where, getDoc, doc } from '@firebase/firestore';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import db from '../../../utils/db';

export default async function handler (req, res) {
  const { pid } = req.query
//   const updateData = await db.collection('movies').doc('0znDIemKvTr0gTUiLyqa').update({
//     comments: FieldValue.arrayUnion({o: 'y'})
//   })
//   res.end('Done')
// }

  let xxx = req.body

    if (req.method === 'POST') {
   const receivedData = JSON.parse(req.body)
   const newObject = {
      id: receivedData.id,
      user: receivedData.user,
      comment: receivedData.comment,
      date: receivedData.date,
      milliseconds: receivedData.milliseconds,
      parentId: receivedData.parentId,
      likes: receivedData.likes
   }

   const updateData = await db.collection('moviesDB').doc(pid).update({
    comments: FieldValue.arrayUnion(newObject)
  })

  const finalData = await db.collection('moviesDB').doc(pid).get()
  res.json(finalData.data())

  }

  res.json('not working')}
