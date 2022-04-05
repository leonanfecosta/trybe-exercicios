/* eslint-disable no-undef */
/* eslint-disable max-len */
// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
describe('testa a função uppercase', () => {
  it('testa se a função coloca todas as letras em maiusculas', (done) => {
    uppercase('leonan', (str) => {
      try {
        expect(str).toBe('LEONAN');
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
