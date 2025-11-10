//  FUNCIÓN 1: DETERMINAR SI ES PAR O IMPAR //

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "PAR";
    } else {
        return "IMPAR";
    }
}


// FUNCIÓN 2: DETERMINAR SI ES POSITIVO O NEGATIVO//

function esPositivoONegativo(numero) {
    if (numero > 0) {
        return "POSITIVO";
    } else if (numero < 0) {
        return "NEGATIVO";
    } else {
        return "CERO";
    }
}


//FUNCIÓN 3: DETERMINAR SI ES PRIMO //

function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }
    
    // Verificar si tiene divisores entre 2 y numero-1
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    // Si no encontró divisores, es primo
    return true;
}

// FUNCIÓN 4: ANALIZAR NÚMERO COMPLETO //

function analizarNumero(numero) {
    // Obtener cada análisis usando las funciones anteriores
    let parImpar = esParOImpar(numero);
    let positivoNegativo = esPositivoONegativo(numero);
    let primo = esPrimo(numero);
    
    // Construir el mensaje de resultado//
    let resultadoPrimo = primo ? "SÍ es primo" : "NO es primo";
    
    console.log("ANÁLISIS DEL NÚMERO");
    console.log(`Número analizado: ${numero}`);
    console.log(`Par o Impar: ${parImpar}`);
    console.log(`Positivo o Negativo: ${positivoNegativo}`);
    console.log(`¿Es primo?: ${resultadoPrimo}`);
    
    return {
        numero: numero,
        parImpar: parImpar,
        positivoNegativo: positivoNegativo,
        esPrimo: primo
    };
}

// FUNCIÓN 5: SISTEMA DE ANÁLISIS INTERACTIVO //

function sistemaAnalisisNumeros() {
    let continuar = true;
    
    console.log("SISTEMA DE ANÁLISIS DE NÚMEROS ");
    
    while (continuar) {
        let numero = parseInt(prompt("Ingrese un número entero para analizar:"));
        
      
        if (isNaN(numero)) {
            console.log("Error: Debe ingresar un número válido.");
        } else {
       
            analizarNumero(numero);
        }
        
        let respuesta = prompt("¿Desea analizar otro número? (si/no):");
        if (respuesta.toLowerCase() !== "si") {
            continuar = false;
        }
    }
    
    console.log("GRACIAS POR USAR EL SISTEMA ");
}

export { 
    esParOImpar, 
    esPositivoONegativo, 
    esPrimo, 
    analizarNumero, 
    sistemaAnalisisNumeros 
};