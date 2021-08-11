let convertFahrenheitToCelsius = function(temp) {
    let celciusValue = (temp - 32) * 5 / 9
    return celciusValue
}

let returnValue1 = convertFahrenheitToCelsius(32);
let returnValue2 = convertFahrenheitToCelsius(68);

console.log(returnValue1)
console.log(returnValue2)