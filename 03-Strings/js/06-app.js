const producto = 'Monitor de 20 Pulgadas ';

// .repeat te va a permitir repetir una cadena de texto 

const texto = ' en Promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// split, dividir un string

const actividad = "Estoy aprendiendo JS Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, jugar, aprender a programar';
console.log(actividad.split(", "));

const tweet = "Aprendiendo JS #JSModerno";
console.log(tweet.split('#'));
