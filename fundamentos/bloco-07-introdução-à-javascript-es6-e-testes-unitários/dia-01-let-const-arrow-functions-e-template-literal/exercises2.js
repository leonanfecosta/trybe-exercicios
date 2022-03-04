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
const maiorPalavra = (text) => {
  let wordArray = text.split(" ");
  let maxLenght = 0;
  let result = "";

  for (const word of wordArray) {
    if (word.length > maxLenght) {
      maxLenght = word.length;
      result = word;
    }
  }
  return result;
};

console.log(
  maiorPalavra("Antonio foi no banheiro e não sabemos o que aconteceu")
);

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

const stringDeterminada = "Tryber x aqui!";
const substituirX = (string) => stringDeterminada.replace("x", string);

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

array.sort((a, b) => {
  let x = a.toUpperCase();
  let y = b.toUpperCase();

  return x == y ? 0 : x > y ? 1 : -1;
});

const concatenar = (substituirX) => {
  let result = `${substituirX} Minhas cinco principais habilidades são:
${array} #goTrybe`;
  return result;
};

console.log(concatenar(substituirX("Leonan")));
