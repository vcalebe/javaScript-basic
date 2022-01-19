//primeira opcao
let faixas = [
    {tooltip: 'ate R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'de 1000 ou mais', minimo: 1000, maximo: 99999}
];

//segunda opcao
function criaFaixa(tooltip,minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo 
    }
};

let faixas2 = [
    criaFaixa('ate R$700',0,700),
    criaFaixa('ate R$700',0,700),
    criaFaixa('ate R$700',0,700)
];



