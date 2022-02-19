const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}



 // agregar nuevas propiedades al objeto

 producto.imagen = "imagen.jpg";

 // eliminar propiedades del objeto 

 delete producto.disponible;

 console.log(producto);