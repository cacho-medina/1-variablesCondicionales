/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/
function generarISBN() {
    // Prefijo reservado para libros
    const prefix = "978";

    // Generar los 9 dígitos centrales de forma aleatoria
    const digitosCentrales = Math.floor(Math.random() * 1e9)
        .toString()
        .padStart(9, "0");

    // Calcular el dígito de control
    const dígitoControl = calcularDígitoControl(prefix + digitosCentrales);

    // Combinar los componentes para formar el ISBN completo
    const isbnCompleto = prefix + digitosCentrales + dígitoControl;

    return isbnCompleto;
}

function calcularDígitoControl(código) {
    let suma = 0;

    for (let i = 0; i < código.length; i++) {
        const dígito = parseInt(código[i]);
        suma += i % 2 === 0 ? dígito : dígito * 3;
    }

    const residuo = suma % 10;
    const dígitoControl = (10 - residuo) % 10;

    return dígitoControl.toString();
}
class Libro {
    #isbn;
    #titulo;
    #autor;
    #numeroDePaginas;
    constructor(isbn, titulo, autor, numeroDePaginas) {
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numeroDePaginas = numeroDePaginas;
    }
    get isbn() {
        return this.#isbn;
    }
    set isbn(isbn) {
        this.#isbn = isbn;
    }
    get titulo() {
        return this.#titulo;
    }
    set titulo(titulo) {
        this.#titulo = titulo;
    }
    get autor() {
        return this.#autor;
    }
    set autor(autor) {
        this.#autor = autor;
    }
    get numeroDePaginas() {
        return this.#numeroDePaginas;
    }
    set numeroDePaginas(numeroDePaginas) {
        this.#numeroDePaginas = numeroDePaginas;
    }
    mostrarLibro() {
        return `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} páginas`;
    }
}

const libro1 = new Libro(
    generarISBN(),
    "El libro de la selva",
    "Rudyard Kipling",
    400
);
const libro2 = new Libro(
    generarISBN(),
    "Cronica de una muerte anunciada",
    "Gabriel García Márquez",
    499
);

console.log(libro1.mostrarLibro());
console.log(libro2.mostrarLibro());
console.log(
    `El libro con mas paginas es ${
        libro1.numeroDePaginas >= libro2.numeroDePaginas
            ? libro1.titulo
            : libro2.titulo
    }`
);
