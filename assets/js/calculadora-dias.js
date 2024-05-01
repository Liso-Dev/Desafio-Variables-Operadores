function convertirTiempo() {
    let dias = parseInt(document.getElementById("dias").value);

    let anos = Math.floor(dias / 365);
    dias %= 365;

    let semanas = Math.floor(dias / 7);
    dias %= 7;

    // Mostrar los resultados en la página HTML
    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<p>Equivalente en tiempo:</p>" +
        "<p>" + anos + " año(s), " + semanas + " semana(s) y " + dias + " día(s)</p>";
}