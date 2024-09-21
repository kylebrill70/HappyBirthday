document.getElementById('playVideoButton').addEventListener('click', function() {
    const video = document.getElementById('birthdayVideo');
    
    video.style.display = 'none'; // Keep the video hidden
    video.play(); // Play the video
});



// Fireworks Particles Effect

const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Fireworks variables
let particles = [];
const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 6 + 4; // Increased particle size
        this.speedX = (Math.random() * 6 - 3) * 1.5; // Faster spread
        this.speedY = (Math.random() * 6 - 3) * 1.5; // Faster spread
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = 120; // Increased life duration
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 2;
        if (this.life > 0) {
            this.size -= 0.03; // Slower shrink rate
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createFireworks(x, y) {
    // Create more particles (increased to 80)
    for (let i = 0; i < 80; i++) {
        particles.push(new Particle(x, y));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Remove particles that have faded
        if (particles[i].life <= 0 || particles[i].size <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(animate);
}

// Trigger fireworks randomly around the card in a loop
function randomFireworks() {
    const card = document.querySelector('.card');
    const rect = card.getBoundingClientRect();

    // Fireworks around the card boundary
    const randomX = Math.random() * (rect.right - rect.left) + rect.left;
    const randomY = Math.random() * (rect.bottom - rect.top) + rect.top;

    createFireworks(randomX, randomY);
}

// Continuously create fireworks every 500ms (faster)
setInterval(randomFireworks, 500);

// Start animation
animate();


