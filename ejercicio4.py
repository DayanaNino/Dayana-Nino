""" Diseñe un menu de opciones para simular una calculadora con las siguientes operaciones:

#	1. Sumar 2 numeros
#	2. Restar 3 numeros
#	3. Multiplicar 2 numeros
#	4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 ) 
#	0. Salir de la calculadora
# Cuando el usuario desee salir de la calculadora debe mostrar un mensaje de despedida en la consola."""



menu = int(input("""Ingrese un numero:
                 
        1. Sumar 
        2. Restar 
        3. Multiplicar 
        4. Dividir   
        0. Salir de la calculadora
                 
        """))

while True :
    
    
    if menu == 1:
        suma1 = int(input("ingrese el primer numero de la operacion suma:"))
        suma2 = int(input("ingrese el segundo numero de la operacion :"))
        
        print ("El resultado  es:", suma1 + suma2)
        
        menu = int(input("""Ingrese un numero:
                 
                1. Sumar 
                2. Restar 
                3. Multiplicar 
                4. Dividir   
                0. Salir de la calculadora
                 
                """))
    
    if  menu == 2:
        resta1 = int(input("ingrese el primer numero de la operacion:"))
        resta2 = int(input("ingrese el segundo numero de la operacion :"))
        resta3 = int(input("ingrese el tercer numero de la operacion :"))
            
        print ("El resultado es:", resta1 - resta2 - resta3)
        
     
        menu = int(input("""Ingrese un numero:
                 
                1. Sumar 
                2. Restar 
                3. Multiplicar 
                4. Dividir   
                0. Salir de la calculadora
                 
                """))
    if menu == 3:
                
        mult1 = int(input("ingrese el primer numero de la operacion:"))
        mult2 = int(input("ingrese el segundo numero de la operacion :"))
        print ("El resultado es:", mult1 * mult2)
        
    
        menu = int(input("""Ingrese un numero:
                 
                1. Sumar 
                2. Restar 
                3. Multiplicar 
                4. Dividir   
                0. Salir de la calculadora
                 
                """))
    
    if menu == 4:
                    
        div1 = int(input("ingrese el primer numero de la operacion:"))
        div2 = int(input("ingrese el segundo numero de la operacion :"))

        if (div2 == 0):
            print("'Recuerde que el segundo numero debe ser diferente a CERO'")
                        
        else:
                    
            print ("El resultado es:", div1 / div2)
            
    
    menu = int(input("""Ingrese un numero:
                 
            1. Sumar 
            2. Restar 
            3. Multiplicar 
            4. Dividir   
            0. Salir de la calculadora
                 
            """))           

    if menu == 0:
                                  
        print ("Gracias por usar la calculadora")
        break
                        
