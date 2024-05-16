 // Get the video element
 const video = document.getElementById('bg-video');

// Get the section where you want to apply the zoom effect
const aboutSection = document.getElementById('about');

// Function to handle scroll event
window.addEventListener('scroll', function() {
    // Get the current scroll position
    const currentScroll = window.pageYOffset;
    
    // Check if the scroll direction is down or up
    const scrollDirection = currentScroll > aboutSection.offsetTop ? 'down' : 'up';
    
    // Calculate the scale factor based on the scroll direction
    let scale;
    if (scrollDirection === 'down') {
        scale = 1 + currentScroll / window.innerHeight;
    } else {
        scale = 1 - currentScroll / window.innerHeight;
    }
    
    // Apply the scale transformation to the video
    video.style.transform = `scale(${scale})`;
});




// Function to create typewriter effect
function typewriterEffect(element) {
  const text = element.textContent;
  element.textContent = '';
  const duration = 100; // Adjust the duration as needed
  
  // Loop through each character of the text
  for (let i = 0; i < text.length; i++) {
    setTimeout(function() {
      element.textContent += text[i]; // Append each character
    }, duration * i);
  }
}

// Get the catchy-text element
const catchyText = document.querySelector('.catchy-text');

// Apply typewriter effect to the catchy-text element
typewriterEffect(catchyText);
