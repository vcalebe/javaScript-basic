//for-in

//exmp 1
const pessoa = {
    nome: 'Joana',
    idade: 20
};

for (let chave in pessoa){
    console.log(chave,pessoa);
}

//exmp 2
const cores = ['vermelho','azul','rosa'];

for (let indice in cores){
    console.log(indice,cores[indice]);
}

