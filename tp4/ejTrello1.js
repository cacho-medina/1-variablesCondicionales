/*
Gestión de inventario en una tienda: Tienes dos arrays, uno que representa los productos en stock y otro que almacena los precios de los productos. Debes crear funciones que permitan agregar nuevos productos al inventario, eliminar productos agotados y calcular el valor total del inventario.
*/

let productos_stock = [];
let productos_precios = [];
function agregar(nombreProdcuto, precioProducto) {
    productos_stock.push(nombreProdcuto);
    productos_precios.push(parseInt(precioProducto));
}
function eliminar(producto) {
    const newStock = productos_stock.filter(
        (productoStock) => productoStock !== producto
    );
    productos_stock = [...newStock];
    console.log(`\n${producto} borrado`);
}
function calcularTotal() {
    const total = productos_precios.reduce(
        (acumulador, precio) => acumulador + precio,
        0
    );
    console.log("Total:", total);
}
function verProductos() {
    console.log("\nProductos\n-----------------");
    productos_stock.map((producto, index) => {
        console.log(`${producto} | ${productos_precios[index]}`);
    });
}

agregar("remera", 200);
agregar("zapato", 2000);
agregar("gorra", 150);
calcularTotal();
verProductos();
eliminar("zapato");
verProductos();
