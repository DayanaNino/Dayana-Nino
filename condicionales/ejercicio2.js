/* Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. Los 2 valores ingresados 
no pueden ser iguales, ademas el algoritmo
 debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, si no lo son 
 el algoritmo debe imprimir el valor de la
 base multiplicado por 2 y sumarle 10. */

 const base = parseInt(prompt('ingrese el valor de la base en cm'))
 const altura = parseInt(prompt('ingrese el valor de la altura en cm'))

 // valores iguales

 if (base == altura){
    alert("los valores no son validos")

// calculo de la base

 } if ( base > 5 && altura > 4){

    area = ((base * altura) / 2)
    console.log("el area del triangulo es", area)
 } else {

    console.log ((base * 2) + 10)

 }

