/* 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */

const myFizzBuzz = require("./myFizzBuzz.js");

describe("testa a função myFizzbuzz", () => {
  it("verifica se o valor retornado é o esperado dado um numero", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
    expect(myFizzBuzz(3)).toBe("fizz");
    expect(myFizzBuzz(5)).toBe("buzz");
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('8')).toBe(false);

  });
});
