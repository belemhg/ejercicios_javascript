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


