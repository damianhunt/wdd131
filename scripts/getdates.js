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
document.getElementById('currentdate').textContent = currentdate;

//last modified date and time
document.getElementById("lastModified").innerHTML = document.lastModified;