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

// el unshift empuja a todos y se pone de primero
carrito.unshift(producto3);

console.table(carrito);