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
document.getElementById('year').textContent = currentyear;
document.getElementById('currentdate').textContent = currentdate;

//last modified date and time
let d = new Date(document.lastModified)
let date = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
document.getElementById("lastModified").textContent = date

// hamburger
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

/*code for getting day of week written out*/
let weekday = new Date().toLocaleString('en-us', {weekday:'long'});
console.log(weekday);

