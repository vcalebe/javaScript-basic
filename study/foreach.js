const numeros = [1,2,3,4,5,6];

//forOf
console.log("ForOf")
for (numero of numeros){
    console.log(numero);
}

//foreach
console.log("ForEach")
numeros.forEach(function(numero){
    console.log(numero);
});

//Ou
console.log("arrow");
numeros.forEach((numero) => console.log(numero));