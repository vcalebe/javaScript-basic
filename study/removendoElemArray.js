//removendo elemento array
const numeros = [1,2,3,4,5,6];
console.log(numeros);

//remover fim
numeros.pop();
console.log(numeros.pop());
console.log(numeros);

//remover inicio
const remPrim = numeros.shift();
console.log(remPrim);
console.log(numeros);

//remover meio
const remMeio = numeros.splice(1,1);
console.log(remMeio);
console.log(numeros);




//ESVAZIANDO UM ARRAY

let valores = [1,2,3,4,5,6,7];

//Solucao 1
//valores = [];

//solucao 2
// valores.length = 0;
// console.log(valores);

//solucao 3
valores.splice(0,valores.length);
console.log(valores);

