const vetor = [1,2,3,4,5];
const vetor2 = [6,7,8];

const combinado = {...vetor,...vetor2};
console.log(combinado);

const clone = {...combinado};
console.log(clone)
