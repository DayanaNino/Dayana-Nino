"""Diseñe un algoritmo que reciba un numero entero positivo mayor a 100 y luego imprima todos los numeros 
primos que hay antes de ese numero ingresado."""

#numero

num = int(input('ingrese un numero mayor a 100: '))

#numeros primos

if num > 100:
    
    for i in range(0,num):
        
        
        aumento = 2
        
        primo = True
    
        while primo and aumento < i:
            
                if i % aumento == 0:
                   
                   primo = False
                else: 
        
                    aumento += 1
                    
        if primo:
            print(i,"es primo")


else:
    print('el numero ingresado no es valido')
    

    
    








