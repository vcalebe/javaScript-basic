//Natureza dinâmica de objetos

const mouse = {
    cor : 'red',
    marca: 'Razer'
};

console.log(mouse);

//adicionando propiedades e metodos ao objeto
mouse.velocity = 5000;

//add metodos 
mouse.trocaDPI = function() {
    mouse.velocity = 300;
    console.log('Alterando DPI...',mouse.velocity);
}
mouse.trocaDPI();
console.log(mouse);

//deletando metodo e prop
delete mouse.trocaDPI;
delete mouse.velocity;
console.log(mouse);