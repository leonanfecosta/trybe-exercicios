// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

console.log(sum(4,58,9,2,3,7));