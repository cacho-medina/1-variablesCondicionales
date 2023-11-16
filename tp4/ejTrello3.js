/*
Catálogo de biblioteca: Tienes un array que almacena títulos de libros en una biblioteca. Debes crear funciones que permitan a los usuarios buscar libros por título, verificar si un libro específico está disponible para préstamo y llevar un registro de la disponibilidad de los libros.
*/
let libros = [
    "1984",
    "Cien años de soledad",
    "Matar a un ruiseñor",
    "Don Quijote de la Mancha",
    "El Gran Gatsby",
    "Crónica de una muerte anunciada",
    "En el camino",
    "Harry Potter y la piedra filosofal",
    "El señor de las moscas",
    "Orgullo y prejuicio",
];
function getLibros() {
    console.log("\nLIBROS DISPONIBLES\n----------------");
    libros.map((libro) => {
        console.log(libro);
    });
}
function prestarLibro(nombre) {
    if (buscarLibroPorTitulo(nombre)) {
        const filtered = libros.filter((libro) => libro !== nombre);
        libros = [...filtered];
        console.log(`\nel libro ${nombre} fue prestado`);
    } else {
        console.log(`\nel libro ${nombre} no esta disponible`);
    }
}
function buscarLibroPorTitulo(titulo) {
    const founded = libros.find((libro) => libro === titulo);
    if (founded) {
        console.log(`\nel libro ${founded} fue encontrado`);
        return true;
    } else {
        console.log(`\nel libro ${titulo} no existe`);
        return false;
    }
}

getLibros();
buscarLibroPorTitulo("Orgullo y prejuicio");
buscarLibroPorTitulo("La Scaloneta");
prestarLibro("El Gran Gatsby");
getLibros();
