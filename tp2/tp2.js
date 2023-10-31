//PROBAR EJERICICIOS EN EL INDEX.HTML

/*

1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

*/

function esMayor() {
    const edad = parseInt(prompt("ingrese su edad:"));
    if (edad > 18) {
        document.write("Ya puede conducir");
    } else {
        document.write("No es un numero valido");
    }
}

/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

*/

function postNotas() {
    let nota = parseInt(prompt("Ingrese una nota:"));
    while (nota > 10 || nota < 0) {
        alert("numero incorrecto");
        nota = parseInt(prompt("Ingrese un numero valido:"));
    }
    if (nota >= 0 && nota <= 2) {
        alert("Muy deficiente");
    }
    if (nota > 2 && nota <= 4) {
        alert("Insuficiente");
    }
    if (nota > 4 && nota <= 6) {
        alert("Suficiente");
    }
    if (nota > 6 && nota <= 8) {
        alert("Notable");
    }
    if (nota > 8 && nota <= 10) {
        alert("Sobresaliente");
    }
}

/*

3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

function ingresarTexto() {
    let texto = "";
    let input;
    let salida;
    confirm("ingrese texto");
    do {
        input = prompt("Texto:");
        texto += `${input} -`;
        salida = confirm("Desea seguir ingresando texto?");
    } while (salida);
    document.write(texto);
}
//cancelar === undefined
//cancelar===false
/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

function sumaTotal() {
    let total = 0;
    let numero;
    do {
        numero = prompt("ingrese un numero");
        if (isNaN(parseInt(numero))) {
            alert("Ingrese un numero valido");
        } else {
            total += parseInt(numero);
        }
    } while (numero !== null);
    document.write(`el total es ${total}`);
}

/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/
function ejercicio5() {
    const letras = "T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E".split(",");
    let dni = parseInt(prompt("ingrese dni:"));
    while (dni < 0 || dni > 99999999 || isNaN(dni)) {
        alert("Numero ingresado incorrecto");
        dni = parseInt(prompt("ingrese dni valido:"));
    } 
    let resto = dni % 23;
    document.write(letras[resto]);
}
/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….

*/

function piramide() {
    const altura = parseInt(prompt("ingrese altura de piramide:"));
    for (let i = 1; i <= altura; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
        console.log(linea);
    }
}
/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/
function piramideInversa() {
    const altura = parseInt(
        prompt("ingrese altura de piramide no mayor a 50:")
    );
    for (let i = altura; i >= 1; i--) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
        console.log(linea);
    }
}

/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

*/
function piramide3() {
    const altura = parseInt(
        prompt("ingrese altura de piramide no mayor a 50:")
    );
    for (let i = 1; i <= altura; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        console.log(linea);
    }
}

/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
*/

function writeNumbers() {
    let c = 0;
    for (let index = 1; index <= 500; index++) {
        let exit = `${index}`;
        if (index % 4 === 0) {
            exit += "(Multiplo de 4)";
        }
        if (index % 9 === 0) {
            exit += "(Multiplo de 9)";
        }
        c++;
        console.log(exit);
        if (c % 5 === 0) {
            console.log("-----------------------------");
        }
    }
}

/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
function mkTable() {
    const filas = parseInt(prompt("Ingresa el número de filas:"));
    const columnas = parseInt(prompt("Ingresa el número de columnas:"));
    let numero = filas * columnas;
    document.write(`<table style="border: 1px solid #000"><tbody>`);
    for (let index = 0; index < filas; index++) {
        document.write(`<tr>`);
        for (let j = 0; j < columnas; j++) {
            document.write(`<td>${numero}</td>`);
            numero--;
        }
        document.write(`</tr>`);
    }
    document.write(`</tbody></table>`);
}

/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
*/
function findMayor() {
    let nombres = [];
    let edades = [];
    for (let index = 0; index < 3; index++) {
        const nombre = prompt(`Ingresa un nombre:`);
        const edad = parseInt(prompt(`Ingresa una edad:`));
        nombres.push(nombre);
        edades.push(edad);
    }
    const name = edades.indexOf(Math.max(...edades));
    const mayor = nombres[name];
    console.log(`el mayor es ${mayor}`);
}
/*
12- Realiza un script que genere un número aleatorio entre 1 y 99
*/
function random() {
    const random = Math.floor(Math.random() * 99) + 1;
    console.log(random);
}

/*
13- Realiza un script que pida un texto y lo muestre en mayúsculas.
*/
function aMayus() {
    const texto = prompt("ingrese texto");
    console.log(texto.toUpperCase());
}

/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/
function transformarTexto() {
    const texto = prompt("ingrese texto");
    console.log(texto.split("").join("-"));
}
/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/
function contarVocales() {
    const texto = prompt("ingrese texto");
    let vocales = texto
        .toLowerCase()
        .split("")
        .filter(
            (letra) =>
                letra === "a" ||
                letra === "e" ||
                letra === "i" ||
                letra === "o" ||
                letra === "u"
        );
    document.write(`${texto} tiene ${vocales.length} vocales`);
}
/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
function textoInvertido() {
    const texto = prompt("ingrese texto");
    let invertido = "";
    for (let index = texto.length - 1; index >= 0; index--) {
        invertido += texto[index];
    }
    document.write(invertido);
}
/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

*/
function primeraVocal() {
    const ingreso = prompt("ingrese texto");
    const texto = ingreso.toLowerCase();
    for (let index = 0; index < texto.length; index++) {
        if (
            texto[index] === "a" ||
            texto[index] === "e" ||
            texto[index] === "i" ||
            texto[index] === "o" ||
            texto[index] === "u"
        ) {
            document.write(
                `la vocal ${texto[index]} esta en la posicion ${index}`
            );
            break;
        }
    }
}
