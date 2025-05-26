import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getStorage, FirebaseStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'dummy-key-for-build',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'dummy.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'dummy-project',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'dummy.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '123456789',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:123456789:web:dummy',
}

let app: FirebaseApp
let auth: Auth
let db: Firestore
let storage: FirebaseStorage

// Only initialize Firebase on the client side
if (typeof window !== 'undefined') {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig)
  } else {
    app = getApps()[0]
  }

  auth = getAuth(app)
  db = getFirestore(app)
  storage = getStorage(app)
}

// Export dummy instances for server-side rendering
const dummyAuth = {} as Auth
const dummyDb = {} as Firestore
const dummyStorage = {} as FirebaseStorage
const dummyApp = {} as FirebaseApp

export { 
  app: typeof window !== 'undefined' ? app : dummyApp,
  auth: typeof window !== 'undefined' ? auth : dummyAuth,
  db: typeof window !== 'undefined' ? db : dummyDb,
  storage: typeof window !== 'undefined' ? storage : dummyStorage
}