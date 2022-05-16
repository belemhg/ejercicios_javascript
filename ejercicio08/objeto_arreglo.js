// arreglo se indentifica cuando iniciA CON CORCHETES
// variables  que tienen dividas ciertos 
// sectores de memoria ( de tipo numerico y el ultimo de tipo cadena, script y caracteres especiales)

console.log('Diferencias de arreglos y objetos');
let arreglo =[1, 2, 4, '5*****'];   

// Un objeto se identifica cuando se utilizan llaves y  tiene atributos. (usar let o constat)

let discoQueen = {
  nameDisc: 'Queen',
  date: new Date ('1985-02-20'),
  price: 99.9,
  tracks:['pista_1_Queen', 'pista_2_Queen', 'pista_3_Queen' ] 
}          

let discoCerati = {
    nameDisc: 'Cerati',
    date: new Date ('1995-02-20'),
    price: 99.9, 
    tracks:['pista_1_Cerati', 'pista_2_Cerati', 'pista_3_Cerati' ] 
}

let discoSalsa = {
    nameDisc: 'Salsa',
    date: new Date ('2000-20-20'),
    price: 99.9, 
    tracks:['pista_1_Salsa', 'pista_2_Salsa', 'pista_3_Salsa' ] 
}

let tiendaDiscos = [
    discoQueen,
    discoCerati,
    discoSalsa]

                                          // para saber el numero de discos de la tienda.
 // EMC6 funciones flechas () => {}

// Un arreglo de objetos
// el nombre del disco es
// el precio del disco es
// la fecha del disco es 
                            
    console.log(`El numero de discos es ${tiendaDiscos.length}`);
    tiendaDiscos.forEach(
        function(disco){
            console.log (`El disco es ${disco.nameDisc} 
            su precio es ${disco.price} 
            y fue lanzado el dia ${disco.date}`);
        }
    )
// Imprimir las pistas de mi disco.
// objeto con atributos de tipo cadena, de tipo date, numerico y de arreglos los arreglos van en corchetes

console.log(`El numero de discos es ${tiendaDiscos.length}`);
    tiendaDiscos.forEach(
        (disco, index) => {
let { nameDisc, date, price, tracks} = disco
 console.log (`El disco numero ${index + 1} es ${disco.nameDisc}`)
        disco.tracks.forEach (
         (pista) => console.log (pista)
        )
        }
    )

// desestructuracion del objeto / crear nuevos atributos o variables de una variable o del objeto.  

console.log(`El numero de discos es ${tiendaDiscos.length}`);
    tiendaDiscos.forEach(
        (disco, index) => {
let { nameDisc, date, price, tracks} = disco;
// nuevos atributos (variables) de la variable llamada disco.

        console.log (`El disco numero ${index + 1} es ${nameDisc}`)
        tracks.forEach (
         (pista) => console.log (pista)
        )
        }
    )
    

