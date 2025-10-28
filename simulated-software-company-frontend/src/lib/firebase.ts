import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDInBz0kkBNlntT7Kd0XSv3p3Nn4dITdzk",
  authDomain: "simulated-software-company.firebaseapp.com",
  projectId: "simulated-software-company",
  storageBucket: "simulated-software-company.firebasestorage.app",
  messagingSenderId: "933912474836",
  appId: "1:933912474836:web:6face891468125cd9cf741"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app
