### O que aprendi:

- Descrever, como pilar da `Programação Orientada a Objetos`, a `Herança`, que é a capacidade de herdar, para especializar, os atributos e métodos de uma classe;

- Definir, em `Programação Orientada a Objetos`, a `Interface` de uma classe;

- Como boa prática, utilizar `Herança` apenas para especializar classes;

- Como boa prática, utilizar `Composição` para compartilhar um mesmo código entre diferentes classes.

---

# Exercícios - agora, a prática

Vamos dar continuidade a modelagem do nosso software escolar desenvolvido no exercício do dia anterior. Para isso, iremos refatorar algumas partes do nosso sistema aplicando os novos conceitos de herança que aprendemos no dia de hoje e melhorando alguns aspectos da nossa implementação inicial.

`Importante`: Devido a uma restrição em transpilar arquivos `.ts` para `.js` em versões posteriores ao ES5, utilize o seguinte comando para executar a transpilação corretamente:

```bash
npx tsc -t es5 ./index.ts
```

`Recapitulando:` Nós desenvolvemos uma classe que representava a pessoa estudante da nossa escola, contendo os atributos matrícula, nome, quatro notas de prova e duas notas de trabalho. Além disso, nossa classe possuía dois métodos: um que calculava a soma das notas da pessoa estudante e um que calculava a média das notas da pessoa estudante.

`Para facilitar:` Visando facilitar o entendimento dos enunciados dos nossos exercícios, adotaremos a seguinte notação para dispor a modelagem das nossas classes:

```bash
1`Class`: Nome da classe, caso seja uma classe
2`Interface`: Nome da interface, caso seja uma interface
3`Extends`: Classe da qual herda (superclasse), caso exista
4`Implements`: Interfaces a qual implementa, caso exista
5`Attributes`: Atributos
6`Methods`: Métodos
7`Validations`: Validações que devem ser aplicadas aos atributos
```

🚀 **Exercício 1**: Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.

```bash
1`Class`: Person
2`Attributes`:
3    - name: nome da pessoa
4    - birthDate: data de nascimento da pessoa
5`Methods`:
6    - Getters/Setters
7    - constructor: deve receber como parâmetro nome e data de nascimento
8`Validations`:
9    - O nome deve ter no mínimo três caracteres
10    - A data de nascimento não pode ser uma data no futuro
11    - A pessoa não pode possuir mais de 120 anos
```

Para testar, crie pelo menos duas pessoas.

🚀 **Exercício 2**: Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa.

```bash
1`Class`: Student
2`Extends`: Person
3`Attributes`:
4    - enrollment: matrícula da pessoa estudante
5    - examsGrades: notas de provas
6    - worksGrades: notas de trabalhos
7`Methods`:
8    - Getters/Setters
9    - constructor: deve receber como parâmetro nome e data de nascimento e
10      preencher a matrícula automaticamente
11    - sumGrades: retorna a soma das notas da pessoa estudante
12    - sumAverageGrade: retorna a média das notas da pessoa estudante
13    - generateEnrollment: retorna uma string única gerada
14      como matrícula para a pessoa estudante
15`Validations`:
16    - A matrícula deve possuir no mínimo 16 caracteres
17    - A pessoa estudante deve possuir no máximo 4 notas de provas
18    - A pessoa estudante deve possuir no máximo 2 notas de trabalhos
```

Para testar, crie pelo menos cinco pessoas estudantes.

🚀 **Exercício 3**: Crie uma interface que representará uma pessoa funcionária.

```bash
1`Interface`: Employee
2`Attributes`:
3    - registration: número do registro
4    - salary: valor do salário
5    - admissionDate: data de admissão
6`Methods`:
7    - generateRegistration: retorna uma string única gerada como registro
```

🚀 **Exercício 4**: Crie uma classe cujos objetos representem uma disciplina lecionada na escola.

```bash
1`Class`: Subject
2`Attributes`:
3    - name: nome da disciplina
4`Methods`:
5    - Getters/Setters
6    - constructor: deve receber como parâmetro nome
7`Validations`:
8    - O nome tem que possuir no mínimo 3 caracteres
```

Para testar, crie as disciplinas Matemática, História, Filosofia.

🚀 **Exercício 5**: Crie uma classe cujos objetos representem uma pessoa professora.

```bash
1`Class`: Teacher
2`Extends`: Person
3`Implements`: Employee
4`Attributes`:
5    - subject: a disciplina lecionada pela pessoa professora
6`Methods`:
7    - Getters/Setters
8    - constructor: deve receber como parâmetro nome, data de nascimento, salário
9      e a disciplina
10`Validations`:
11    - O registro deve possuir no mínimo 16 caracteres
12    - O salário não pode ser negativo.
13    - A data de admissão não pode ser no futuro
```

Para testar, crie uma pessoa professora para cada disciplina criada no exercício anterior.
