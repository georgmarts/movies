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

  //  const newObject = {
  //   id: receivedData.id,
  //   user: receivedData.user,
  //   comment: receivedData.comment,
  //   parentId: receivedData.parentId,
  //   date: receivedData.date,
  //   milliseconds: receivedData.milliseconds,
  //   likes: receivedData.likes
  //  }
   const newObject2 = receivedData.arg
   
   const data = await db.collection('moviesDB').doc(pid).get()
  //  const structuredData = data.docs.map(x => ({...x.data()}))
   const structuredData = data.data()
   const filteredData = structuredData.comments.filter(element => element.parentId === newObject2.id)
   const newData = [...filteredData, newObject2]
   newData.map(async (element) => await db.collection('moviesDB').doc(pid).update({
    comments: FieldValue.arrayRemove(element)
  }))

  //  const updateData = await db.collection('movies').doc(pid).update({
  //   comments: FieldValue.arrayRemove(newObject2)
  // })
  res.json('Working')
  }

  res.json('not working')}
