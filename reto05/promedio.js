    
    const calculatePromedio = Function (arrayCalificaciones) {
        Let promedio = 0;

    arrayCalificaciones.forEach (
        function (valor) {
        promedio = promedio + valor;
          
    }
    )

    promedio = promedio / (arrayCalificaciones.length);
    (promedio > 70)? console.log('Aprobado el promedio es: ' + promedio) : console.log ('Reprobado el promedio es: ') );