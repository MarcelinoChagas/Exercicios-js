function mediaBoa(nota){
    if(nota == 7){
        console.log('Passou por média ' + nota)
    }
    else if(nota > 7){
        console.log('Tirou onda e passou com nota boa')
    }
    else if(nota < 7){
        mediaRuim(nota)
    }
}

function mediaRuim(nota){
    if (nota > 4 && nota < 7){
        console.log('Da para recuperar CONFIA')
    }
    else{
        console.log('Reprovado Super Confia')
    }
}

mediaBoa(7)
mediaBoa(8)