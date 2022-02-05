/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
 */

let number = 10;
let fatorial = number;

console.log('Vamos fazer o fatorial de : ' + number);

for (let i = number - 1; i > 0; i--) {
    fatorial = fatorial*i;
}
console.log(fatorial);
