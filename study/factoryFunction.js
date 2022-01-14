function criarCelular(marca,tamanhoTela,bateria,memoria){
    return {
        marca:marca,
        tamanhoTela:tamanhoTela,
        bateria:bateria,
        memoria:memoria,
        
        ligar : function(){
            console.log('Ligando celular...');
        }
    }
}

const celular = criarCelular('Xiome',7.5,'20mh','200gb');
console.log(celular);