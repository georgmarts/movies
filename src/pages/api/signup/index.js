import { collection, query, where, getDoc, doc } from '@firebase/firestore';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import db from '../../../utils/db';

export default async function handler (req, res) {
   if (req.method === 'POST' && req.body) {
   const receivedData = JSON.parse(req.body)
   const newObject = {
      // id: Date.now(),
      username: receivedData.username,
      password: receivedData.password,
      email: receivedData.email
   }
   const updateData = await db.collection('users').add(newObject)
  res.json('Working')
  }
  const data = await db.collection('users').get()

res.json(data)}
