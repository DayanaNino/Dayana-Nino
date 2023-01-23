/* En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. 
Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres 
primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala, Tecleo que pago 2 
créditos, el escript me dirá que puedo acceder a las salas de consola y juegos 2D.*/


let cantCre = parseInt(prompt('ingrese la cantidad de creditos que va a pagar (1 - 4)'))

if (cantCre < 0 || cantCre > 4){
    alert("cantidad no valida")
}

switch (cantCre){

    case 1:
        console.log("solo puede acceder a la sala de consolas");
        break;

    case 2:
        console.log("puede acceder a la sala de consolas y juegos 2D ");
        break;

    case 3:
        console.log("puede acceder a la sala de consolas, juegos 2D y juegos 3D);

    case 4:
        console.log("puede acceder a la sala de ")