/* 
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

class Cuenta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Se ingresaron ${cantidad} unidades. Saldo actual: ${this.saldo}`);
        } else {
            console.log("Error: La cantidad a ingresar debe ser mayor que 0.");
        }
    }

    extraer(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se extrajeron ${cantidad} unidades. Saldo actual: ${this.saldo}`);
        } else {
            console.log("Error: La cantidad a extraer debe ser mayor que 0 y no puede superar el saldo actual.");
        }
    }

    informar() {
        console.log(`Titular: ${this.titular}, Saldo actual: ${this.saldo}`);
    }
}

const cuentaAlex = new Cuenta("Alex");

cuentaAlex.informar();

cuentaAlex.ingresar(100);

cuentaAlex.extraer(30);

cuentaAlex.informar();