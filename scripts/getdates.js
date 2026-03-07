const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const todaysdate = new Date();
const dayName = daynames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
const currentdate = `${dayName},  ${todaysdate.getDate()} ${monthName} ${year}`;
document.getElementById('year').textContent = year;

// Get the last modified date string
    const lastModifString = document.lastModified;

    // Convert the string to a more readable Date object
    const lastModifDate = new Date(lastModifString);

    // Format and display the date in the HTML element
    if (lastModifString) {
        document.getElementById('lastModified').innerHTML = lastModifDate.toLocaleDateString();
    }