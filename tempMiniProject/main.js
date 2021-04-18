//Create a variable named kelvinTemp and assign the value to 301
let kelvinTemp = 301
//Celsius is 273.15 degrees less than kelvin.
//Create a variable named celsiusTemp and assign the value to 273.15 less than kelvinTemp
let celsiusTemp = kelvinTemp - 273.15
//Create a variable named fahrenheitTemp and assign the value to celsius * (9/5) + 32
//This code creates a new variable called fahrenheitTemp, which is then assigned the value of celsiusTemp.  The rest is the equation that will convert the temperature to the correct degrees.
let fahrenheitTemp = celsiusTemp * (9/5) + 32
//The Math.floor method rounds the number down to the nearest number.
//Simply take the variable name and assign it to Math.floor(and then the number - or variable - you want it to round down).
fahrenheitTemp = Math.floor(fahrenheitTemp)

console.log("The temperature is " + fahrenheitTemp + " degrees Fahrenheit.")