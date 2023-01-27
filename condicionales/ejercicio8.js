/* Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true 
si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario.*/

const num1 = parseInt(prompt('ingrese un numero del 1 al 10'))
const num2 = parseInt(prompt('ingrese un numero del 1 al 10'))
const num3 = parseInt(prompt('ingrese un numero del 1 al 10'))

promedio = (num1 + num2 + num3)/3
console.log('su promedio fue de:',promedio);

// true o false

if (promedio > 5){
    console.log('true')
} else {
    console.log('false')
}

