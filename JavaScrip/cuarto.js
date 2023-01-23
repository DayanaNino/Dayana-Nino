let entero = parseInt(prompt('ingrese un numero entero'))

if ( entero <= 0 ) {
    alert('el valor no es valido')
}else {

    for ( let i = 0 ; i < entero; i ++){
        
        if ((i + 1) % 2 == 0  ){

            console.log ("el numeo es impar", i)
        }
    } 

}
