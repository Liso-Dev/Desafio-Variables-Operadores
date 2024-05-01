function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);
    let num5 = parseFloat(document.getElementById("num5").value);

    let suma = num1 + num2 + num3 + num4 + num5;
    let promedio = suma / 5;

    // Mostrar los resultados en la página HTML
    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<p>Suma de los números: " + suma + "</p>" +
        "<p>Promedio de los números: " + promedio + "</p>";
}