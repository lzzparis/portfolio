import Firebase from 'firebase';
import { firebase as config } from '../config';

const {
  apiKey, authDomain, databaseURL, storageBucket,
} = config;

// Initialize Firebase
Firebase.initializeApp({
  apiKey, authDomain, databaseURL, storageBucket,
});

export default Firebase;
