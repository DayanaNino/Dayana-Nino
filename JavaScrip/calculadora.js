let menu = parseInt(prompt('ingrese los siguientes numeros: (1) sumar, (2) restar, (3) dividir, (4) multiplicar, (5) potencia, (6) raiz cuadrada, (0) sallir '))

function sumar (suma1,suma2){
    return suma1 + suma2

}

function restar (restar1,restar2){
    return restar1 - restar2

}

function dividir (dividir1,dividir2){
    return dividir1 / dividir2

}

function multiplicar  (mult1,mult2){
    return mult1 * mult2

}



while (menu != 0){

    switch(menu){

        case 1:
    
        let suma1 = parseInt(prompt('ingrese el primer numero'))
        let suma2 = parseInt(prompt('ingrese el segundo numero'))
    
        x = sumar(suma1,suma2)
        console.log(x)
        break;
    
        case 2:
            
        let restar1 = parseInt(prompt('ingrese el primer numero'))
        let restar2 = parseInt(prompt('ingrese el segundo numero'))
    
        y = restar (restar1,restar2)
        console.log(y)
        break;
    
        case 3:
    
        let dividir1 = parseInt(prompt('ingrese el primer numero'))
        let dividir2 = parseInt(prompt('ingrese el segundo numero'))
     
        if (dividir2 == 0){
            alert('el numero no es valido')
        }
        break;
    
        case 4:
    
        let mult1 = parseInt(prompt('ingrese el primer numero'))
        let mult2 = parseInt(prompt('ingrese el segundo numero'))
    
        b = multiplicar  (mult1,mult2)
        console.log(b)
    
        break;
    
        case 5:
        
        let pot1 = parseInt(prompt('ingrese el primer numero'))
        let pot2 = parseInt(prompt('ingrese el segundo numero'))

        c = Math.pow(pot1,pot2);
        console.log(c)
        break;

        case 6:

        let raiz = parseInt(prompt('ingrese el primer numero'))

        d = Math.sqrt(raiz)
        console.log(d)
        
        break;
}

}











