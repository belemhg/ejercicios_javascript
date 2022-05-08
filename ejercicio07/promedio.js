let calificaciones = [50,80,90,60,70];
let promedio = 0;
let resultado = 0;

calificaciones.forEach(
    function(value){
promedio = promedio + value;
    }
)

resultado = promedio / calificaciones.length;

if (resultado >=70){
    console.log("aprobado->" + resultado)
}  else {
    console.log("reprobado->" + resultado)
}