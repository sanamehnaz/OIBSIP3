function convertTemperature() {
    let inputTemperature = parseFloat(document.getElementById("temperatureInput").value);
    let unit = document.getElementById("unitSelect").value;
    let resultElement = document.getElementById("result");
    let result;

    if (isNaN(inputTemperature)) {
        result = "Please enter a valid number.";
    } else {
        if (unit === "celsius") {
            result = `${inputTemperature} °C is ${celsiusToFahrenheit(inputTemperature)} °F`;
        } else if (unit === "fahrenheit") {
            result = `${inputTemperature} °F is ${fahrenheitToCelsius(inputTemperature)} °C`;
        } else if (unit === "kelvin") {
            result = `${inputTemperature} K is ${kelvinToCelsius(inputTemperature)} °C`;
        }
    }

    resultElement.textContent = result;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
