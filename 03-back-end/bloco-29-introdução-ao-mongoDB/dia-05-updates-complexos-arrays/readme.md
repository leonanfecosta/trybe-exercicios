### O que aprendi:

- Incorporar dados aos documentos através de `arrays`;

- Utilizar os operadores `$pop`, `$pull` e `$push`;

- Utilizar o operador `$addToSet`;

- Utilizar os operadores `$each`, `$slice` e `$sort`.

---

# Exercícios - agora, a prática

Para os exercícios você utilizará um *dataset* pequeno com alguns filmes. Para isso, conecte-se à sua instância e utilize o trecho de código abaixo para criar o banco de dados e inserir os documentos:

```js
1use cinema;
2db.movies.drop();
3db.movies.insertMany([
4  {
5    title: "Batman",
6    category: [
7      "action",
8      "adventure",
9    ],
10    imdbRating: 7.7,
11    budget: 35,
12  },
13  {
14    title: "Godzilla",
15    category: [
16      "action",
17      "adventure",
18      "sci-fi",
19    ],
20    imdbRating: 6.6,
21    budget: 1,
22  },
23  {
24    title: "Home Alone",
25    category: [
26      "family",
27      "comedy",
28    ],
29    imdbRating: 7.4,
30  },
31]);
```

---

> Para cada execução, utilize o método `find()` para conferir as alterações nos documentos.

O `MongoDB` possui diversas ferramentas, como `mongo`, `mongosh`, `Compass`, além de outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as *queries*. O importante é realizá-las.

🚀 **Exercício 1:** Adicione a categoria `"superhero"` ao filme `Batman`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![ex1](https://content-assets.betrybe.com/prod/ex1.png)

**Exercício 2:** Utilizando o modificador `$each`, adicione as categorias `"villain"` e `"comic-based"` ao filme `Batman`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![ex2](https://content-assets.betrybe.com/prod/ex2.png)

🚀 **Exercício 3:** Remova a categoria `"action"` do filme `Batman`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![ex3](https://content-assets.betrybe.com/prod/ex3.png)

🚀 **Exercício 4:** Remova o primeiro elemento do *array* `category` do filme `Batman`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![ex4](https://content-assets.betrybe.com/prod/ex4.png)

🚀 **Exercício 5:** Remova o último elemento do *array* `category` do filme `Batman`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![ex5](https://content-assets.betrybe.com/prod/ex5.png)

🚀 **Exercício 6:** Adicione o elemento `"action"` ao *array* `category` do filme `Batman`, garantindo que esse valor não se duplique.

Após a execução do método `.find().pretty()` o resultado do filme `Batman` será parecido com o dessa imagem:

![ex6](https://content-assets.betrybe.com/prod/ex6.png)

**Exercício 7:** Adicione a categoria `"90's"` aos filmes `Batman` e `Home Alone`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` e do filme `Home Alone` será parecido com o dessa imagem:

![ex7](https://content-assets.betrybe.com/prod/ex7.png)

**Exercício 8:** Crie um *array* de documentos chamado `cast` para o filme `Home Alone` com os seguintes dados:

Copiar

```js
1{
2  "actor": "Macaulay Culkin",
3  "character": "Kevin"
4},
5{
6  "actor": "Joe Pesci",
7  "character": "Harry"
8},
9{
10  "actor": "Daniel Stern"
11}
```

Após a execução do método `.find().pretty()`, o resultado do filme `Home Alone` será parecido com o dessa imagem:

![ex8](https://content-assets.betrybe.com/prod/ex8.png)

🚀 **Exercício 9:** Adicione o campo `character` com o valor `Marv` ao *array* de `cast` em que o campo `actor` seja igual a `Daniel Stern` no filme `Home Alone`.

**Dica**: [Leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$`.

Após a execução do método `.find().pretty()`, o resultado do filme `Home Alone` será parecido com o dessa imagem:

![ex9](https://content-assets.betrybe.com/prod/ex9.png)

🚀 **Exercício 10:** Crie um *array* de documentos chamado `cast` para o filme `Batman` com os seguintes dados:

Copiar

```js
1{
2  "character": "Batman"
3},
4{
5  "character": "Alfred"
6},
7{
8  "character": "Coringa"
9}
```

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![ex10](https://content-assets.betrybe.com/prod/ex10.png)

**Exercício 11:** Produza três *querys* para o filme `Batman`:

- Adicione o campo `actor`, que deve ser um *array* com o valor `Christian Bale`, ao *array* de `cast` em que o campo `character` seja igual a `Batman`;
- Adicione o campo `actor`, que deve ser um *array* com o valor `Michael Caine`, ao *array* de `cast` em que o campo `character` seja igual a `Alfred`;
- Adicione o campo `actor`, que deve ser um *array* com o valor `Heath Ledger`, ao *array* de `cast` em que o campo `character` seja igual a `Coringa`.

**Dica**: [Leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$`.

Após a execução do método `.find().pretty()` o resultado do filme `Batman` será parecido com o dessa imagem:

![ex11](https://content-assets.betrybe.com/prod/ex11.png)

🚀 **Exercício 12:** Adicione aos atores de `cast` do `character` `Batman` do filme `Batman` os valores `"Michael Keaton"`, `"Val Kilmer"` e `"George Clooney"`, e deixe o *array* em ordem alfabética.

**Dica**: [Leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$`.

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:

![ex12](https://content-assets.betrybe.com/prod/ex12.png)
