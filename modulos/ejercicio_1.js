//  FUNCIÓN 1: CALCULAR PROMEDIO  //

function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// FUNCIÓN 2: DETERMINAR SI APRUEBA O REPRUEBA //

function determinarAprobacion(promedio) {
    if (promedio >= 3.0) {
        return "APROBÓ";
    } else {
        return "REPROBÓ";
    }
}


//  FUNCIÓN 3: MOSTRAR RESULTADO FINAL //

function mostrarResultadoFinal(nombre, nota1, nota2, nota3) {
    let promedio = calcularPromedio(nota1, nota2, nota3);
    let resultado = determinarAprobacion(promedio);
    return `Estudiante: ${nombre} | Promedio: ${promedio.toFixed(2)} | Resultado: ${resultado}`;
}

//  EXPORTAR LAS FUNCIONES //
export { calcularPromedio, determinarAprobacion, mostrarResultadoFinal };