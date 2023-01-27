#Haga la sucesion de Fibonacci

# datos
x = 0
y = 1

z = x + y

print("La sucesion es:")

#susecion

while z < 1000:
    
    z = x + y
    x = y
    y = z
    
    print(z)
    
    
    
    







