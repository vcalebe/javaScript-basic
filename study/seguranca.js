


function verificarEntrada(){
    let convidadosDeCris = ['victor','jesus','rafa','pedro'];
    let result = document.getElementById('resposta');
    let nome = document.getElementById('nome').value;

    if(convidadosDeCris.includes(nome)){
        result.innerText = 'Entra ai meu amigao';
    }else{
        result.innerText = 'Voce nao esta em nenhuma lista';
    }
}