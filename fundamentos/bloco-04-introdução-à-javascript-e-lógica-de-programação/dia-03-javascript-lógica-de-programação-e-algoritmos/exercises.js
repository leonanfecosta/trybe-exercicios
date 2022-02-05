/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
 */

let number = 10;
let fatorial = number;

console.log("Vamos fazer o fatorial de : " + number);

for (let i = number - 1; i > 0; i -= 1) {
  fatorial = fatorial * i;
}
console.log(fatorial);

/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
 */

let word = "tryber";
let inverse = word.split("").reverse().join("");

console.log("O inverso da palavara", word, "é:", inverse);

//aqui o método split separa a palavra em caracteres, depois o método reverse inverte cada um e o join junta todas de novo

/* 3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

let array = ["java", "javascript", "python", "html", "css"];
let maiorPalavra = array[0];
let menorPalavra = array[0];
//Aqui definimos as variáveis contendo o primeiro elemento do array para poder realizar as comparações

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > maiorPalavra.length) {
    maiorPalavra = array[i];
  }
}

for (let j = 0; j < array.length; j += 1) {
  if (array[j].length < menorPalavra.length) {
    menorPalavra = array[j];
  }
}

console.log("A maior palavra é: ", maiorPalavra);
console.log("A menor palavra é: ", menorPalavra);

/* 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
 */

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
