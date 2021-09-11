// import config from './config'
import { initializeApp, getApp, getApps } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
// import { getStorage } from 'firebase/storage'
// import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from 'firebase/analytics'
// import { getFunctions } from 'firebase/functions'
// import { getMessaging } from 'firebase/messaging'

const config = {
  apiKey: 'AIzaSyBxmOxqxFUu_1zBMqeFTic8lE-Hm8zEWp4',
  authDomain: 'https://cosmoce-01.firebaseapp.com',
  projectId: 'cosmoce-01',
  databaseURL: 'https://myapp-project-123.firebaseio.com',
  storageBucket: 'myapp-project-123.appspot.com',
  messagingSenderId: '65211879809',
  appId: '1:65211879909:web:3ae38ef1cdcb2e01fe5f0c',
  measurementId: 'G-8GSGZQ44ST',
}

let firebaseApp

if (getApps().length) {
  firebaseApp = getApp('burger')
} else {
  firebaseApp = initializeApp(config, 'burger')
}

// export const auth = getAuth(firebaseApp)
// export const storage = getStorage(firebaseApp)
// export const database = getDatabase(firebaseApp)
export const firestore = getFirestore(firebaseApp)
// export const analytics = getAnalytics(firebaseApp)
// export const functions = getFunctions()
// export const messaging = getMessaging()
// export const remoteConfig = getRemoteConfig()
