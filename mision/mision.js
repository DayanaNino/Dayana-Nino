//notas de los examenes

let primerP = parseFloat(prompt('ingrese su nota del primer parcial (0 - 5) '))

if (primerP < 0 || primerP > 5){
    alert('la nota no es valida')
} else {

        var segundoP = parseFloat(prompt('ingrese su nota del segundo parcial (0 - 5)')) 

    if (segundoP < 0 || segundoP > 5){
        alert('la nota no es valida')

    } else {
        var tercerP = parseFloat(prompt('ingrese su nota del tercer parcial (0 - 5)'))
        
        if (tercerP < 0 || tercerP > 5){
            alert('la nota no es valida')

        } else {
            
            var trabajo1 = parseFloat(prompt('ingrese la nota de su primer trabajo (0 - 5) '))

            if (trabajo1 < 0 || trabajo1 > 5){
            alert('la nota no es valida')

            }else {
                var trabajo2 = parseFloat(prompt('ingrese la nota de su segundo trabajo (0 - 5)'))
                
                if (trabajo2 < 0 || trabajo2 > 5){
                    alert('la nota no es valida')

                } else {
                    var examenF = parseFloat(prompt('ingrese la nota de su examen final (0 - 5)'))

                    if (examenF < 0 || examenF > 5){
                        alert('la nota no es valida')

                    }else{
                        var autoE = parseFloat(prompt('ingrese su nota de auto evaluacion (0 - 5)'))
                        
                        if (autoE < 0 || autoE > 5){
                            alert('la nota no es valida')
                        } else {

                            var coEva = parseFloat(prompt('ingrese la nota del estudiante (profesor) (1 - 5)'))

                            if ( coEva < 0 || coEva > 5){
                                alert('la nota no es valida')
                            }
                        }
                    }
                }
            }
    }
} 
}

// PROMEDIOS

promedioParciales = ((primerP + segundoP + tercerP) /3) * 0.55
    console.log('el promedio de sus parciales es', promedioParciales)

promedioTrabajos = ((trabajo1 + trabajo2) /2) * 0.15
    console.log('el promedio de sus trabajos es', promedioTrabajos)

promedioExamenF = examenF * 0.20
    console.log('el promedio de sus examen final es', promedioExamenF)

promedioAutEva = ((autoE + coEva) /2) * 0.10
    console.log('el promedio de su auto evaluacion y co evaluacion final es', promedioExamenF)


var total = promedioParciales + promedioTrabajos + promedioExamenF + promedioAutEva
console.log('su promedio final es ',total)


if (total >= 0 && total <= 1.9){
    console.log('su nivel es muy bajo, por lo tanto NO puede aprobar el curso')

    } else if (total >= 2.0 && total <= 2.9){
        console.log('su nivel es bajo, por lo tanto NO puede aprobar el curso')
    } else if (total >= 3.0 && total <= 3.9){
            console.log('su nivel es basico, por lo tanto APROBO el curso')
        }else if (total >= 4.0 && total <= 4.6){
                console.log('su nivel es alto, por lo tanto APROBO el curso')
            } else if (total >= 4.7 && total <= 5.0){
                    console.log('su promedio es superior, por lo tanto APROBO el curso');
                }
            
        