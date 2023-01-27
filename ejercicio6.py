"""Un comerciante desea aplicar un descuento a sus productos en funcion a sus precios de la siguiente manera:

	1. Si el precio es mayor a $100 el 10%
	2. Si el precio es mayor a $100 y menor a $200 el 20%
	3. Si el precio es mayor a $200 el 25%

Es su deber como desarrollador escribir un algoritmo que le permita al comerciante ingresar la cantidad de 
productos y el precio de cada uno. El algoritmo tambien debe imprimir en pantalla el calculo de los 
descuentos."""

#variables
rebaja = 0
precioFinal = 0

cant = int(input(   "Ingresa la cantidad de productos: "))


if cant != 0:
    
    for i in range(0, cant):
        
        precioUn = float(input("Ingresa el precio del producto:"))
        
        if(precioUn > 100):
            rebaja = 0.1
            
        if(precioUn > 100 and precioUn < 200):
            rebaja = 0.2
            
        if(precioUn > 200):
            rebaja = 0.25
            
        
        precioFinal = precioUn - (precioUn * rebaja)
    
    
    print("El descuento fue: ", rebaja*100,"%")
    print("El precio finhal:" , precioFinal)
  
else:
    print('La cantidad de productos no es valida')







