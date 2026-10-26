let num1 = parseFloat(prompt("Ingresa el primer numero:"));
let num2 = parseFloat(prompt("Ingresa el segundo numero:"));
let num3 = parseFloat(prompt("Ingresa el tercer numero:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.error("Error: Al menos uno de los valores ingresados no es un numero valido.");
} else {
    if (num1 === num2 && num2 === num3) {
        console.log("Los numeros ingresados son iguales: " + num1 + ", " + num2 + ", " + num3);
    } else {
        let numeros = [num1, num2, num3];
        let mayorAMenor = [...numeros].sort((a, b) => b - a);
        let menorAMayor = [...numeros].sort((a, b) => a - b);
        console.log("Numeros ordenados de mayor a menor: " + mayorAMenor.join(", "));
        console.log("Numeros ordenados de menor a mayor: " + menorAMayor.join(", "));
    }
}