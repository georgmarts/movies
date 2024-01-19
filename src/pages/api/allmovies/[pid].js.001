import { collection, query, where } from '@firebase/firestore';
import db from '../../../utils/db';

export default async (req, res) => {

  const { pid, category, genre, country, year } = req.query
  const offset = (Number(pid)-1)*2
  const collectionRef = db.collection('moviesDB')
  let data

  category != 'undefined' ? genre != 'undefined' ? country != 'undefined' ? year != 'undefined' ?
  data = await collectionRef.where('category', '==', `${category}`).where('genre', '==', `${genre}`).where('country', '==', `${country}`).where('year', '==', `${year}`).get() :
  data = await collectionRef.where('category', '==', `${category}`).where('genre', '==', `${genre}`).where('country', '==', `${country}`).get() :
  data = await collectionRef.where('category', '==', `${category}`).where('genre', '==', `${genre}`).get() :
  data = await collectionRef.where('category', '==', `${category}`).get() :
  data = await collectionRef.get() 

  category != 'undefined' && genre == 'undefined' ? country != 'undefined' ? year != 'undefined' ?
  data = await collectionRef.where('category', '==', `${category}`).where('country', '==', `${country}`).where('year', '==', `${year}`).get() :
  data = await collectionRef.where('category', '==', `${category}`).where('country', '==', `${country}`).get() :
  data = await collectionRef.where('category', '==', `${category}`).get() :
  null

  category != 'undefined' && genre == 'undefined' && country == 'undefined' ? year != 'undefined' ?
  data = await collectionRef.where('category', '==', `${category}`).where('year', '==', `${year}`).get() :
  data = await collectionRef.where('category', '==', `${category}`).get() :
  null 
  
  genre != 'undefined' && category == 'undefined' ? country != 'undefined' ? year != 'undefined' ?
  data = await collectionRef.where('genre', '==', `${genre}`).where('country', '==', `${country}`).where('year', '==', `${year}`).get() :
  data = await collectionRef.where('genre', '==', `${genre}`).where('country', '==', `${country}`).get() :
  data = await collectionRef.where('genre', '==', `${genre}`).get() : null

  genre != 'undefined' && category == 'undefined' && country == 'undefined' ? year != 'undefined' ?
  data = await collectionRef.where('genre', '==', `${genre}`).where('year', '==', `${year}`).get() :
  data = await collectionRef.where('genre', '==', `${genre}`).get() : null

  country != 'undefined' && category == 'undefined' && genre == 'undefined' ? year != 'undefined' ?
  data = await collectionRef.where('country', '==', `${country}`).where('year', '==', `${year}`).get() :
  data = await collectionRef.where('country', '==', `${country}`).get() : null 

  year != 'undefined' && category == 'undefined' && genre == 'undefined' && country == 'undefined' ?
  data = await collectionRef.where('year', '==', `${year}`).get() :
  null

  const mappedData = data.docs.map(entry => ({
    id: entry.id,
    ...entry.data()
  }))
  
  res.status(200).json(mappedData)
}