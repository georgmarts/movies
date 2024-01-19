import { collection, query, where, getDoc, doc } from '@firebase/firestore';
import db from '../../../utils/db';

export default async (req, res) => {

  const userId = req.query.pid
  const data = await db.collection('users').doc(userId).get()
  res.json(data.data())
}