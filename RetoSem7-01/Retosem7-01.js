// Crear una funcion que me cambie el valor del nombre 
// de cualquier disco en mi arreglo.
// cambiarNombre (posicionArreglo, nuevoNombreDisco);
// crear una funcion que me cambie el valor del nombre 
// de cualquier disco que yo quiera en mi arrreglo.

let tiendaDiscos = ['discoRock,discobalada,discoIndie'];
let posicionArreglo = parseInt(prompt ('cambiar el nombre el disco'));
let nuevoNombreDisco = prompt ('nuevo nombre de disco');

posicionArreglo = Number (posicionArreglo);


const cambiarNombre = (positionDisc, nuevoNombreDisco) => {
    tiendaDiscos.forEach(
        (disco, index) =>{ 
            if (positionDisc === index){
                disco.nameDisc = nuevoNombreDisco;
                console.log (disco);
            }
        }
    )
}

cambiarNombre(posicionArreglo, nuevoNombreDisco);
console.log(tiendaDiscos);


//////  OTRA MANERA DE HACERLO 

let tiendaDeDiscos = [discoRock, discobalada, discoIndie]
let reemplazar = (arreglo, posicion, nuevoNombreDisco) => {
    arreglo[posicion].nameDisc = nuevoNombreDisco;
}
reemplazar(tiendaDeDiscos, 1, 'test');
console.log (tiendaDeDiscos)
