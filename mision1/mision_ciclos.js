
//datos

let samsung = 0
let iphone = 0
let xiaomi = 0
let motorola = 0
let huawei = 0
let oppo = 0



samsung = parseInt(prompt(`Ingrese la cantidad de "samsung" que tiene: `))
iphone = parseInt(prompt(`Ingrese la cantidad de "iphone" que tiene: `))
xiaomi = parseInt(prompt(`Ingrese la cantidad de "xiaomi" que tiene: `))
motorola = parseInt((`Ingrese la cantidad de "motorola" que tiene: `))
huawei = parseInt(prompt(`Ingrese la cantidad de "huawei" que tiene: `))
oppo = parseInt(prompt(`Ingrese la cantidad de "oppo" que tiene: `))


marca = ""
vendidos = 0

precio1 = 100
precio2 = 200
precio3 = 300
precio4 = 400
precio5 = 500




do{

    marca  = parseInt(prompt(`Ingrese el codigo de la marca que vendio:

    salir = (0)
    samsung = (1)
    iphone = (2)
    xiaomi = (3)
    motorola = (4)
    huawei = (5)
    oppo = (6)
    `))


            vendidos = parseInt(prompt('ingrese la cantidad que vendio:'))

                switch (marca){


                case 1:

                console.log("cantidad de la marca en el inventario:",samsung, "con valor de 100")
                console.log("cantidad que vendio:",vendidos)
                console.log("los equipos disponibles:", samsung - vendidos)
                console.log("lo que se gano fue:", 100 * vendidos )
           
                break;

                case 2: 

                console.log("cantidad de la marca en el inventario:",iphone,"con valor de 200")
                console.log("cantidad que vendio:",vendidos)
                console.log("los equipos disponibles:",iphone - vendidos)
                console.log("lo que se gano fue:", 200 * vendidos )

                break;

                case 3: 

                console.log("cantidad de la marca en el inventario:",xiaomi, "con valor de 300")
                console.log("cantidad que vendio:",vendidos)
                console.log("los equipos disponibles:",xiaomi - vendidos)
                console.log("lo que se gano fue:", 300 * vendidos )

                break;

                case 4: 

                console.log("cantidad de la marca en el inventario:",motorola, "con valor 400")
                console.log("cantidad que vendio:",vendidos)
                console.log("los equipos disponibles:", motorola - vendidos)
                console.log("lo que se gano fue:", 400 * vendidos )

                break;

                case 5: 

                console.log("cantidad de la marca en el inventario:",huawei, "con valor 500")
                console.log("cantidad que vendio:",vendidos)
                console.log("los equipos disponibles:",huawei - vendidos)
                console.log("lo que se gano fue:", 500 * vendidos )

                break;

                case 6: 

                console.log("cantidad de la marca en el inventario:",oppo,"con vañor 600")
                console.log("cantidad que vendio:",vendidos)
                console.log("los equipos disponibles:",oppo - vendidos)
                console.log("lo que se gano fue:", 600 * vendidos )

                break;
        }
} while (marca != 0 )
   


