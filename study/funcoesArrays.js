//Add elementos a um array
const numeros = [1,2,3,4];

//Inserir no inicio
numeros.unshift(9);
console.log(numeros);

//Inserir no meio
numeros.splice(2,0,'v');
console.log(numeros);

//Inserir no fim
numeros.push(32);
console.log(numeros);

//------------------------------------------------

//encontrar elementos em um array(primitivos)
const valores = [1,2,3];
//return 1
console.log(valores.indexOf(2));
//return -1
console.log(valores.indexOf(5));


//outra forma para verificar existencia
//return true
console.log(valores.includes(3));


//encontrar elementos (referencia)
const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'},
    {id:3, nome: 'c'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a' && marca.id === 1;
});

console.log(marca);
