/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/
let agenda;
function show() {
    document.querySelector(".hide").setAttribute("class", "show");
    document.querySelector(".btn").setAttribute("class", "hide");
    agenda = new Agenda();
    return agenda;
}
function crearContacto() {
    const nombre = prompt("ingrese nombre:");
    const numero = parseInt(prompt("ingrese numero:"));
    let nuevo = new Contacto(nombre, numero);
    return nuevo;
}
class Contacto {
    #nombre;
    #numero;
    constructor(nombre, numero) {
        this.nombre = nombre;
        this.numero = numero;
    }
    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    get numero() {
        return this.#numero;
    }
    set numero(numero) {
        this.#numero = numero;
    }
}
class Agenda {
    #contactos = [];
    set contactos(contactos) {
        this.#contactos = [...contactos];
    }
    aniadirContacto(contacto) {
        if (this.#contactos.length < 10) {
            this.existeContacto(contacto);
        } else {
            console.log(this.agendaLLena());
            alert(this.agendaLLena());
        }
    }
    existeContacto(contacto) {
        if (
            !this.#contactos.find(
                (contact) => contact.nombre === contacto.nombre
            )
        ) {
            this.#contactos.push(contacto);
            console.log("contacto creado");
        } else {
            console.log("el contacto ya existe");
            alert("el contacto ya existe");
        }
    }
    listarContacto() {
        this.#contactos.map((contato) => {
            console.log(`${contato.nombre} | ${contato.numero}`);
        });
        alert(
            `${this.#contactos.map((contato) => {
                return `${contato.numero} | ${contato.nombre}\n`;
            })}`
        );
    }
    buscarContacto(nombre) {
        const contacto = this.#contactos.find(
            (contacto) => nombre === contacto.nombre
        );
        if (contacto) {
            console.log(`${contacto.nombre} | ${contacto.numero}`);
            alert(`${contacto.nombre} | ${contacto.numero}`);
            return true;
        } else {
            console.log("No se encontro el contacto");
            alert("No se encontro el contacto");
            return false;
        }
    }
    eliminarContacto(contacto) {
        if (this.buscarContacto(contacto)) {
            const contactosRestantes = this.#contactos.filter(
                (contact) => contact.nombre !== contacto
            );
            this.contactos = contactosRestantes;
            alert("contacto eliminado");
            console.log("contacto eliminado");
        } else {
            console.log("No se elimino el contacto");
            alert("No se elimino el contacto");
        }
    }
    agendaLLena() {
        return "La agenda esta llena, no se pueden agendar mas contactos";
    }
    huecosLibres() {
        console.log(
            `Quedan ${10 - this.#contactos.length} espacios disponibles`
        );
    }
}

function actions() {
    const option = document.getElementById("option").value;

    switch (option) {
        case "Añadir":
            agenda.aniadirContacto(crearContacto());
            break;
        case "Listar":
            agenda.listarContacto();

            break;
        case "Eliminar":
            agenda.eliminarContacto(
                prompt("Ingrese el nombre del contacto que desea eliminar:")
            );
            break;
        case "Buscar":
            agenda.buscarContacto(
                prompt("Ingrese el nombre del contacto que desea buscar:")
            );
            break;
        default:
            agenda.huecosLibres();
            break;
    }
}
