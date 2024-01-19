import { collection, query, where, getDoc, doc } from '@firebase/firestore';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { parse } from 'path';
import db from '../../../utils/db';

    // export default async function handler (req, res) {
   
    //   const userId = req.query.pid
  
    //   if (req.method === 'POST') {
    //     const reqBody = JSON.parse(req.body)      
    //     const parsedObj = reqBody.movie

    //     if(!Array.isArray(parsedObj)) {
    //       const matched = await db.collection('users').where('favorites', "array-contains", parsedObj).get()
    //       const data = matched.docs.map(x => ({...x.data()}))
    //       if(data != '') {
    //         const deleteData = await db.collection('users').doc(userId).update({
    //         favorites: FieldValue.arrayRemove(parsedObj)
    //       }) } else {
    //           const updateData = await db.collection('users').doc(userId).update({
    //         favorites: FieldValue.arrayUnion(parsedObj)
    //       })}
    //    } else {
    //       parsedObj.map(async (movie) => {
    //       const matched = await db.collection('users').where('favorites', "array-contains", movie).get()
    //       const data = matched.docs.map(x => ({...x.data()}))
    //       if(data != '') {
    //         const deleteData = await db.collection('users').doc(userId).update({
    //         favorites: FieldValue.arrayRemove(movie)
    //         }) } else {
    //         const updateData = await db.collection('users').doc(userId).update({
    //         favorites: FieldValue.arrayUnion(movie)
    //         })}
    //         }) 
    //   }}
      
    //   res.json('Now working')}


    export default async function handler (req, res) {
      if (req.method === 'POST') {
      const userId = req.query.pid
      const reqBody = JSON.parse(req.body)      
      const data = await db.collection('users').doc(userId).get()
      const user = data.data() // fetch user data seperately to make it work
      const parsedObj = reqBody.movie
      parsedObj.map(async (movie) => {
          const matched = user.favorites.find(favorite => favorite.id === movie.id)
          if(matched) {
            const deleteData = await db.collection('users').doc(userId).update({
            favorites: FieldValue.arrayRemove(movie)
            }) } else {
            const updateData = await db.collection('users').doc(userId).update({
            favorites: FieldValue.arrayUnion(movie)
            })}
            }) 
      res.status(200).json('Working')
      }}  
