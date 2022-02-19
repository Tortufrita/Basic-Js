const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

//   console.log(navegacion.children[1].nodeName);
//   console.log(navegacion.children)

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = "Nuevo heading";

// TRAVERSING DE HIJO AL PADRE 

console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);

console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);


