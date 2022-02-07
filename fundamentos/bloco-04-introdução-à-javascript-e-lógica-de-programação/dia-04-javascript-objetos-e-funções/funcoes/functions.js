/* 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
3. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
 */

function soma(a, b) {
  return a + b;
}
function subtracao(a, b) {
  return a - b;
}
function multiplicação(a, b) {
  return a * b;
}
function divisao(a, b) {
  return a / b;
}
function resto(a, b) {
  return a % b;
}

function maiorNumero(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + " é maior que " + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + " é maior que " + primeiroNum;
  } else {
    return "Os números são iguais";
  }
}

function isPositive(constante) {
  if (constante > 0) {
    return "O número " + constante + " é positivo";
  } else if (constante < 0) {
    return "O número " + constante + " é negativo";
  } else if (constante === 0) {
    return 'O número é 0'
  }
}
console.log(soma(5, 2));
console.log(subtracao(5, 2));
console.log(divisao(5, 2));
console.log(multiplicação(5, 2));
console.log(resto(5, 2));

console.log(maiorNumero(10, 20)); 
console.log(maiorNumero(2, -5)); 
console.log(maiorNumero(1, 1)); 

console.log(isPositive(2))
console.log(isPositive(-2))
console.log(isPositive(0))