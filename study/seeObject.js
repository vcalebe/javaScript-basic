const filme = {
    titulo : 'Spider-men',
    ano : 2021,
    diretor : 'Russo',
    personagem : 'Mj'
};

exibirProperties(filme);
function exibirProperties(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(obj[prop]);
        }
    }
}