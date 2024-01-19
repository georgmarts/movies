import { collection, query, where, getDoc, doc } from '@firebase/firestore';
import db from '../../../utils/db';

export default async (req, res) => {

  const { pid } = req.query
  const data = await db.collection('moviesDB').doc(pid).get()
  const structuredData = data.data()
  const structuredDataWithId = {...structuredData, id: pid}
  res.json(structuredDataWithId)
}