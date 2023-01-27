"""Diseñe un algoritmo en el cual el usuario deba ingresar 2 numeros enteros n y m. Estos numeros 
 serviran para definir un intervalo. La funcion del algoritmo sera sumar todos los numeros pares que se 
 encuentren dentro del intervalo [n.m]."""


#ingreso de numeros

n = int(input("ingrese un numero para iniciar:"))
m = int(input("ingrese un numero para finalizar:"))


#suma de pares dentro del intervalo

print('Los numeros pares dentro del intervalo son:')


suma = 0

while n <= m:
    
    if n % 2 == 0:
        
        print(n)
        suma = suma+n
    n +=1

print('La suma de todos los numeros pares es:', suma)   

    
    
    




