/*10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/
class Avion {
    constructor(nombre, capacidad, destino, listaPasajeros) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.lislistaPasajeros = [...listaPasajeros];
    }
    abordar() {
        if (this.capacidad - this.lislistaPasajeros.length > 0) {
            return `En el avion ${this.nombre} hay capacidad disponible`;
        } else {
            return `No hay capacidad en ${this.nombre}, el avion esta lleno. Sorry`;
        }
    }
}
class Aeropuerto {
    listaDeAviones = [];
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
    }
    agregarAvion(avion) {
        this.listaDeAviones.push(avion);
    }
    buscarAvion(nombreAvion) {
        const founded = this.listaDeAviones.find(
            (avion) => avion.nombre === nombreAvion
        );
        if (founded) {
            return `el avion ${founded.nombre} fue encontrado`;
        } else {
            return `el avion ${nombreAvion} no fue encontrado`;
        }
    }
}
const a1 = new Avion("Messi", 5, "Miami", [
    "Lionel",
    "Anto",
    "Mateo",
    "Ciro",
    "Thiago",
]);
const a2 = new Avion("Scaloni", 4, "Rosario", ["Lionel Scaloni", "Aimar"]);
const a3 = new Avion("Diciembre", 2, "Qatar", []);
const matienzo = new Aeropuerto("Aeropuerto Internacional");

matienzo.agregarAvion(a1);
matienzo.agregarAvion(a2);
matienzo.agregarAvion(a3);
console.log(matienzo.buscarAvion("Messi"));
console.log(matienzo.buscarAvion("Cristiano"));
console.log(a1.abordar());
console.log(a2.abordar());
console.log(a3.abordar());
