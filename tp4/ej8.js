/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".*/

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
    despedirse() {
        return "Chau!";
    }
}

const p1 = new Persona("Joaquin", 23, "estudiante");
const p2 = new Persona("Sofia", 23, "estudiante");

console.log(p1.saludar());
console.log(p1.despedirse());
console.log(p2.saludar());
console.log(p2.despedirse());
