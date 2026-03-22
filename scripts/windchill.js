/** To Calculate Windchill **/
/*Get the temp from the page and make it into a number*/
var temperature = parseFloat(document.querySelector('#temp').textContent)
console.log(temperature)

/*Get the windSpeed from the page and make it into a number*/
var windSpeed = parseFloat(document.querySelector('#windSpeed').textContent)
console.log(windSpeed)

/*define a function to calculat the windSpeed*/
function calcWindChill(temperature, windSpeed) {
    if (temperature > 10 || windSpeed <= 4.8) {
        return "N/A"; // Wind chill index is not defined outside this range
    }
    else {
    var windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed,0.16)) + (0.3965 * temperature * Math.pow(windSpeed,0.16));
    return windChill.toFixed(2); // Round to 2 decimal places
    }
}

/*Call the function and store the result*/
let windChillValue = calcWindChill(temperature, windSpeed)


/*Display the result on the page*/
document.querySelector('#windChill').textContent = windChillValue;