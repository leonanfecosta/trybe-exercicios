const readline = require('readline-sync');

const resultadoSorteio = (numero, reposta) => {
  if (numero !== reposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }

  return console.log('Parabéns, você acertou!');
};

const main = () => {
  const numero = Math.floor(Math.random() * 10);
  const reposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );
  resultadoSorteio(numero, reposta);

  const jogarNovamente = readline.question('Deseja jogar novamente? (s/n) ');

  if(jogarNovamente !== 's') {
    return console.log('Obrigado por jogar!');
  }

  main();
};

main();
