/*9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido() {}
}

class Perro extends Animal {
    emitirSonido() {
        return "Guau!";
    }
}
class Gato extends Animal {
    emitirSonido() {
        return "Miau!";
    }
}

const perro = new Perro("Lola", 10);
const gato = new Gato("Macri", 10);

console.log(perro.emitirSonido());
console.log(gato.emitirSonido());
