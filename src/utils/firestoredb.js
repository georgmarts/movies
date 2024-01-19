import { collection, query, where, getDoc, doc } from '@firebase/firestore';
import { match } from 'assert';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import db from '../utils/db';

export async function loginUser(email, password) {
    try {
        const data = await db.collection('users').where('email', '==', email).get()
        const mappedData = data.docs.map(entry => ({
            id: entry.id,
            ...entry.data()
          }))
        const matched = mappedData.find(element => element.email === email && element.password === password)
        if (!matched) {
            return { error: 'email or password does not match our records' }
            // return null
        } else {
            return matched
        }

    } catch (error) {
        return { error: 'Something went wrong, please try again' }
    }
}