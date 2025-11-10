//  IMPORTAR LAS FUNCIONES  //

import {calcularPromedio, determinarAprobacion, mostrarResultadoFinal} from './ejercicio_1.js';
import {depositar, retirar, consultarSaldo, sistemaBancario} from "./ejercicio_2.js";
import { calcularSubtotalProducto, calcularTotalSinIva, calcularIvaTotal, calcularTotalAPagar, generarFactura, sistemaFacturacion } from "./ejercicio_3.js";
import { esParOImpar, esPositivoONegativo, esPrimo, analizarNumero, sistemaAnalisisNumeros } from "./ejercicio_4.js";
import { mostrarDestinos, buscarDestinoPorId, calcularCostoBase, calcularDescuento, calcularSeguro, calcularTotalViaje, generarCodigoReserva, crearReserva, mostrarDetalleReserva, buscarReservaPorCodigo, listarTodasLasReservas, calcularEstadisticas, sistemaAgenciaViajes } from "./ejercicio_5.js";


// RE-EXPORTACIONES// 

// Ejercicio 1
export { calcularPromedio, determinarAprobacion, mostrarResultadoFinal };

// Ejercicio 2
export { depositar, retirar, consultarSaldo, sistemaBancario };

// Ejercicio 3
export { calcularSubtotalProducto, calcularTotalSinIva, calcularIvaTotal, calcularTotalAPagar, generarFactura, sistemaFacturacion };

// Ejercicio 4
export { esParOImpar, esPositivoONegativo, esPrimo, analizarNumero, sistemaAnalisisNumeros };

// Ejercicio 5
export { mostrarDestinos, buscarDestinoPorId, calcularCostoBase, calcularDescuento, calcularSeguro, calcularTotalViaje, generarCodigoReserva, crearReserva, mostrarDetalleReserva, buscarReservaPorCodigo, listarTodasLasReservas, calcularEstadisticas, sistemaAgenciaViajes };

