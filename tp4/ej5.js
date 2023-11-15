/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
*/
class Persona {
    constructor(nombre, edad, sexo, peso, altura, nacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = this.generarDni();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }
    mostrarGeneracion() {
        if (this.edad >= 1994 && this.edad <= 2010) {
            return `Pertenece a la generacion Z y su rasgo caracteristico es la irreverencia`;
        }
        if (this.edad >= 1981 && this.edad <= 1993) {
            return `Pertenece a la generacion Y y su rasgo caracteristico es la frustracion`;
        }
        if (this.edad >= 1969 && this.edad <= 1980) {
            return `Pertenece a la generacion X y su rasgo caracteristico es la obsesion al exito`;
        }
        if (this.edad >= 1949 && this.edad <= 1968) {
            return `Pertenece a la generacion del Baby Boom y su rasgo caracteristico es la ambicion`;
        }
        if (this.edad >= 1930 && this.edad <= 1948) {
            return `Pertenece a la Silent Generation y su rasgo caracteristico es la austeridad`;
        }
        return "No pertenece a ninguna generacion de la tabla";
    }
    esMayorDeEdad() {
        return this.edad >= 18 ? "Es mayor" : "No es mayor";
    }
    mostrarDatos() {
        return `nombre: ${this.nombre}\nedad:${this.edad}\ndni:${
            this.dni
        }\nsexo:${this.sexo}\npeso:${this.peso}Kg\naltura:${
            this.altura
        }cm\nnacimiento:${
            this.nacimiento
        }\n${this.mostrarGeneracion()}\n${this.esMayorDeEdad()}`;
    }
    generarDni() {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }
}

const p1 = new Persona("Joaquin", 23, "M", 80, 165, 2000);
console.log(p1.mostrarDatos());
