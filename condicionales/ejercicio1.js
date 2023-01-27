/* 1.Desarrolle un algoritmo que permita leer 3 números enteros.
El algoritmo debe imprimir cual es el numero
mayor y cual es el numero menor entre los 3
Ademas ninguno de los 3 numeros ingresados pueden ser iguales. 
En caso de que el usuario ingrese 2 numeros 
iguales debe mostrar una alerta. */

const pNumero = parseInt(prompt('ingrese un numero'));
const sNumero = parseInt(prompt('ingrese un numero'));
const tNumero = parseInt(prompt('ingrese un numero'));


// numeros iguales

if (pNumero == sNumero || pNumero == tNumero) {
    alert("los numeros ingresados no son validos");
    }      if (sNumero == tNumero){
        alert("los numeros ingresados no son validos")

}

// numeros mayores

if (pNumero > sNumero && pNumero > tNumero){
    console.log("el numero mayor es", pNumero);

}   if ( sNumero > pNumero && sNumero > tNumero){
   console.log("el numero mayor es", sNumero);
        
}  if ( tNumero > pNumero && tNumero > sNumero){
    console.log("el numero mayor es", tNumero);

}

// numeros menores 

if (pNumero < sNumero && pNumero < tNumero){
    console.log("el numero menor es", pNumero);

}   if ( sNumero < pNumero && sNumero < tNumero){
   console.log("el numero menor es", sNumero);
        
}  if ( tNumero < pNumero && tNumero < sNumero){
    console.log("el numero menor es", tNumero);

}
   







