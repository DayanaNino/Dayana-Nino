let edad, peso;

let sumaNinos = 0 ;
let sumaJovenes = 0 ;
let sumaAdultos = 0 ;
let sumaViejos = 0 ;

let cantNinos = 0 ;
let cantJovenes = 0 ;
let cantAdultos = 0 ;
let cantViejos = 0 ;
 
for (var i = 0; i < 20; i++){

    edad = parseInt(prompt('ingrese edad'))

    if(!Number.isInteger(edad) || edad < 0){

        alert ('edad no valida')

    }else{
        peso = parseFloat(prompt('ingrese su peso'));
        if (peso < 0){
            alert('peso no valido')
        }else{
            if (edad >= 0 && edad <= 12){
                sumaNinos += peso;
                cantNinos ++ ;
            }else{
                if (edad >= 13 && edad <= 29){
                    sumaJovenes += peso;
                    cantJovenes ++;

                } else{
                    if (edad >= 30 && edad <=59){
                        sumaAdultos += peso;
                        cantAdultos ++;

                    }else{
                        if (edad >= 60 ){
                            sumaViejos += peso;
                            cantViejos ++;
                        }else{
                            
                        }
                    }
                }
                
                



            } 

            }

        }
    }
        

    
        
}





