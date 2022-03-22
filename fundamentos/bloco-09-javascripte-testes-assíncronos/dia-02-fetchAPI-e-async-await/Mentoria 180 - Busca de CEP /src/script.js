/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/*
  1 - Manipulação no DOM (Pegar o input);
  2 - Evento do Click;
  3 - Montar a requisição;
  4 - Uma função para imprimir na tela o resultado.
*/
const btn = document.querySelector('#btn');
const cepInput = document.querySelector('#cep');
//  Requisição feita com async/await
/* const getValue = async (event) => {
  event.preventDefault();
  try {
    const request = await fetch(
      `https://viacep.com.br/ws/${cepInput.value}/json/`
    );
    //JSON.parse();
    const data = await request.json();
    cepInput.value = "";
    document.querySelector("#bairro").innerText = data.bairro;
    document.querySelector(
      "#estado"
    ).innerText = `${data.localidade}/${data.uf}`;
    document.querySelector(
      "#rua"
    ).innerText = `${data.logradouro} - ${data.complemento}`;
  } catch (erro) {
    cepInput.value = "";
    alert("Valor Inválido!");
  }
}; */
//  Requisição feita com Promise
const getValue = (event) => {
  event.preventDefault();
  fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
    // Then está fazendo a função de await.
    .then((response) => response.json())
    .then((data) => {
      const endereco = {
        rua: `${data.logradouro} - ${data.complemento}`,
        bairro: data.bairro,
        estado: `${data.localidade}/${data.uf}`,
      };
      cepInput.value = '';
      return exibeResultado(endereco);
    })
    .catch((error) => {
      cepInput.value = '';
      alert('Valor Inválido!');
    });
};
/*  Função para lembrar desestruturação de objetos e imprimir
 os resultados na tela. Utilizada pela requisição via Promise. */
const exibeResultado = ({ rua, bairro, estado }) => {
  document.querySelector('#bairro').innerText = bairro;
  document.querySelector('#rua').innerText = rua;
  document.querySelector('#estado').innerText = estado;
};

btn.addEventListener('click', getValue);
