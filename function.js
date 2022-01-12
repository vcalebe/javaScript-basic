//function
corSite = "Azul";
function resetColor() {
    corSite = "";
    console.log(corSite);
}

console.log(corSite);
console.log(resetColor);


// c/ parametro
corSiteParam = 'Vermelho';
function resetColorParam(cor,tonalidade){
    corSiteParam = cor + ' ' +tonalidade;
    console.log(corSiteParam);
}
console.log(corSiteParam);
resetColorParam('roxo','escuro');


//sem return
function printName(){
    console.log('Victor');
}

printName();


// c/ retorno
function mult(valor,num){
    return valor*num;
}

console.log(mult(12,2));