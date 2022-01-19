function Postagem(titulo,mensegem,autor,){
    this.titulo = titulo,
    this.mensegem = mensegem,
    this.autor = autor
    this.vizualizacoes = 0,
    this.comentarios = [],
    this.aoVivo = false
};

let postagem1 = new Postagem('Palmeiras campeao Liberta',
'Palmeiras ganhou a libertadores com gols de Veiga e Deyverson',
'Mauro Betin');

console.log(postagem1)