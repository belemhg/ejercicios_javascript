let arregloImpar=[1,2,3,4,5,6,7,8,9,10]; //arreglo de diez posiciones 

arregloImpar.forEach(function(numero){
if(numero % 2===0){
    console.log('el numero ' + numero + ' el numero es par ');    
} else {
    console.log(' el numero ' + numero + ' el numero es impar ')
}
})

// definir si el numero es par o impar.