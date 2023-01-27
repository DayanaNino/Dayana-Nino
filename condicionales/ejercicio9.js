/*Desarrolle un algoritma que reciba un numero entero e imprima si el numero es par o impar. 
Ademas el numero debe ser positivo.*/

const numeroEntero = parseInt(prompt('ingrese un numero entero - positivo'))

// positivo

if (numeroEntero < 0){
    alert('el numero ingresado no es valido')
}

// par o impar 

par = (numeroEntero % 2)

if (par == 0){
    console.log("el numero ingresado es par")
} else {
    console.log("el numero ingresado es impar")
}






