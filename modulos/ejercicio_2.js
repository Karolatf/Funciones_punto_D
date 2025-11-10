// VARIABLE GLOBAL: SALDO //
let saldo = 0;


// FUNCIÓN 1: DEPOSITAR DINERO //

function depositar(monto) {
    if (monto > 0) {
        saldo += monto;
        return `✅ Depósito exitoso. Nuevo saldo: $${saldo.toFixed(2)}`;
    } else {
        return `❌ Error: El monto a depositar debe ser mayor a cero.`;
    }
}


// FUNCIÓN 2: RETIRAR DINERO /

function retirar(monto) {
    if (monto <= 0) {
        return `❌ Error: El monto a retirar debe ser mayor a cero.`;
    } else if (monto > saldo) {
        return `❌ Error: Saldo insuficiente. Saldo actual: $${saldo.toFixed(2)}`;
    } else {
        saldo -= monto;
        return `✅ Retiro exitoso. Nuevo saldo: $${saldo.toFixed(2)}`;
    }
}


// FUNCIÓN 3: CONSULTAR SALDO //

function consultarSaldo() {
    return `💰 Saldo actual: $${saldo.toFixed(2)}`;
}


//  FUNCIÓN 4: SISTEMA BANCARIO PRINCIPAL //

function sistemaBancario() {
    let continuar = true;
    
    console.log("BIENVENIDO AL SISTEMA BANCARIO");
    console.log(consultarSaldo());
    
    while (continuar) {
        // Mostrar menú de opciones
        let opcion = prompt(
            "Seleccione una operación:\n" +
            "1. Depositar\n" +
            "2. Retirar\n" +
            "3. Consultar saldo\n" +
            "4. Salir\n" +
            "Ingrese el número de la opción:"
        );
        
        // Procesar la opción seleccionada
        switch (opcion) {
            case "1":
                let montoDeposito = parseFloat(prompt("Ingrese el monto a depositar:"));
                console.log(depositar(montoDeposito));
                break;
                
            case "2":
                let montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
                console.log(retirar(montoRetiro));
                break;
                
            case "3":
                console.log(consultarSaldo());
                break;
                
            case "4":
                console.log(" GRACIAS POR USAR EL SISTEMA BANCARIO ");
                console.log(consultarSaldo());
                continuar = false;
                break;
                
            default:
                console.log("❌ Opción inválida. Por favor seleccione 1, 2, 3 o 4.");
                break;
        }
    }
}

// Esta es la función principal que coordina todo el sistema bancario.//
// El ciclo termina cuando el usuario selecciona "4" (Salir).//

export { depositar, retirar, consultarSaldo, sistemaBancario };