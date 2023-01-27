// Pedir dos números y decir si son múltiplos o no.

const num1 = parseInt(prompt('ingrese un numero'))
const num2 = parseInt(prompt('ingrese un numero'))

// dos numeros iguales
if ( num1 == num2){
    alert("los numeros no son validos")
}

// multiplos o no 

if (num1>num2){
    producto = (num1 % num2)
} else {
    producto = (num2 % num1)
} if (producto == 0){
    console.log("los numeros son multiplos")
} else {
    console.log("los numeros no son multiplos")
}

