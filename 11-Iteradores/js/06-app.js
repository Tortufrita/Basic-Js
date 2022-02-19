// foreach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`)
})

const carrito = [
    {nombre: 'Monitor de 27 pulgadas', precio: 500},
    {nombre: 'Televisor', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true },
    {nombre: 'Audifonos', precio: 25},
    {nombre: 'Teclado', precio: 80},
    {nombre: 'Celular', precio: 700},
]

 const nuevoArreglo = carrito.forEach( producto => producto.nombre);

 const nuevoArreglo2 = carrito.map( producto => producto.nombre);

 console.log(nuevoArreglo);
 console.log(nuevoArreglo2);