import { collection, query, where } from '@firebase/firestore';
import { movieDB } from '../../../data/movieDB';
import db from '../../../utils/db';

export default async (req, res) => {
    movieDB.map(async (movie) => await db.collection('moviesDB').add(movie))
    return res.send('done')
}
