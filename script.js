const airplane = document.getElementById('airplane');

// Startposition
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;

// Mausposition
let mouseX = posX;
let mouseY = posY;

// Geschwindigkeit
const speed = 0.08; 

// Mausbewegung tracken
document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX; // Position inkl. scrollen
  mouseY = e.pageY;
});

// Animation Loop
function moveAirplane() {
  // Langsame Bewegung in Richtung der Maus
  posX += (mouseX - posX) * speed;
  posY += (mouseY - posY) * speed;

  airplane.style.left = `${posX}px`;
  airplane.style.top = `${posY}px`;

  requestAnimationFrame(moveAirplane);
}

moveAirplane();