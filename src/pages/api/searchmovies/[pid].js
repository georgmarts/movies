import { collection, query, where } from '@firebase/firestore';
import db from '../../../utils/db';

export default async (req, res) => {

const { pid } = req.query
    const collectionRef = await db.collection('moviesDB').get()
    const data = collectionRef.docs.map(entry => ({
        ...entry.data()}))
    const filteredData = data.filter(x => x.title.toLowerCase().includes(pid))
    res.json(filteredData)
}