const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }    

}

//const { nombre, informacion, informacion: {fabricacion, fabricacion: {pais} } } = producto; 
const { nombre, informacion, informacion: {medidas, medidas: {peso} } } = producto; 

console.log(nombre);
console.log(informacion);
console.log(medidas);
console.log(peso);