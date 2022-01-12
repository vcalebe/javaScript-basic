const result = fizzbuzz(15);
console.log(result);

function fizzbuzz(ent) {
    if (typeof ent !== 'number'){
        return 'Não é um numero';
    }

    if ((ent%3) != 0 && (ent%5) != 0) {
        return ent;
    }

    if ((ent%3) == 0 && (ent%5) == 0) {
        return 'Fizzbuzz';
    }else if ((ent%3) == 0){
        return 'Fizz'
    }else if ((ent%5) == 0){
        return 'Buzz'
    }
}