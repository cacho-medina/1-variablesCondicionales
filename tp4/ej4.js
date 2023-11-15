/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimirDatos() {
        return `#${this.codigo} | producto: ${this.nombre} - $${this.precio}`;
    }
}

const p1 = new Producto(1, "Mate", 5000);
const p2 = new Producto(2, "Monitor", 50000);
const p3 = new Producto(3, "Pizarra", 15000);

const productos = [p1, p2, p3];

function imprimirProductos() {
    productos.map((p) => console.log(p.imprimirDatos()));
}
imprimirProductos();
