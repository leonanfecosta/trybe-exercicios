function verificaPalindrome(palavra) {
  let palavraReversa = palavra.split("").reverse().join("");
  if (palavra === palavraReversa) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maiorValor(valores) {
  let maiorIndice = 0;
  for (let index in valores) {
    if (valores[maiorIndice] < valores[index]) {
      maiorIndice = index;
    }
  }
  return maiorIndice;
}

console.log(maiorValor([5, 10, 3, 2, 40, 100]));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function menorValorIndice(valores) {
  let menorIndice = 0;
  for (let index in valores) {
    if (valores[menorIndice] > valores[index]) {
      menorIndice = index;
    }
  }
  return menorIndice;
}

console.log(menorValorIndice([5, 10, 3, 2, 40, 100]));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(nomes) {
  let maiorPalavra = nomes[0];
  for (let indice in nomes) {
    if (maiorPalavra.length < nomes[indice].length) {
      maiorPalavra = nomes[indice];
    }
  }
  return maiorPalavra;
}
console.log(maiorNome(["José", "Maria", "João", "Lucas", "Fernanda"]));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function somaNum(n) {
  let total = 0;
  for (let i = 0; i <= n; i += 1) {
    total = total + i;
  }
  return total;
}
console.log(somaNum(9));

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let result;
  
    for (let index = 0; index < inversoFimPalavra.length; index += 1) {
      if (inversoPalavra[index] !== inversoFimPalavra[index]) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
    
    return result;
  }
  
  console.log(verificaFimPalavra('trybe', 'be')); //true
  console.log(verificaFimPalavra('joaofernando', 'fernan')); //false