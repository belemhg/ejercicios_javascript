
let inicioDeciclo=1;
let finDeCiclo=100;

for (let i = inicioDeciclo; i <= finDeCiclo; i++) {
    if (i % 15 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
}




// metodo "for"  y divisibles 
//ARREGLO
/// reto: recorrer una funcion que tiene varias condiciones
//crear un metodo que imprima en consola los números del 1 al 100 
// condiciones...
/// tomando en cuenta lo siguiente: si el número es múltiplo de 3, imprimirá 'fizz'. 
/// si el número es múltiplo de 5, imprimirá 'Buzz'.
///si el número es múltiplo de 3 y 5, imprimirá 'fizzBuzz'.
///si el número no es múltiplo de 3 ni de 5, imprimirá'fizzbuzz();

// function creandoArray(inicio,final) {
 //   let resultado = new Array(final);
 // for (let i = 0; i < finally; i++, ++inicio){
     // resultado[i] = i+1;
// }
// return resultado;
// }
// let intervalo = crandoArray (0, 9);
// console.log(intervalo);
