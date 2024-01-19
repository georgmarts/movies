import { collection, query, where } from '@firebase/firestore';
import db from '../../../utils/db';

export default async (req, res) => {

  const { pid, category, genre, country, year } = req.query
  const collectionRef = db.collection('movies').limit(10)
  let data
  
  if(category) {data = await collectionRef.where(`category`, '==', `${category}`).get()}
  if(genre) {data = await collectionRef.where(`genre`, '==', `${genre}`).get()}
  if(country) {data = await collectionRef.where(`country`, '==', `${country}`).get()}
  if(year) {data = await collectionRef.where(`year`, '==', `${year}`).get()}

  const mappedData = data.docs.map(entry => ({
    id: entry.id,
    ...entry.data()
  }))

  res.json(mappedData)
}