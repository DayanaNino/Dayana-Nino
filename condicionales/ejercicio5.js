/*Desarrolle un algoritmo que permita convertir calificaciones numericas, segun la siguiente tabla:
	A = 19 y 20.
	B = 16, 17 y 18.
	C = 13, 14 y 15. 
	D = 10, 11 y 12.
	E = 1 hasta 9.

Las notas solo pueden ser numeros entre 1 y 20.*/

const calificacion = parseInt(prompt('ingrese su nota'))

// notas invalidas 

if (calificacion < 1 || calificacion > 20){

    alert ("la nota no es valida")
}

// conversion

if (calificacion >=1 && calificacion <=9){

    console.log("su nota es E")
} if (calificacion >=10 && calificacion <=12){

    console.log("su nota es D")
} if (calificacion >=13 && calificacion <=15){

    console.log("su nota es C")
} if (calificacion >=16 && calificacion <=18){

    console.log("su nota es B")
} if (calificacion >=19 && calificacion <=20){

    console.log("su nota es A")
}