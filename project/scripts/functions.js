
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

//local storage contact counter

window.addEventListener("load", () => {
    // select my form by ID
    const contactForm = document.getElementById("contact");

    if (contactForm) {

    contactForm.addEventListener("submit", (event) => {
    // Retrieve existing count or default to 0
    let contactedCount = Number(localStorage.getItem("contacted-counter")) || 0;
  
    // Increment the counter
    contactedCount++;
  
    // Store the updated count back to localStorage
    localStorage.setItem("contacted-counter", contactedCount);
  
    console.log(`Total customers made contact: ${contactedCount}`);
    }}
});



document.addEventListener('DOMContentLoaded', () => {
    const heroData = [
        { id: 'hero-1', isActive: true},
        { id: 'hero-2', isActive: false }
    ];

    let intervalId; // Variable to store our timer reference

    function updateDOM() {
        heroData.forEach(hero => {
            const el = document.getElementById(hero.id);
            if (el) {
                el.style.display = hero.isActive ? 'block' : 'none';
                el.style.backgroundImage = hero.img; // Ensures image updates
            }
        });
    }

    function cycleHeroes() {
        // Simple array-based toggle logic
        heroData.forEach(hero => hero.isActive = !hero.isActive);
        updateDOM();
    }

    function startTimer() {
        // Clear any existing timer before starting a new one
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(cycleHeroes, 7000); 
    }

    // 1. Set up Manual Click: Attach to the parent container or individual divs
    heroData.forEach(hero => {
        const el = document.getElementById(hero.id);
        if (el) {
            el.addEventListener('click', () => {
                cycleHeroes(); // Manual switch
                startTimer();  // Reset the 10s countdown
            });
            // Add a pointer cursor so users know it's clickable
            el.style.cursor = 'pointer';
        }
    });

    // 2. Start initial timer and DOM state
    updateDOM();
    startTimer();
});