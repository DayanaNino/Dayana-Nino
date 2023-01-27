let palabra = prompt('ingrese una palabra')
let letra1 = prompt('ingrese letra que contenga la palabra')
let letra2 = prompt('ingrese letra para remplazarla')



function remplazo ( palabra, letra1 , letra2){
    if (palabra.includes(letra1)){
       return palabra.replace(letra1,letra2);
        
    }
}

