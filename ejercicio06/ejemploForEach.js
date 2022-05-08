console.log('Ejemplo forEach');
let arreglo=[50,80,72,60,96];
let arregloDos=['hola','Juan', 60, true];
let arregloTres=['a', 'b', 'c'];

// forEach es un metodo que recorre mi arreglo como si fuera un for

// fijarse a que arreglo se esta convocando / arregloDos, arreglotres etc

// arregloDOS.ForEach(
// function(valor,index){
//  if(index == 2) {
//    console.log('El valor del elemento es' + valor);
//   }
//   }
//   );


arregloDos.forEach(
    function(elemento){
     console.log('El valor del elemento es  ' + elemento);
    }


);




