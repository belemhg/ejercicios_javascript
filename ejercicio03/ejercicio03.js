console.log('Hola desde el ejemplo 03');
// Ejemplo de switch

let diaSemana = 7      // cambiar valores para poder hacer ejercicios
switch (diaSemana) {
    case 1:
        console.log('///////');
        console.log('lunes');
        break;
    case 2:
        console.log('******');
        console.log('Martes');
        break;
    case 3:
        console.log('******');
        console.log('miercoles');
        break;
    case 4:
        console.log('///////');
        console.log('Jueves');
        break;
    case 5:
        console.log('///////');
        console.log('viernes');
        break;

    case 6:// sabado
    case 7://domingo

 if(diaSemana === 6){
     console.log ("Es sabado");
 }   else {
     console.log('Es domingo');
 }



        console.log('Es sabado o domingo dia de descanso');
        break;
    default:
        console.log('Dia de la semana invalido');
        break;

}