// CATÁLOGO DE DESTINOS DISPONIBLES //

const destinosDisponibles = [
    { id: 1, nombre: "Cartagena", precioPorPersona: 800000, duracionDias: 5 },
    { id: 2, nombre: "San Andrés", precioPorPersona: 1200000, duracionDias: 7 },
    { id: 3, nombre: "Eje Cafetero", precioPorPersona: 600000, duracionDias: 4 },
    { id: 4, nombre: "Amazonas", precioPorPersona: 1500000, duracionDias: 6 },
    { id: 5, nombre: "Bogotá", precioPorPersona: 400000, duracionDias: 3 }
];


//  VARIABLE GLOBAL: RESERVAS //
let reservas = [];


// FUNCIÓN 1: MOSTRAR DESTINOS DISPONIBLES //

function mostrarDestinos() {
    console.log("DESTINOS DISPONIBLES");
    for (let i = 0; i < destinosDisponibles.length; i++) {
        let destino = destinosDisponibles[i];
        console.log(`${destino.id}. ${destino.nombre} - $${destino.precioPorPersona} por persona (${destino.duracionDias} días)`);
    }
}


//FUNCIÓN 2: BUSCAR DESTINO POR ID //

function buscarDestinoPorId(id) {
    for (let i = 0; i < destinosDisponibles.length; i++) {
        if (destinosDisponibles[i].id === id) {
            return destinosDisponibles[i];
        }
    }
    return null;
}


//FUNCIÓN 3: CALCULAR COSTO BASE DEL VIAJE

function calcularCostoBase(precioPorPersona, numeroPersonas) {
    return precioPorPersona * numeroPersonas;
}


//  FUNCIÓN 4: CALCULAR DESCUENTO (FUNCIÓN FLECHA) //

const calcularDescuento = (costoBase, numeroPersonas) => {
    let descuento = 0;
    
    if (numeroPersonas >= 5) {
        descuento = costoBase * 0.20;
    } else if (numeroPersonas >= 3) {
        descuento = costoBase * 0.10;
    }
    
    return descuento;
};

// FUNCIÓN 5: CALCULAR COSTO ADICIONAL POR SEGURO (FUNCIÓN FLECHA)//

const calcularSeguro = (numeroPersonas, duracionDias) => {
    const costoSeguroPorPersonaPorDia = 15000;
    return numeroPersonas * duracionDias * costoSeguroPorPersonaPorDia;
};



// FUNCIÓN 6: CALCULAR TOTAL DEL VIAJE//

function calcularTotalViaje(costoBase, descuento, costoSeguro) {
    return costoBase - descuento + costoSeguro;
}



// FUNCIÓN 7: GENERAR CÓDIGO DE RESErVA//

const generarCodigoReserva = () => {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    let codigo = "";
    
    // Generar 3 letras aleatorias//
    for (let i = 0; i < 3; i++) {
        codigo += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    
    // Agregar un guión//
    codigo += "-";
    
    // Generar 4 números aleatorios//
    for (let i = 0; i < 4; i++) {
        codigo += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }
    
    return codigo;
};



//  FUNCIÓN 8: CREAR RESERVA //

function crearReserva(nombreCliente, destinoId, numeroPersonas, incluyeSeguro) {
    // Buscar el destino seleccionado
    let destino = buscarDestinoPorId(destinoId);
    
    if (!destino) {
        return "Error: Destino no encontrado.";
    }
    
    if (numeroPersonas <= 0) {
        return "Error: El número de personas debe ser mayor a 0.";
    }
    
    // Calcular costos
    let costoBase = calcularCostoBase(destino.precioPorPersona, numeroPersonas);
    let descuento = calcularDescuento(costoBase, numeroPersonas);
    let costoSeguro = incluyeSeguro ? calcularSeguro(numeroPersonas, destino.duracionDias) : 0;
    let totalAPagar = calcularTotalViaje(costoBase, descuento, costoSeguro);
    
    // Generar código de reserva
    let codigoReserva = generarCodigoReserva();
    
    // Crear objeto de reserva
    let reserva = {
        codigo: codigoReserva,
        cliente: nombreCliente,
        destino: destino.nombre,
        numeroPersonas: numeroPersonas,
        duracionDias: destino.duracionDias,
        costoBase: costoBase,
        descuento: descuento,
        costoSeguro: costoSeguro,
        totalAPagar: totalAPagar,
        incluyeSeguro: incluyeSeguro
    };
    
    // Agregar reserva al array de reservas
    reservas.push(reserva);
    
    return reserva;
}

//  FUNCIÓN 9: MOSTRAR DETALLE DE RESERVA//

const mostrarDetalleReserva = (reserva) => {
    console.log(" CONFIRMACIÓN DE RESERVA");
    console.log(`Código de reserva: ${reserva.codigo}`);
    console.log(`Cliente: ${reserva.cliente}`);
    console.log(`Destino: ${reserva.destino}`);
    console.log(`Número de personas: ${reserva.numeroPersonas}`);
    console.log(`Duración: ${reserva.duracionDias} días`);
    console.log(`Costo base: $${reserva.costoBase}`);
    console.log(`Descuento aplicado: $${reserva.descuento}`);
    console.log(`Seguro de viaje: $${reserva.costoSeguro}`);
    console.log(`TOTAL A PAGAR: $${reserva.totalAPagar}`);
    console.log(`Incluye seguro: ${reserva.incluyeSeguro ? "Sí" : "No"}`);
};

//  FUNCIÓN 10: BUSCAR RESERVA POR CÓDIGO //

const buscarReservaPorCodigo = (codigo) => {
    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].codigo === codigo) {
            return reservas[i];
        }
    }
    return null;
};


