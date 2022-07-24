import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDOWZVBYqbevOUaH3LrCq3bZXkNALrjGcU',
  authDomain: 'crwn-clothing-b47b1.firebaseapp.com',
  projectId: 'crwn-clothing-b47b1',
  storageBucket: 'crwn-clothing-b47b1.appspot.com',
  messagingSenderId: '129080598186',
  appId: '1:129080598186:web:5e5d2e706a79fa1a6bfad3',
  measurementId: 'G-KNGDKYKNXK'
}

export const firebaseApp = initializeApp(firebaseConfig)
