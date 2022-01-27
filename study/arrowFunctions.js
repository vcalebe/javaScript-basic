//declarar metodos e corpos
const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
    {id:3, nome:'c'},
    {id:4, nome:'d'}
];

//function normal
const marca = marcas.find(function(marca){
    return marca.nome === 'b';
});

console.log(marca);

//arrow function
const marca2 = marcas.find(marca => marca.nome === 'c');

console.log(marca2);
