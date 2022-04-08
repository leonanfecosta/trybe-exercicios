### O que aprendi:

- Ler o estado de um componente e usá-lo para alterar o que exibimos no browser;

- Inicializar um componente, dando a ele um estado pré-definido;

- Atualizar o estado de um componente.

- Capturar eventos utilizando a sintaxe do ***React***

---

##### Para fixar

**1 -** Crie uma aplicação React com `npx create-react-app fancy-buttons` . Altere o componente `App.js` para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via `console.log()` . **Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!**

**2 -** Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via `console.log()` .

**3 -** Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!

**4 -** Garanta acesso ao objeto `this` na função que você declarou.

**5 -** Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.

🦜 **Dica:** Uma possibilidade é você definir três chaves, uma para cada botão!

**6 -** Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.

**7 -** Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

**8 -** Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.

**9 -** A cor atual do botão deve ser impressa num `console.log()` **de dentro** da função do evento que lida com o clique. Faça isso acontecer!

🦜 **Dica:** Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!


