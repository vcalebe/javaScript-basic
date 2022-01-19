function endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep,
    this.exibirEndereco = function(){
        console.log(`Rua ${this.rua},
Cidade ${this.cidade},
cep ${this.cep}`);
    }
};

const novoEndereco = new endereco('Flores Azul','Campinas','11052488');

novoEndereco.exibirEndereco();