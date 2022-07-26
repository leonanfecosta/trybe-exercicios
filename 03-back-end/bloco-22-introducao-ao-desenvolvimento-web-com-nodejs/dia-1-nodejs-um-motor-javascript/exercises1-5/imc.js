const readline = require('readline-sync');

// const altura = 1.92;
// const peso = 95;

const altura = readline.question('Qual a sua altura? ');
const peso = readline.questionFloat('Qual o seu peso? ');

const calculaImc = (peso, altura) => {
  const imc = peso / (altura * altura);

  switch (true) {
    case imc < 18.5:
      console.log('Situação: Abaixo do peso (magreza)');
      break;
    case imc >= 18.5 && imc < 24.9:
      console.log('Situação: Peso normal');
      break;
    case imc >= 25 && imc < 29.9:
      console.log('Situação: Acima do peso (sobrepeso)');
      break;
    case imc >= 30 && imc < 34.9:
      console.log('Situação: Obesidade grau I');
      break;
    case imc >= 35 && imc < 39.9:
      console.log('Situação: Obesidade grau II');
      break;
    case imc >= 40:
      console.log('Situação: Obesidade grau III');
      break;
    default:
      console.log('Situação: Não foi possível calcular o IMC');
  }

};

calculaImc(peso, altura);
