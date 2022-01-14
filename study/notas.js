//Exercicio media das notas

//0-59: F
//60-80: B
//81-100: A

const array = [100,100,100];

mediaNota(array);

function mediaNota(notas) {
    let nota = 0;

    for(valor in notas){
        //console.log(notas[valor]);
        nota += notas[valor];
    }

    media = nota/3;

    if(media <= 59){
        console.log(media + ' F');
    }else if (media <= 80 ) {
        console.log(media + ' B');
    }else if (media <= 100){
        console.log(media + ' A');
    }
}