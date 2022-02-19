const nav = document.querySelector('.navegacion');

// registrar un evento 

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
 
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'yellow';
})

// mousedown - similar al click

// click

// dblclick - doble click

// mouseup - cuando sueltas el mouse 

// mouseout - cuando quitas el click

// mouseenter - cuando pasar el mouse por el elemento 

