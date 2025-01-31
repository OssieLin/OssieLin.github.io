import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGPX6WenGGgDF0ulmWWeODzebt9SFLofE",
  authDomain: "personal-site-database-4a1fc.firebaseapp.com",
  databaseURL: "https://personal-site-database-4a1fc-default-rtdb.firebaseio.com",
  projectId: "personal-site-database-4a1fc",
  storageBucket: "personal-site-database-4a1fc.firebasestorage.app",
  messagingSenderId: "724934475215",
  appId: "1:724934475215:web:eba9a16613666589d1e6ba"
};

const app = initializeApp(firebaseConfig);

// Export the initialized database
export const database = getDatabase(app);
