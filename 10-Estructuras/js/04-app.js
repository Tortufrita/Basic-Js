// operador mayor que, menor que o igual

const dinero = 100;
const totalAPagar = 100;
const tarjeta = false;
const cheque = false;


if( dinero >= totalAPagar) {
    console.log('Si puedes pagar');
}

else if(cheque) {
    console.log('Si tiene un cheque');
}

else if(tarjeta) {
    console.log('si puedo pagar porque tiene la tarjeta');
}

else {
    console.log('Fondos Insuficientes')
}