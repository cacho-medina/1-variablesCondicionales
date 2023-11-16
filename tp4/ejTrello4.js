/*
Gestión de proyectos en una empresa: Tienes dos arrays, uno para los nombres de proyectos y otro para los estados de los proyectos. Debes crear funciones que permitan agregar nuevos proyectos, cambiar el estado de un proyecto, asignar un responsable y generar un resumen de proyectos en curso.
*/
// Inicialización de los arreglos
const proyectos = [];
const estados = [];

// Función para agregar un nuevo proyecto
function agregarProyecto(nombre, estado = "En curso") {
    proyectos.push(nombre);
    estados.push(estado);
    console.log(`Proyecto "${nombre}" agregado con estado "${estado}".`);
}

// Función para cambiar el estado de un proyecto
function cambiarEstadoProyecto(nombre, nuevoEstado) {
    const index = proyectos.indexOf(nombre);

    if (index !== -1) {
        estados[index] = nuevoEstado;
        console.log(
            `Estado del proyecto "${nombre}" cambiado a "${nuevoEstado}".`
        );
    } else {
        console.log(`Proyecto "${nombre}" no encontrado.`);
    }
}

// Función para asignar un responsable a un proyecto
function asignarResponsable(nombre, responsable) {
    const index = proyectos.indexOf(nombre);

    if (index !== -1) {
        console.log(
            `Responsable "${responsable}" asignado al proyecto "${nombre}".`
        );
    } else {
        console.log(`Proyecto "${nombre}" no encontrado.`);
    }
}

// Función para generar un resumen de proyectos en curso
function generarResumen() {
    console.log("Resumen de proyectos en curso:");
    proyectos.forEach((nombre, index) => {
        if (estados[index] === "En curso") {
            console.log(`- ${nombre} (${estados[index]})`);
        }
    });
}

// Ejemplo de uso
agregarProyecto("Proyecto A");
agregarProyecto("Proyecto B", "Completado");
agregarProyecto("Proyecto C");

cambiarEstadoProyecto("Proyecto A", "En pausa");
asignarResponsable("Proyecto B", "Juan Pérez");

generarResumen();
