Esse é um projeto para o conteúdo sobre `RTL`.

### Antes de iniciar

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:

- `git branch` ou `git branch -a`

Verifique se as seguintes branchs apareceram:

`exercise-one`
`exercise-two`
`exercise-three`

- Cada branch dessas será um exercício.
- Mude para a branch `exercise-one` com o comando `git checkout exercise-one`. É nessa branch que você realizará a solução para o exercício 1, e assim por diante.

Observe o que deve ser feito nas instruções para cada exercício.

### COMEÇANDO OS EXERCÍCIOS

#### Exercício 1

Implemente os testes:

- Necessário um botão para adicionar a tarefa.
- Botão precisa conter o texto "Adicionar".
- Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.

Pode adicionar mais testes que achar relevantes para verificar a funcionalidade desse botão.

---

#### Exercício 2

Teste a aplicação. Atenção ao que o teste orienta:

- Use o array já disponibilizado no código para realizar os testes. Cada elemento do array será uma tarefa. Simule a adição de todas e depois verifique se elas estão aparecendo.
- Teste apenas o componente Item. Ao passar uma string para ele ela precisa aparecer na tela.

---

#### Exercício 3

Diferente dos outros, os testes já estão prontos, sendo necessário criar apenas as funcionalidades que eles testam.

- Cada task adicionada deverá ter um botão ao lado dela com o texto "Selecionar"
- Cada task adicionada deverá ter outro botão ao lado dela com o texto "Remover", esse botão deverá estar desabilitado
- Ao clicar no botão "Selecionar" de uma task, ela deverá habilitar o seu botão de "Remover"
- Ao clicar no botão "Remover" a task deverá ser removida da tela
- Observe bem como os testes estão escritos, todos devem passar quando terminar a funcionalidade.
