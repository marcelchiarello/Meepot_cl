import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getStorage, FirebaseStorage } from 'firebase/storage'
import { getAnalytics, Analytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyAD1Q3ova1i0sii0N0XujlUFJ1hWTMCuNY',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'meepotcl.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'meepotcl',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'meepotcl.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '191068431187',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:191068431187:web:952d80fa6a0475e48a77a6',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-CSSC4YPCM6'
}

let app: FirebaseApp
let auth: Auth
let db: Firestore
let storage: FirebaseStorage
let analytics: Analytics | null = null

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
  
  // Initialize Analytics only if supported
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app)
    }
  })
}

// Export dummy instances for server-side rendering
const dummyAuth = {} as Auth
const dummyDb = {} as Firestore
const dummyStorage = {} as FirebaseStorage
const dummyApp = {} as FirebaseApp

// Use conditional exports
const exportedApp = typeof window !== 'undefined' ? app : dummyApp
const exportedAuth = typeof window !== 'undefined' ? auth : dummyAuth
const exportedDb = typeof window !== 'undefined' ? db : dummyDb
const exportedStorage = typeof window !== 'undefined' ? storage : dummyStorage
const exportedAnalytics = analytics

export { 
  exportedApp as app,
  exportedAuth as auth,
  exportedDb as db,
  exportedStorage as storage,
  exportedAnalytics as analytics
}