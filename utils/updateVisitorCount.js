import { ref, get, set } from 'firebase/database';
import { database } from './firebase'; // Correct path to firebase.js

export const updateVisitorCount = async () => {
  const visitorRef = ref(database, 'visitors'); // Reference to the 'visitors' node

  try {
    const snapshot = await get(visitorRef); // Fetch current visitor count
    const currentCount = snapshot.exists() ? snapshot.val() : 0; // Check if count exists
    const newCount = currentCount + 1; // Increment count
    await set(visitorRef, newCount); // Update count in Firebase
    return newCount; // Return updated count
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return null; // Return null on error
  }
};
