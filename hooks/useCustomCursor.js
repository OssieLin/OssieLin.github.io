import { useEffect } from 'react';

const useCustomCursor = () => {
  useEffect(() => {
    // Event listeners for welcome overlay and cursor functionality
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const cursor = document.querySelector('.custom-cursor');

    if (!cursor || !welcomeOverlay) {
      console.error('Missing elements:', { cursor, welcomeOverlay });
      return;
    }

    let cursorVisible = true;  // Make sure the cursor is visible initially

    // Update mouse position whenever it moves
    document.addEventListener('mousemove', (e) => {
      if (!cursorVisible) return; // Don't track the mouse if the cursor is hidden

      if (welcomeOverlay.contains(e.target)) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.classList.add('visible');
      } else {
        cursor.classList.remove('visible');
      }
    });

    // When mouse enters the overlay, show the custom cursor immediately
    welcomeOverlay.addEventListener('mouseenter', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.classList.add('visible');
      cursorVisible = true;  // Set cursor to be visible when inside the overlay
    });

    // When mouse leaves the overlay, hide the custom cursor
    welcomeOverlay.addEventListener('mouseleave', () => {
      cursor.classList.remove('visible');
      cursorVisible = true; // Keep it visible after leaving the overlay
    });

    // Hide cursor when overlay is clicked
    welcomeOverlay.addEventListener('click', () => {
      cursor.classList.remove('visible');
      cursorVisible = false;  // Stop following the mouse after the click
      setTimeout(() => {
        welcomeOverlay.classList.add('hidden');
        setTimeout(() => {
          welcomeOverlay.style.display = 'none';
        }, 500);
      }, 200);
    });

    // Ensure cursor shows again when clicking outside the overlay
    document.addEventListener('click', (e) => {
      if (!welcomeOverlay.contains(e.target) && !cursorVisible) {
        cursorVisible = true;
        cursor.classList.add('visible');  // Re-show the cursor on the main page
      }
    });

    // Dynamic text typing effect
    const texts = [
      "Get to know me?",
      "Want to explore my projects?",
      "Curious about my experiences?",
      "Let's connect!"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;

    function typeWriter() {
      const currentText = texts[textIndex];
      const dynamicText = document.getElementById('dynamic-text');
      if (dynamicText) {
        if (isDeleting) {
          dynamicText.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        } else {
          dynamicText.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }

        let speed = isDeleting ? typingDelay / 2 : typingDelay;

        if (!isDeleting && charIndex === currentText.length) {
          speed = 2000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          speed = 500;
        }

        setTimeout(typeWriter, speed);
      }
    }

    // Start the typewriter effect when the page loads
    typeWriter();

    // Cleanup event listeners and Firebase on unmount
    return () => {
      visitorRef.off();
    };
  }, []);
};

export default useCustomCursor;
