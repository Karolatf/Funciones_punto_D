import { mostrarResultadoFinal } from "./modulos/index.js";

// EJERCICIO 1 //

let nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

console.log (mostrarResultadoFinal (nombreEstudiante, nota1, nota2, nota3));