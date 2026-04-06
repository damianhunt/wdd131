const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Populate the product dropdown

const selectElement = document.getElementById("product-name");

products.forEach(product => {
  let option = document.createElement("option");
  option.value = product.id;     // Use id for the value field
  option.textContent = product.name; // Use name for the display
  selectElement.appendChild(option);
});

//local storage review counter

window.addEventListener("load", () => {
  // Retrieve existing count or default to 0
  let reviewCount = Number(localStorage.getItem("review-counter")) || 0;
  
  // Increment the counter
  reviewCount++;
  
  // Store the updated count back to localStorage
  localStorage.setItem("review-counter", reviewCount);
  
  console.log(`Total reviews completed: ${reviewCount}`);
});