const carrito = [];

// definir un producto 
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio:800
}

// .push agrega al final de un arreglo 

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

const producto4 = {
    nombre: 'Mouse',
    precio: 40
}
carrito.push(producto4);


// el unshift empuja a todos y se pone de primero
carrito.unshift(producto3);

// el splice toma uno del medio o la posicion que elijas

carrito.splice(2, 1);
console.table(carrito);

 // eliminar ultimo elemento de un arreglo

/* carrito.pop();

console.table(carrito);

// eliminar del inicio del arreglo 

carrito.shift();

console.table(carrito);
 */