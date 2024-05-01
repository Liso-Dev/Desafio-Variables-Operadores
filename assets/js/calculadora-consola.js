// Solicitar al usuario que ingrese dos números diferentes y mayores a cero
let num1 = parseFloat(prompt("Ingrese el primer número mayor a cero:"));
let num2 = parseFloat(prompt("Ingrese el segundo número mayor a cero:"));

// Verificar si los números son válidos
if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0 || num1 === num2) {
    console.log("Por favor, ingrese dos números diferentes y mayores a cero.");
} else {
    // Realizar las operaciones
    let suma = num1 + num2;
    let resta = num1 - num2;
    let division = num1 / num2;
    let multiplicacion = num1 * num2;
    let modulo = num1 % num2;

    // Mostrar los resultados
    console.log("Resultados:");
    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("División:", division);
    console.log("Multiplicación:", multiplicacion);
    console.log("Módulo:", modulo);
}