//  FUNCIÓN 11: LISTAR TODAS LAS RESERVAS//

function listarTodasLasReservas() {
    if (reservas.length === 0) {
        console.log("No hay reservas registradas.");
        return;
    }
    
    console.log("LISTADO DE RESERVAS");
    for (let i = 0; i < reservas.length; i++) {
        let reserva = reservas[i];
        console.log(`${i + 1}. Código: ${reserva.codigo} | Cliente: ${reserva.cliente} | Destino: ${reserva.destino} | Total: $${reserva.totalAPagar}`);
    }
}

//  FUNCIÓN 12: CALCULAR ESTADÍSTICAS DE LA AGENCIA//

const calcularEstadisticas = () => {
    if (reservas.length === 0) {
        return "No hay reservas para generar estadísticas.";
    }
    
    let totalIngresos = 0;
    let totalPersonas = 0;
    
    for (let i = 0; i < reservas.length; i++) {
        totalIngresos += reservas[i].totalAPagar;
        totalPersonas += reservas[i].numeroPersonas;
    }
    
    let promedioIngresoPorReserva = totalIngresos / reservas.length;
    
    console.log(" ESTADÍSTICAS DE LA AGENCIA ");
    console.log(`Total de reservas: ${reservas.length}`);
    console.log(`Total de personas: ${totalPersonas}`);
    console.log(`Ingresos totales: $${totalIngresos}`);
    console.log(`Promedio por reserva: $${promedioIngresoPorReserva}`);
    
    return {
        totalReservas: reservas.length,
        totalPersonas: totalPersonas,
        totalIngresos: totalIngresos,
        promedioIngresoPorReserva: promedioIngresoPorReserva
    };
};


// FUNCIÓN 13: SISTEMA PRINCIPAL DE LA AGENCIA //

function sistemaAgenciaViajes() {
    let continuar = true;
    
    console.log("BIENVENIDO A VIAJES COLOMBIA");
    console.log("Tu agencia de confianza para explorar Colombia");
    
    while (continuar) {
        let opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Ver destinos disponibles\n" +
            "2. Crear nueva reserva\n" +
            "3. Consultar reserva por código\n" +
            "4. Listar todas las reservas\n" +
            "5. Ver estadísticas de la agencia\n" +
            "6. Salir\n" +
            "Ingrese el número de la opción:"
        );
        
        switch (opcion) {
            case "1":
                mostrarDestinos();
                break;
                
            case "2":
                mostrarDestinos();
                let nombreCliente = prompt("Ingrese el nombre del cliente:");
                let destinoId = parseInt(prompt("Ingrese el número del destino deseado:"));
                let numeroPersonas = parseInt(prompt("Ingrese el número de personas:"));
                let incluyeSeguro = prompt("¿Desea incluir seguro de viaje? (si/no):").toLowerCase() === "si";
                
                let reserva = crearReserva(nombreCliente, destinoId, numeroPersonas, incluyeSeguro);
                
                if (typeof reserva === "string") {
                    console.log(reserva);
                } else {
                    mostrarDetalleReserva(reserva);
                }
                break;
                
            case "3":
                let codigoBuscar = prompt("Ingrese el código de reserva:");
                let reservaEncontrada = buscarReservaPorCodigo(codigoBuscar);
                
                if (reservaEncontrada) {
                    mostrarDetalleReserva(reservaEncontrada);
                } else {
                    console.log("Reserva no encontrada.");
                }
                break;
                
            case "4":
                listarTodasLasReservas();
                break;
                
            case "5":
                calcularEstadisticas();
                break;
                
            case "6":
                console.log("GRACIAS POR USAR VIAJES COLOMBIA");
                console.log("¡Esperamos verte pronto!");
                continuar = false;
                break;
                
            default:
                console.log("Opción inválida. Por favor seleccione una opción del 1 al 6.");
                break;
        }
    }
}

export { 
    mostrarDestinos,
    buscarDestinoPorId,
    calcularCostoBase,
    calcularDescuento,
    calcularSeguro,
    calcularTotalViaje,
    generarCodigoReserva,
    crearReserva,
    mostrarDetalleReserva,
    buscarReservaPorCodigo,
    listarTodasLasReservas,
    calcularEstadisticas,
    sistemaAgenciaViajes
};
