// First, initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAGPX6WenGGgDF0ulmWWeODzebt9SFLofE",
    authDomain: "personal-site-database-4a1fc.firebaseapp.com",
    databaseURL: "https://personal-site-database-4a1fc-default-rtdb.firebaseio.com",
    projectId: "personal-site-database-4a1fc",
    storageBucket: "personal-site-database-4a1fc.firebasestorage.app",
    messagingSenderId: "724934475215",
    appId: "1:724934475215:web:eba9a16613666589d1e6ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const visitorRef = database.ref('visitors');

// Now set up all Firebase-related functionality
document.addEventListener('DOMContentLoaded', function() {
    // Display visitor count with error handling and logging
    visitorRef.on('value', (snapshot) => {
        const count = snapshot.val() || 0;
        console.log('Current visitor count:', count); // Debug log
        document.getElementById('visitor-count').textContent = count;
    }, (error) => {
        console.error('Error fetching visitor count:', error); // Error logging
    });

    // Welcome overlay functionality
    const welcomeOverlay = document.getElementById('welcome-overlay');
    if (welcomeOverlay) {
        welcomeOverlay.addEventListener('click', function() {
            this.classList.add('hidden');
            setTimeout(() => {
                this.style.display = 'none';
            }, 500);

            // Update visitor count
            visitorRef.transaction((currentCount) => {
                const newCount = (currentCount || 0) + 1;
                return newCount;
            });
        });
    }
});

// Function to update times
function updateTimes() {
    const options = {
        timeZone: 'Asia/Taipei',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    // Update Taipei time
    const taipeiTime = new Date().toLocaleTimeString('en-US', options);
    document.getElementById('taipei-time').textContent = `Taipei: ${taipeiTime}`;

    // Update San Francisco time
    const sfOptions = { ...options, timeZone: 'America/Los_Angeles' };
    const sfTime = new Date().toLocaleTimeString('en-US', sfOptions);
    document.getElementById('sf-time').textContent = `San Francisco: ${sfTime}`;
}

// Update times immediately and then every second
document.addEventListener('DOMContentLoaded', function() {
    updateTimes(); // Initial update
    setInterval(updateTimes, 1000); // Update every second
});