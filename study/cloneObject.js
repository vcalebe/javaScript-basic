const cachorro = {
    raca : 'salsicha',
    idade : 14,
    nome : 'Frodo',
  
    tomarBanho: function(){
        console.log('Tomando banhinho');
    }
};

//clonando
const novoCachorro = Object.assign({},cachorro);
console.log(cachorro);
console.log(novoCachorro);

//clonando e add novo prop/func
const novoDog = Object.assign({
    pelo : "Amarelo",
},cachorro);

console.log(novoDog);

//forma mais rapida de se realizar 
const novoDogAzul = {...cachorro};
console.log(novoDogAzul);