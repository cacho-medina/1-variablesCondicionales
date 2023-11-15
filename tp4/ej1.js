/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/

const auto = {
    color: "rojo",
    marca: "toyota",
    modelo: "etios",
    encender: function () {
        return "auto encendido";
    },
    apagar: function () {
        return "auto apagado";
    },
};
console.log(auto.color, auto.marca, auto.modelo);
console.log(auto.encender());
console.log(auto.apagar());
