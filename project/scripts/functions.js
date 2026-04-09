
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

//local storage contact counter

window.addEventListener("load", () => {
  // Retrieve existing count or default to 0
  let contactedCount = Number(localStorage.getItem("contacted-counter")) || 0;
  
  // Increment the counter
  contactedCount++;
  
  // Store the updated count back to localStorage
  localStorage.setItem("contacted-counter", contactedCount);
  
  console.log(`Total customers made contact: ${contactedCount}`);
});