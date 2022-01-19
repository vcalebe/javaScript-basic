//Construct Function cria um novo objeto no momento em que voce instancia,
//Muito semelhante da forma que é feita em Java

//Pascal Case
function Celular(marcaCelular,tamanhoTela,capacidadeBat){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBat = capacidadeBat,
    this.ligar = function(){
        console.log("Fazendo ligacão...");
    }
}

const celularTop = new Celular('Samsung','7.5p','500mh');

console.log(celularTop);
celularTop.ligar();