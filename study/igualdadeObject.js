function Endereco(rua,cidade,cep){
    this.rua =rua;
    this.cidade = cidade;
    this.cep = cep;
}

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');

function saoIguais(endereco1,endereco2){
    //compara se as prop sao iguais
    return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade
    && endereco1.cep === endereco2.cep;
}

function temEnderecosDeMemoriaIguais(endereco1,endereco2){
    //compara se a possicao em memoria sao iguais
    return endereco1 === endereco2;
}


console.log('endereco de memoria sao iguais ? '+temEnderecosDeMemoriaIguais(endereco1,endereco2));
console.log('propriedades do objct sao iguais ? '+saoIguais(endereco1,endereco2));