const usuario = false;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log('Si puedes comprar')
}
else if(!puedePagar && !usuario) {
    console.log('no, no puedes comprar')
}
else if(!usuario) {
    console.log("Inicia sesion o saca una cuenta")
}
else if(!puedePagar) {
    console.log('Fondos Insuficientes')
}