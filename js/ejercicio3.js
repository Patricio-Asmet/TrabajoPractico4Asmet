/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades,
     calcular el perímetro y el área
*/

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    modificarAlto(nuevoAlto) {
        if (nuevoAlto > 0) {
            this.alto = nuevoAlto;
            console.log("Alto modificado con éxito.");
        } else {
            console.log("Error: El alto debe ser mayor que 0.");
        }
    }

    modificarAncho(nuevoAncho) {
        if (nuevoAncho > 0) {
            this.ancho = nuevoAncho;
            console.log("Ancho modificado con éxito.");
        } else {
            console.log("Error: El ancho debe ser mayor que 0.");
        }
    }

    mostrarPropiedades() {
        console.log(`Rectángulo - Alto: ${this.alto}, Ancho: ${this.ancho}`);
    }

    calcularPerimetro() {
        return 2 * (this.alto + this.ancho);
    }

    calcularArea() {
        return this.alto * this.ancho;
    }
}

const miRectangulo = new Rectangulo(5, 8);

miRectangulo.mostrarPropiedades();

miRectangulo.modificarAlto(7);
miRectangulo.modificarAncho(10);

miRectangulo.mostrarPropiedades();

console.log("Perímetro:", miRectangulo.calcularPerimetro());
console.log("Área:", miRectangulo.calcularArea());