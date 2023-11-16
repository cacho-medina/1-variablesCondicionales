/*
Registro de notas de estudiantes: Tienes dos arrays, uno con nombres de estudiantes y otro con sus respectivas notas en un curso. Debes crear funciones que calculen el promedio de notas por estudiante y muestren un resumen con los nombres de los estudiantes que aprobaron y reprobaron el curso.
*/
let nombres = ["Joaquin", "Mariano", "Matias"];
let notas = [
    [10, 5],
    [4, 7],
    [8, 5],
];

function calcularPromedio(notas) {
    let aux = 0;
    for (let index = 0; index < notas.length; index++) {
        aux += notas[index];
    }
    return aux / notas.length;
}
function validarAprobada(nombreEstudiante, promedio) {
    if (promedio >= 6) {
        console.log(
            `${nombreEstudiante} aprobo con un promedio de ${promedio}`
        );
    } else {
        console.log(
            `${nombreEstudiante} no aprobo con su promedio de ${promedio}`
        );
    }
}

nombres.map((nombre, index) => {
    validarAprobada(nombre, calcularPromedio(notas[index]));
});
