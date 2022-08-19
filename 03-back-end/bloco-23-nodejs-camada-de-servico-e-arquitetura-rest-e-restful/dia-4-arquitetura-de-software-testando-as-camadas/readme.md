### O que aprendi:

- Testar individualmente cada camada do modelo MSC;

- Testar API's RESTs;

- Aplicar testes unitários;

- Desenvolver API's e arquiteturas orientadas a testes;

---

### Instruções para realização dos exercícios

1️⃣ Realize a instalação das dependências



```bash
npm install
```

2️⃣ Instale os pacotes utilizados:



```bash
npm install body-parser express mysql2
```

3️⃣ Instale também os pacotes de desenvolvimento:



```bash
npm install -D mocha chai sinon
```

4️⃣ Adicione o script para rodar os testes no `package.json`, dentro de `"scripts"`:



```json
"test": "mocha tests --recursive --exit"
```

O exercício possui a seguinte estrutura de arquivos e diretórios:



```bash
└── controllers
│   └── movieController.js
└── models
│   └── connection.js
│   └── movieModel.js
└── services
│   └── movieService.js
└── tests
│   ├── controllers
│   │   └── movieController.test.js
│   ├── services
│   │   └── movieService.test.js
│   └── models
│       └── movieModel.test.js
└── index.js
    └── package.json
```

> Atenção: Os arquivos `movieController.test.js`, `movieService.test.js` e `movieModel.test.js` não estão criados. Crie-os e implemente os códigos a seguir.

5️⃣ Configure os seguintes arquivos conforme códigos já implementados:

> index.js



```javascript
const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', MovieController.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
```

> controllers/movieController.js



```javascript
const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .send('Dados inválidos');
   }

  res
    .status(201)
    .send('Filme criado com sucesso!');
};

module.exports = {
  create,
};
```

> models/connection.js



```javascript
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'senha_muito_segura',
  database: 'model_example'});

module.exports = connection;
```

> models/movieModel.js



```javascript
const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      'INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)',
      [title, directedBy, releaseYear],
    );

  return {
    id: result.insertId,
  };
};

module.exports = {
  create,
};
```

> services/movieService.js



```javascript
const MoviesModel = require('../models/movieModel');

const validateTitle = (title) => (title && typeof title === 'string');

const validateReleaseYear = (releaseYear) => (releaseYear && typeof releaseYear === 'number');

const validateDirectedBy = (directedBy) => (directedBy && typeof directedBy === 'string');

const isValid = (title, directedBy, releaseYear) => {
  const isValidTitle = validateTitle(title);
  const isValidReleaseYear = validateReleaseYear(releaseYear);
  const isValidDirectedBy = validateDirectedBy(directedBy);

  if (!isValidTitle || !isValidReleaseYear || !isValidDirectedBy) return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel
    .create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
};
```

> tests/controllers/movieController.test.js



```javascript
const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});
```

> tests/models/movieModel.test.js



```javascript
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});
```

> tests/services/movieService.test.js



```javascript
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});
```

---

6️⃣ Garanta que está tudo ok, rodando os testes:



```bash
npm test
```

7️⃣ Para subir a aplicação, é necessário ter o MySQL rodando em sua máquina (relembre esse processo no dia [21.1 - Introdução à SQL](https://app.betrybe.com/course/back-end/introducao-a-sql/banco-de-dados-sql/f6f10a97-533d-4476-879d-b45cdf5d1b75)). Feito isso, é possível executá-la:



```bash
node index.js
```

---

#### Proposta e requisitos

Nos exercícios vamos implementar todas as camadas para adicionar um endpoint que recebe o ID de um filme específico e, então, retorna os detalhes desse filme.

Esse endpoint terá os seguintes cenários:

- Quando é encontrado um filme com o `ID` passado pela pessoa usuária, deverá retornar um objeto com todas as propriedades do filme e o código http `200 - OK` no `status` da `response`.
- Quando não é encontrado nenhum filme com o `ID` passado pela pessoa usuária, deverá responder com código http `404 - Not Found` no status da response, com a mensagem "Filme não encontrado."

> 👀 **De olho na dica**: Lembre-se que durante a execução dos testes é importante isolar as dependências, por isso não se preocupe com a criação da tabela no banco. Foque no TDD (Test Driven Development).

🚀 **Exercício 1**: Seguindo o `TDD`, implemente a camada de `model` necessária para o end-point, aplicando os comportamentos para atender aos requisitos:

- Crie os testes da camada de `model`. Como essa camada é responsável por realizar as operações no BD, adicione as operações necessárias para que o endpoint funcione conforme esperado.
- Implemente os métodos para atender aos cenários descritos nos testes.
- Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar qualquer operação de leitura e escrita.

🚀 **Exercício 2**: Também seguindo o TDD, implemente a camada de `service` do endpoint, certifique-se de garantir que os cenários descritos nos requisitos serão atendidos.

- Crie os testes da camada de `service`. Lembre-se que essa camada é responsável pelas regras de negócio, e deverá fazer os tratamentos necessários com o input recebido do `controller` e com o output recebido do `model`.
- Implemente os métodos necessários para atender aos testes.
- Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar a camada das demais.

🚀 **Exercício 3**: Também seguindo o `TDD`, implemente a camada de `controller` do endpoint. Certifique-se de garantir que os cenários descritos nos requisitos serão atendidos.

- Crie os testes da camada de `controller`. Lembre-se que essa camada é responsável por toda a comunicação com a pessoa usuária, devendo tratar seu input e output. Outro ponto de atenção é que, diferente das outras camadas, os `controllers` são `middlewares` e será necessário criar asserções com os `stubs` para testar seus comportamentos.
- Implemente o código necessário para atender os cenários descritos nos testes.
- Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar a camada das demais.

🚀 **Exercício 4**: Faça os ajustes no `index.js` para finalizar o endpoint.
