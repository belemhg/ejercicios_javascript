console.log('Ejemplos de ciclo For');

// declaro una variable llamada ciclos, de la cual va iniciar con el valor de inicio 1
// cuando los ciclos sean mayor < o igual =  se va ir incrementando hasta el  fin 

let inicio = 1;  // recorrido del 1 al 10
let fin = 10;
let stop =5;

// para detener el recorrido se agrega una variable llamada Stop, 
// para que no termine en 10
// el ciclo for ya no va avanzar despues del numero 5

for ( let ciclos  = inicio; ciclos <= fin; ciclos++) {
      console.log('numero es igual a '  + ciclos);
    if ( ciclos === stop) { break; }
}

let cicloDos = 0;
while (cicloDos <= 10){
    console.log ('El ciclo es ' + cicloDos);
   // cicloDos++;
    cicloDos = cicloDos + 1;
}

///////////////////// funciones

const multiplicacion = function (tabla, Number) {
    return tabla * Number;
}

console.log('invocacion de funciones ' ) ;
console.log( multiplicacion(45, 9) );

//let tabla = 5;
//for (let ciclos = inicio; ciclos <= fin; ciclos++){
 //console.log(multiplicacion(tabla,ciclos));}

 

let inicioTabla =20;
let finalTabla = 30;

let tabla = 5;
for (let ciclos = inicioTabla; ciclos <= finalTabla; ciclos++){
    console.log(tabla+"*"+ciclos+"*"+multiplicacion(tabla,ciclos));
}


//Ejemplo
// calculo del area de un cuadrado e imprimirla en una sola linea, sin usar ciclos
// funcion que imprima el lado de un cuadrado
// variable constante (const)

let lado = 5;
const areaCuadrado = function (lado) {
    return lado * lado;
    
}
console.log ('el area del cuadrado es ' + areaCuadrado (lado));

