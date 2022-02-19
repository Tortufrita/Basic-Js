const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Televisor', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 25},
    {nombre: 'Teclado', precio: 80},
    {nombre: 'Celular', precio: 700},
]





const nuevoArreglo = carrito.map(function(producto) {
   return `${producto.nombre} - Precio: ${producto.precio}`;
} )


const nuevoArreglo2 = carrito.forEach(function(producto) {
   return `${producto.nombre} - Precio: ${producto.precio}`;
} )

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
