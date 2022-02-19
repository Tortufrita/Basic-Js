const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// comprobar si un valor existe en un arreglo 

/* meses.forEach( mes => {
     if (mes === 'Enero') {
         console.log('Enero si existe')
     }
 }) */

 // esto solo funciona con arreglos tradicionales, no aplica para objetos 
 const resultado = meses.includes('Diciembre');
 console.log(resultado);

 // en un arreglo de objeos se utiliza .some

 const existe = carrito.some( producto => producto.nombre === 'Monitor Curvo');
 console.log(existe);

 // en un arreglo tradicional con .some
 const existe2 = meses.some( mes => mes === 'Febrero');
 console.log(existe2);