let numero;
let suma = 0


do{
    numero = parseInt(prompt('ingrese un numero mayor a cero'))

    if (numero < 0 ){
        alert('numero invalido')
    } else{

        suma = suma + numero
    }

}

while ( numero != 0);
 console.log("la sumatoria es", suma)


