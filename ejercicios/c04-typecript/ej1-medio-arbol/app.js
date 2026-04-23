"use strict";
//JAVASCRIPT: 
//const btn = document.getElementById("buttonGenerar");  // boton
//const input = document.getElementById("idalta");   // el input para ingresar 
//const Pantalla_resultado = document.getElementById("resultado");   // display del resultado
//btn.addEventListener('click', () => {
// const altura=Number(input.value);
//Pantalla_resultado.innerText= "";
//if (input.value === "" | altura < 1 ){ 
//  Pantalla_resultado.innerText = " No se ha ingresado input , invalido "
//Pantalla_resultado.style.color = "red";
//}
//Pantalla_resultado.style.color = "black";
//let arbol = "";
//for (let i = 1; i <= altura; i++) {
// En cada  i, agregamos esa cantidad de asteriscos y un salto de línea
//  arbol += "*".repeat(i) + "\n";
//}
//});
//TYPESCRIPT:
// Selección de elementos con Type Casting y Non-null 
const btn = document.getElementById("buttonGenerar");
const input = document.getElementById("idalta");
const Pantalla_resultado = document.getElementById("resultado");
function generarMedioArbol(n) {
    let resultado = "";
    for (let i = 1; i <= n; i++) {
        resultado += "*".repeat(i) + "\n";
    }
    return resultado;
}
btn.addEventListener('click', () => {
    // Convertimos el valor del input a número
    const altura = Number(input.value);
    // Limpiamos pantalla anterior
    Pantalla_resultado.innerText = "";
    // Validación de entrada
    if (input.value === "" || altura < 1) {
        Pantalla_resultado.innerText = "Error: Ingresa un número válido mayor a 0.";
        Pantalla_resultado.style.color = "red";
        return; // Detiene la ejecución
    }
    // Si es válido, aplicamos color negro y generamos el árbol
    Pantalla_resultado.style.color = "black";
    Pantalla_resultado.innerText = generarMedioArbol(altura);
});
