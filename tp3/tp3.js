/*
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];

const ej1 = () => {
    document.write("<ul>");
    meses.map((mes) => {
        return document.write(`<li>${mes}</li>`);
    });
    document.write("</ul>");
};

/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

const ej2 = () => {
    const ciudades = [];
    let ciudad = prompt("ingrese el nombre de una ciudad:");
    while (ciudad !== null) {
        ciudades.push(ciudad);
        ciudad = prompt("ingrese el nombre de una ciudad:");
    }
    document.write("<p><ul>");
    document.write(`<li>[${ciudades}]</li>`);
    document.write(`<li>el arreglo tiene ${ciudades.length} elementos</li>`);
    document.write(`<li>elemento 1era posicion: ${ciudades[0]}</li>`);
    document.write(`<li>elemento 3era posicion: ${ciudades[2]}</li>`);
    document.write(
        `<li>elemento ultima posicion: ${ciudades[ciudades.length - 1]}</li>`
    );
    ciudades.push("Paris");
    document.write(`<li>elemento 2da posicion: ${ciudades[1]}</li>`);
    ciudades[1] = "Barcelona";
    document.write("</ul></p>");
};

/*

3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/
const numRandom = () => Math.floor(Math.random() * 6) + 1;

const ej3 = () => {
    let suma = 0;
    let aux = [];

    for (let index = 0; index < 50; index++) {
        suma = numRandom() + numRandom();
        aux.push(suma);
    }

    const numSumados = new Set(aux);
    const sumados = [...numSumados];

    document.write("<table>");

    for (let index = 0; index < sumados.length; index++) {
        document.write("<tr>");
        document.write(`<td>${sumados[index]}</td>`);
        const finded = aux.filter((num) => sumados[index] === num);
        document.write(`<td>${finded.length}</td>`);
        document.write("</tr>");
    }

    document.write("</table>");
};

/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

function input(entero) {
    const res = entero % 2 === 0 ? "es par" : "es impar";
    return res;
}
const ej4 = () => {
    document.write(input(5));
};

/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
function showInfo(texto) {
    if (texto === texto.toLowerCase()) {
        return "cadena de solo minusculas";
    }
    if (texto === texto.toUpperCase()) {
        return "cadena de solo mayusculas";
    }
    return "cadena de mayusculas y minusculas";
}
const ej5 = () => {
    const input = prompt("ingrese un texto");
    document.write(showInfo(input));
};

/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/
function perimetro(a, b) {
    return 2 * (a + b);
}
const ej6 = () => {
    const lado1 = parseInt(prompt("ingrese base del rectangulo"));
    const lado2 = parseInt(prompt("ingrese altura del rectangulo"));
    document.write(perimetro(lado1, lado2));
};

/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/
function tablaX(numero) {
    document.write(`Tabla del ${numero}`);
    document.write(`<ul>`);
    for (let index = 1; index <= 10; index++) {
        document.write(`<li>${numero * index}</li>`);
    }
    document.write("</ul>");
}
const ej7 = () => {
    const num = parseInt(prompt("ingrese numero:"));
    tablaX(num);
};
