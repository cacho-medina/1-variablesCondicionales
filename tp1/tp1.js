/*

1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.


*/

const showAlert = () => alert("un mensaje");

/*


2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).


*/

const writeMessage = () => document.write("Hello world");

/*

3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

*/

const resultado = () => document.write(3 + 5);

/*

4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

*/

const showMessage = () => {
    const user = prompt("ingrese nombre de usuario");
    document.write(`Hola ${user}`);
};

/*

5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

*/

const suma = () => {
    const num1 = prompt("ingrese un numero");
    const num2 = prompt("ingrese otro numero");
    document.write(`la suma es ${parseInt(num1) + parseInt(num2)}`);
};

/*

6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

*/

const mayor = () => {
    const num1 = prompt("ingrese un numero");
    const num2 = prompt("ingrese otro numero");
    let aux;
    if (parseInt(num1) >= parseInt(num2)) {
        aux = num1;
    } else if (parseInt(num1) < parseInt(num2)) {
        aux = num2;
    }
    document.write(`el mayor es ${aux}`);
};

/*

7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

*/

const mayorDe3 = () => {
    const num1 = prompt("ingrese un numero");
    const num2 = prompt("ingrese 2do numero");
    const num3 = prompt("ingrese 3er numero");
    let aux;
    if (parseInt(num1) > parseInt(num2) && parseInt(num1) > parseInt(num3)) {
        aux = num1;
    } else if (
        parseInt(num2) > parseInt(num1) &&
        parseInt(num2) > parseInt(num3)
    ) {
        aux = num2;
    } else if (
        parseInt(num3) > parseInt(num1) &&
        parseInt(num3) > parseInt(num2)
    ) {
        aux = num3;
    }
    document.write(`el mayor es ${aux}`);
};

/*

8.- Escribe un programa que pida un número y diga si es divisible por 2


*/

const divisible = () => {
    const num1 = prompt("ingrese un numero");
    if (parseInt(num1) % 2 === 0) {
        document.write(`${num1} es divisible por 2`);
    } else {
        document.write(`${num1} no es divisible por 2`);
    }
};

/*

9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

*/

const vocales = () => {
    const frase = prompt("ingrese una frase");
    const vowels = ["a", "e", "i", "o", "u"];
    let aux = "";
    for (let index = 0; index < frase.length; index++) {
        for (let j = 0; j < vowels.length; j++) {
            if (frase[index] === vowels[j]) {
                aux += vowels[j];
            }
        }
    }
    document.write(aux);
};

/*

10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

*/

const divisiblePorVarios = () => {
    const num1 = parseInt(prompt("ingrese un numero"));
    let respuesta = `el ${num1} es divisible por `;
    let b = 0;
    if (num1 % 2 === 0) {
        respuesta = `el ${num1} es divisible por 2`;
        b = 1;
    }
    if (num1 % 3 === 0) {
        respuesta = `el ${num1} es divisible por 3`;
        b = 1;
    }
    if (num1 % 5 === 0) {
        respuesta = `el ${num1} es divisible por 5`;
        b = 1;
    }
    if (num1 % 7 === 0) {
        respuesta = `el ${num1} es divisible por 7`;
        b = 1;
    }
    if (b === 0) {
        respuesta = `el ${num1} no es divisible por ninguno`;
    }
    document.write(respuesta);
};

/*

11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

*/

const divisiblePorTodos = () => {
    const num1 = parseInt(prompt("ingrese un numero"));
    let respuesta = `el ${num1} es divisible por `;
    let b = 0;
    if (num1 % 2 === 0) {
        respuesta += "2";
        b = 1;
    }
    if (num1 % 3 === 0) {
        respuesta += " 3";
        b = 1;
    }
    if (num1 % 5 === 0) {
        respuesta += " 5";
        b = 1;
    }
    if (num1 % 7 === 0) {
        respuesta += " 7";
        b = 1;
    }
    if (b === 0) {
        respuesta = `el ${num1} no es divisible por ninguno`;
    }
    document.write(respuesta);
};
