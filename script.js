window.addEventListener('DOMContentLoaded', (event) => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'; // Hide the scroll bars initially
  
    // Add event listener to enable scrolling once the content has loaded
    window.addEventListener('load', (event) => {
      body.style.overflow = 'auto'; // Show the scroll bars
    });
  });
  