import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { collection, query, where, getDoc, doc } from '@firebase/firestore';
import db from '../../../utils/db';
import GoogleProvider from 'next-auth/providers/google'
import { loginUser } from "../../../utils/firestoredb";
import { error } from "console";

export const authOptions = {

  secret: process.env.AUTH_SECRET,

  providers: [
    
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET

    // }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'username'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials
        const user = await loginUser(email, password)
        // console.log(JSON.stringify(user))
        if (!user.error) {
          return user
        } else if (user.error) {
          // return null
          throw new Error('Email or Password is incorrect')
        } else {
          throw new Error('Something went wrong')
        }
      }
    })

//     CredentialsProvider({
//       id: 'credentials',
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },


//       async authorize(credentials, req) {
//         const {username, password} = credentials
//         const user = {name: `${username}`}
//         const res = await db.collection('users').get()
//         const structuredData = res.docs.map(entry =>
//           ({id: entry.id,
//           ...entry.data()
//         }))
//         const validation = structuredData.some(x => x.username === username && x.password === password)

//         if(validation) {
//           return user
//         } else return null


// }})

],

    session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  callbacks: {

    async jwt({ token, user }) {  // Pass USER ID to TOKEN UID
      if (user) {
        token.id = user.id; // ATTENTION: when playing with TOKEN logout and login to see changes
      }
      return token
    },

    async session({ session, token, user}) { // Here you need token to get USER ID through TOKEN UID
      if (session?.user) {
        session.user.id = token.id
      }
      // if (user && user.id) {
      //   session.user.id = user.id
      // }
      return session
    }
  },

  pages: {
    signIn: '/login',
    signOut: '/',
  
  }


}


export default NextAuth(authOptions)