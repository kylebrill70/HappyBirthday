// Get elements
const envelope = document.getElementById('envelope');
const flipButton = document.getElementById('flipButton');
const openButton = document.getElementById('openButton');

// Flip the envelope when the flip button is clicked
flipButton.addEventListener('click', () => {
    envelope.classList.add('flip');
});

// Open the card when the open button is clicked
openButton.addEventListener('click', () => {
    // Redirect to the previously created card page
    window.location.href = 'index2.html'; // Replace with actual URL if different
});





// Add this to your enve.js file

const particlesContainer = document.getElementById('particles-container');

function createHeartParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Randomize the position of the heart
    const x = Math.random() * 400; // Width of the envelope
    const y = Math.random() * 250; // Height of the envelope
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Append the particle to the container
    particlesContainer.appendChild(particle);

    // Remove particle after animation ends
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Create hearts at intervals
setInterval(createHeartParticle, 300); // Adjust frequency as needed
