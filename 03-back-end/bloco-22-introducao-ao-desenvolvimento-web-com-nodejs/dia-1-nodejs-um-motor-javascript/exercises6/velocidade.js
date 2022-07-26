const readline = require('readline-sync');

const calculaVelocidadeMedia = (distancia, tempo) => {
  return distancia / tempo;
}

const main = () => {
  const distancia = readline.questionFloat('Digite a distância percorrida (m): ');
  const tempo = readline.questionFloat('Digite o tempo gasto (s): ');
  const velocidadeMedia = calculaVelocidadeMedia(distancia, tempo);
  console.log(`A velocidade média foi de ${velocidadeMedia.toFixed(2)} m/s.`);
}

main();