// 1- Funcion que devuelve un array con todos los números del 1 al 255 

function array(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
 }
 return arr;
}
  var result = array(); 
console.log(result);


// 2- Funcion que entregue la suma de todos los números pares del 1 al 1000

function suma(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
     if (i % 2 == 0){
      sum = sum + i;
      } 
    }
    return sum;
}
console.log(suma());


// 3- Función que devuelva la suma de todos los números impares entre 1 y 5000

function sumaImp(){
    var sum = 0;
       for (var i = 1; i <= 5000; i+=2){
        if (i % 2 == 1){
        sum = sum + i;
        console.log(i);
        }
    }
      return sum;
}
console.log(sumaImp());


// 4- Funcion que devuelva la suma de todos los valores dentro de un array

function sumaValores(num){
    var sum = 0;
    for (var i = 0; i < num.length; i++){
        sum = sum + num[i];
    }
    return sum;
}
 console.log(sumaValores([1,3,5,9,8]));


//  5- Funcion que devuelva el número mayor
function mayor(numArr){
    var max = numArr[0]; 
    for (var i = 0; i < numArr.length; i++){ 
        if (numArr[i] > max){
        max = numArr[i];
        }
    }
return max;
}
 console.log(mayor([1, 3,-5, 40]));

//  6- Funcion que devuelva el promedio de los valores

function promedio(numArr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    avg = sum / numArr.length;
    return avg;
}
 console.log(promedio([5,7,5,12,20]));

// 7- Funcion que devuelva un array de todos los números impares entre 1 y 50

function impares(){
    var arr = [];
    for (var x = 1; x < 50; x+=2){
        arr.push(x);
    }
    return arr;
}
 console.log(impares());


// 8- Funcion que toma un array y devuelve los valores mayores que Y
function mayorY(arr, y){
    var counter = 0;
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] > y){
            counter++;
        }
    }
    return counter;
}
 console.log(mayorY([4,8,12], 3));


// 9- Funcion que reemplace cada valor por el cuadrado del mismo valor


// 10- Funcion que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos 

function positivos(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = 0;
        }
    }
    console.log(arr);
}
 console.log(positivos([-6,3,-5,4]));


// 11- Funcion que devuelva un nuevo array que solo contenga
// el valor mayor (max), menor (min) y promedio (avg) del array original

function mma(arr){
 var sum = 0;
 var max = arr[0];
 var min = arr[0];
 for (var idx = 0; idx < arr.length; idx++){
        sum = sum + arr[idx];
        if (arr[idx] > max){
          max = arr[idx];
        }
        else if (arr[idx] < min){
          min = arr[idx];
        }
    }
var newArr = [];
newArr.push(max);
newArr.push(min);
var avg = sum/arr.length
newArr.push(avg);

    return newArr;
}
 console.log(mma([5,20,50,-3]));



// 12- Funcion que intercambie el primer y el último valor de cualquier array. 

function int(arr){
    var temp = arr[arr.length-3];
    arr[arr.length-3] = arr[0];
    arr[0] = temp;
}
var prueba = [1,4,10,-3];
int(prueba);
console.log(prueba);




// 13- Funcion que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’.

function dojo(arr){
    for (var idx = 0; idx < arr.length; idx++){
     if (arr[idx] < 0){
        arr[idx] = "Dojo";
    }
 }
   console.log(arr);
}
    console.log(dojo([-8,2,-9,7,-6]));