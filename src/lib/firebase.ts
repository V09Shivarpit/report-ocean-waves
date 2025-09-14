import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, signInAnonymously, connectAuthEmulator } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "demo-project.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

// For demo purposes, we'll use local emulators or mock data
// In production, replace with actual Firebase config

// Initialize anonymous authentication for demo
export const initAuth = async () => {
  try {
    await signInAnonymously(auth);
    console.log('Anonymous auth initialized');
  } catch (error) {
    console.log('Using demo mode - Firebase not configured');
  }
};