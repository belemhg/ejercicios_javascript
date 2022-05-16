// arreglo se indentifica cuando iniciA CON CORCHETES
// variables  que tienen dividas ciertos 
// sectores de memoria ( de tipo numerico y el ultimo de tipo cadena, script y caracteres especiales)

console.log('Diferencias de arreglos y objetos');
let arreglo =[1, 2, 4, '5*****'];   

// Un objeto se identifica cuando se utilizan llaves y  tiene atributos. (usar let o constat)

let discoQueen = {
  nameDisc: 'Queen',
  date: new Date ('1985-02-20'),
  price: 99.9
}          

let discoCerati = {
    nameDisc: 'Cerati',
    date: new Date ('1995-02-20'),
    price: 99.9 
}

let discoSalsa = {
    nameDisc: 'Salsa',
    date: new Date ('2000-20-20'),
    price: 99.9 
}

let tiendaDiscos = [
    discoQueen,
    discoCerati,
    discoSalsa]
                                          // para saber el numero de discos de la tienda.
    console.log(`El numero de discos es ${tiendaDiscos.length}`);
    tiendaDiscos.forEach(
        function(disco){
            console.log (`El disco es ${disco.nameDisc} su precio es ${disco.price} y fue lanzado el dia ${disco.date}`);
        }
    )

    // EMC6 funciones flechas () => {}

// Un arreglo de objetos
// el nombre del disco es
// el precio del disco es
// la fecha del disco es 