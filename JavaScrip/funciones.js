function suma (primer,segund,tercer){
    return primer + segund + tercer 
}
function restar (primero,segundo){
    return primero - segundo 
    }

let codigo = parseInt(prompt('ingrese: (1) para sumar 3 numeros y (2) para restar dos numeros'))

switch (codigo){
    
    case 1:

    var primer = parseFloat(prompt('ingrese el primer numero'))
    var segund = parseFloat(prompt('ingrese el segundo numero'))
    var tercer = parseFloat(prompt('ingrese el tercer numero'))

    x = suma(primer,segund,tercer);
    console.log(x); 

    case 2:
        
            

            var primero = parseFloat(prompt('ingrese el primer numero'))
            var segundo = parseFloat(prompt('ingrese el segundo numero'))
    
            y = restar(primero,segundo)
            console.log (y)

}
    

   


    
    

 
    
                                                                                              
