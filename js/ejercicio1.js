/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado.
    Crea los métodos necesarios para permitir encender y apagar el auto.
*/

class Auto {
    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }

    encender() {
        if (!this.encendido) {
            console.log("El auto está encendido.");
            this.encendido = true;
        } else {
            console.log("El auto ya está encendido.");
        }
    }

    apagar() {
        if (this.encendido) {
            console.log("El auto está apagado.");
            this.encendido = false;
        } else {
            console.log("El auto ya está apagado.");
        }
    }
}

const miAuto = new Auto("Gris", "Chevrolet", "Classic");

miAuto.encender();
console.log("¿Está encendido?", miAuto.encendido);

miAuto.apagar();
console.log("¿Está encendido?", miAuto.encendido);
