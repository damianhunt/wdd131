
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

//temple data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }, 
  // Add more temple objects here...
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
  },
  {
    templeName: "Durban South Africa Temple",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 30139,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
  },
];

function toggleActive(element) {
}

// Selecting DOM elements
const templesSection = document.querySelector(".temples");
const mainHeading = document.querySelector("main h1");

// Initial render of all temples
createTempleCard(temples);
const oldTemplesLink = document.querySelector("#old");
const newTemplesLink = document.querySelector("#new");
const largeTemplesLink = document.querySelector("#large");
const smallTemplesLink = document.querySelector("#small");

//event listeners for filtering temples

// Home Link
document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    mainHeading.textContent = "Home";
    createTempleCard(temples);
});

// Old Temple Link
document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    mainHeading.textContent = "Old Temples";
    const oldTemples = temples.filter(t => {
        // Splitting string to get year reliably
        const year = parseInt(t.dedicated.split(',')[0]);
        return year < 1900;
    });
    createTempleCard(oldTemples);
});

// New Temple Link
document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    mainHeading.textContent = "New Temples";
    const newTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year > 2000;
    });
    createTempleCard(newTemples);
});

// Large Temple Link
document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    mainHeading.textContent = "Large Temples";
    createTempleCard(temples.filter(t => t.area > 90000));
});

// Small Temple Link
document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    mainHeading.textContent = "Small Temples";
    createTempleCard(temples.filter(t => t.area < 10000));
});

//function to create temple cards

function createTempleCard(filteredTemples) {
	document.querySelector(".temples").innerHTML = "";
	filteredTemples.forEach((temple) => {
		let card = document.createElement("section");
		card.classList.add("temple-card");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label"><strong>Location:</strong></span> ${temple.location}`;
		dedicated.innerHTML = `<span class="label"><strong>Dedicated:</strong></span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label"><strong>Size:</strong></span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", "400");
		img.setAttribute("height", "250");	

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".temples").appendChild(card);
	});
}