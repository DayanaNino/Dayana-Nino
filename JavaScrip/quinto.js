let articulo
let precio

for ( let i = 0; i < 4 ; i++){
    art = prompt ('ingrese el nombre de su articulo')
    precio = parseFloat (prompt('precio del articulo'))
    fpago = parseInt(prompt('ingrese el metodo de pago: contado-1 , credito-2'))

        console.log('nombre del articulo', art)
        console.log('precio del articulo', precio)

    if ( fpago == 1){
        fpago = (precio * 0.9)

        console.log("el precio con el descuento es:",fpago)
        
    } else{
        fpago = (precio * 0.8)
        console.log("el precio con descuento es:", fpago)

    }
}
















let primero = prompt ('ingrese el nombre de su primer articulo')
let segundo = prompt (' ingrese el nombre de su segundo articulo')
let tercero = prompt (' ingrese el nombre de su tercer articulo')
let cuarto = prompt (' ingrese el nombre de su curto articulo')

















