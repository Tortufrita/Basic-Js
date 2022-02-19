// modo viejo 

const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('javaScript', 'Node.js');

// con arrow function 

const aprendiendo2 = (tecnologia, tecnologia2) => (`Aprendiendo ${tecnologia} y ${tecnologia2}`);

console.log(aprendiendo2('javaScript', 'Node.js'));