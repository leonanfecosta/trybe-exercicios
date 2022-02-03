let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maiorValor = 0;
let menorValor=1000;
let qtdNumerosImpares=0;

for (number of numbers) {
  console.log(number);
  sum = sum + number;

  if (number >= maiorValor) {
    maiorValor = number;
  }

  if (number <= menorValor) {
    menorValor = number;
  }

  if (number % 2 !== 0) {
      qtdNumerosImpares = qtdNumerosImpares + 1;
  } 
}
console.log("A soma do array é: ", sum);

let media = sum / numbers.length;

console.log("A média do array é: ", media);

if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}
console.log("O maior valor é: ", maiorValor);

console.log("O menor valor é: ", menorValor);

if(qtdNumerosImpares !== 0) {
console.log("A quantidade de numeros impáres encontrados é: ", qtdNumerosImpares);
} else {
    console.log("Nenhum valor impar encontrado")
}