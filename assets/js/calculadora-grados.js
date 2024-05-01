function convertirTemperatura() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9 / 5) + 32;

    // Mostrar los resultados en la página HTML
    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<p>" + celsius + " °Celsius son equivalentes a:</p>" +
        "<p>" + kelvin.toFixed(2) + " °Kelvin</p>" +
        "<p>" + fahrenheit.toFixed(2) + " °Fahrenheit</p>";
}