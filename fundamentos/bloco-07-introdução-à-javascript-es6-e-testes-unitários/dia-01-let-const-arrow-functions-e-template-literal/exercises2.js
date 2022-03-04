// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

/* const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1){
        result = result * index;
    }

    return result;
}
console.log(factorial(5)); */

//Recursiva
const factorial = (number) => (number > 1 ? number * factorial(number - 1) : 1);
console.log(factorial(5));


//2. Crie uma função que receba uma frase e retorne qual a maior palavra.
const maiorPalavra = text => {
    let wordArray = text.split(' ');
    let maxLenght = 0;
    let result = '';

    for (const word of wordArray){
        if (word.length > maxLenght){
            maxLenght = word.length;
            result = word
        }
    }
    return result;
}

console.log(maiorPalavra("Antonio foi no banheiro e não sabemos o que aconteceu"));

