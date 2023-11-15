/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    mostrarPropiedades() {
        return `ancho: ${this.ancho}, alto: ${this.alto}`;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}
const rec = new Rectangulo(10, 20);
console.log(rec.mostrarPropiedades());
console.log(rec.calcularArea());
console.log(rec.calcularPerimetro());
