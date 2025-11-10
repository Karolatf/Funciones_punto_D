//FUNCIÓN 1: CALCULAR SUBTOTAL POR PRODUCTO //

function calcularSubtotalProducto(precio, cantidad) {
    return precio * cantidad;
}

//  FUNCIÓN 2: CALCULAR TOTAL SIN IVA //

function calcularTotalSinIva(productos) {
    let totalSinIva = 0;
    
    for (let i = 0; i < productos.length; i++) {
        let subtotal = calcularSubtotalProducto(productos[i].precio, productos[i].cantidad);
        totalSinIva += subtotal;
    }
    
    return totalSinIva;
}



//  FUNCIÓN 3: CALCULAR IVA TOTAL//

function calcularIvaTotal(totalSinIva) {
    return totalSinIva * 0.19;
}


//  FUNCIÓN 4: CALCULAR VALOR TOTAL A PAGAR //

function calcularTotalAPagar(totalSinIva, ivaTotal) {
    return totalSinIva + ivaTotal;
}

// FUNCIÓN 5: GENERAR FACTURA COMPLETA (FUNCIÓN FLECHA) //

const generarFactura = (productos) => {
    console.log("FACTURA DE COMPRA");
    console.log("DETALLE DE PRODUCTOS:");
    
    //Para mostrar cada producto con su subtotal //
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        let subtotal = calcularSubtotalProducto(producto.precio, producto.cantidad);
        console.log(`${producto.nombre}`);
        console.log(`  Precio unitario: $${producto.precio} | Cantidad: ${producto.cantidad}`);
        console.log(`  Subtotal: $${subtotal}`);
    }
    
    // Calcular totales //
    let totalSinIva = calcularTotalSinIva(productos);
    let ivaTotal = calcularIvaTotal(totalSinIva);
    let totalAPagar = calcularTotalAPagar(totalSinIva, ivaTotal);
    
    // Mostrar el resumen //
    console.log("RESUMEN:");
    console.log(`Total sin IVA: $${totalSinIva}`);
    console.log(`IVA (19%): $${ivaTotal}`);
    console.log(`TOTAL A PAGAR: $${totalAPagar}`);
    
    // Retornar objeto con todos los valores calculados //
    return {
        productos: productos,
        totalSinIva: totalSinIva,
        ivaTotal: ivaTotal,
        totalAPagar: totalAPagar
    };
};


// FUNCIÓN 6: SISTEMA DE FACTURACIÓN INTERACTIVO //

function sistemaFacturacion() {
    let productos = [];
    let agregarMas = true;
    
    console.log("SISTEMA DE FACTURACIÓN ");
    
    // Ciclo para agregar productos//
    while (agregarMas) {
        let nombre = prompt("Ingrese el nombre del producto:");
        let precio = parseFloat(prompt("Ingrese el precio unitario del producto:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad:"));
        
        // Validar que los datos sean correctos
        if (nombre && precio > 0 && cantidad > 0) {
            // Crear objeto producto y agregarlo a la lista //
            productos.push({
                nombre: nombre,
                precio: precio,
                cantidad: cantidad
            });
            
            console.log(`Producto "${nombre}" agregado correctamente.`);
        } else {
            console.log("Error: Datos inválidos. El producto no fue agregado.");
        }
        
        // Preguntar si desea agregar otro producto//
        let respuesta = prompt("¿Desea agregar otro producto? (si/no):");
        if (respuesta.toLowerCase() !== "si") {
            agregarMas = false;
        }
    }
    
    // Validar que se haya agregado al menos un producto//
    if (productos.length > 0) {
        // Generar y mostrar la factura
        generarFactura(productos);
    } else {
        console.log("No se agregaron productos. No se puede generar la factura.");
    }
}

export { 
    calcularSubtotalProducto, 
    calcularTotalSinIva, 
    calcularIvaTotal, 
    calcularTotalAPagar, 
    generarFactura, 
    sistemaFacturacion 
};