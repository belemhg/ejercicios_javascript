console.log('Ejemplo Filter');
let arreglo=[50,80,72,60,96];
console.log(arreglo)

// operador OR ||

let arregloDos = arreglo.filter(
    function(value,index,){
        // And && Or
      return (value > 50 || index === 2);
    }
)




console.log("------->");
console.log("ArregloDos");


