"""Diseñe un algoritmo en el cual solicite al usuario un numero entero positivo mayor a 10 y menor a 15 
despues debe calcular el factorial de este numero e imprimirlo en pantalla."""



#ingreso de numero

num = int(input("ingrese un numero entero (10 - 15):"))
print("el numero ingresado fue: ", num)

factor = 1

condicion1 = num

#factorial
if num >=10 and num <= 15:
    
    for i in range (1 , num + 1):
        factor *= i
    print("el factorial es:", factor)
else:
    print('el numero no esta dentro del rango')




