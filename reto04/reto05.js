let ordenar=[1, 2, 45, 5, 6, 3, 1, 8];
let ordenarTwo=[100, 5, 5, 8, 3, 7, 8];

const result=ordenar.sort(function (firt,second){
if (firt > second){
     return 1
 }else {
     return -1
 }

} )

console.log(result)

/////////////////////////

const resultadoTwo=ordenarTwo.sort((a,b) => a-b)
console.log(resultadoTwo)

/// funcion de ordenar de mayor a menor(un valor) de una lista  y nos va regresar los parametros. 
// comparacion de un valor con optro valor, si el valor es mayor que el segundo.
// ordenar en arreglos. 
// Nota: metodo de ordenamiento de la burbuja.

