let calificaciones = [50,60,70,80,90];   // para saber otro rango de calificacion cambiar los numeros

// todo lo de abajo es una funcion para lograr el resultado 

const result = function(calificaciones){
    let promedio =0;
    let resultado =0;
  calificaciones.forEach(
    function(value){
promedio = promedio + value;
}
)  
resultado = promedio / calificaciones.length;
if (resultado>=70 ){
    console.log("aprobado->" + resultado);
}  else {
    console.log("reprobado->" + resultado);
}
}
result(calificaciones);