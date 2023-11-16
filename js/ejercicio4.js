/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos() {
        console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}

const producto1 = new Producto("001", "Producto A", 25.99);
const producto2 = new Producto("002", "Producto B", 19.99);
const producto3 = new Producto("003", "Producto C", 34.99);

const arrayProductos = [producto1, producto2, producto3];

for (const producto of arrayProductos) {
    producto.imprimeDatos();
}