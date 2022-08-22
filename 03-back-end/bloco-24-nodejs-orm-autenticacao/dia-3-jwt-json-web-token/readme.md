### O que aprendi:

- Entender o que há por dentro de um *token* de autenticação e autorização;

- Gerar *tokens* a partir de informações como login e senha;

- Autenticar pessoas usuárias utilizando o *token* JWT.

- Autorizar o acesso a rotas do Express, usando o *token* JWT.

---

### Agora, a prática

Antes de começar, crie um novo projeto chamado `hello-jwt` utilizando o comando `npm init @tryber/backend hello-jwt`, aceitando as opções padrão.

1. 🚀 Crie um *endpoint* `POST /login`.
   - O *endpoint* deve receber os seguintes dados no corpo da requisição:



```json
    {
      "username": "algumNomeDeUsuario",
      "password": "algumaSenha"
    }
```



```
- Caso `username` e `password` sejam válidos, retorne um _token_ que atenda às seguintes especificações:
  - Expira em uma hora;
  - Contém, no _payload_, o nome de usuário informado na _request_;
  - Contém, no _payload_, uma propriedade `admin`, com o valor `false`.
- Para retornar o _token_, utilize o seguinte formato no corpo da resposta:
```



```json
    {
      "token": "<JWT aqui>"
    }
```



```
- Para que `username` seja válido, seu valor precisa ser uma _string_ alfanumérica de, pelo menos, 5 caracteres.
- Para que `password` seja válido, seu valor precisa ser uma _string_ de, pelo menos, 5 caracteres.
```

2. 🚀 Altere o *endpoint* `POST /login`:
   - Caso `username` seja `admin` e `password` seja `s3nh4S3gur4???`, a chave `admin` no *payload* do *token* gerado deve ter o valor `true`.
3. 🚀 Crie o *endpoint* `/GET /users/me`:
   1. O *endpoint* só pode ser acessado por pessoas autenticadas.
   2. Para realizar a autenticação, a requisição deve conter o *header* `Authorization`, cujo valor deve ser um *token* válido.
   3. Caso o *token* não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:



```json
    {
      "error": {
        "message": "Token not found"
      }
    }
```



```
4. Caso aconteça um erro ao validar o _token_, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:
```



```json
    {
      "error": {
      "message": "<mensagem de erro da biblioteca>"
      }
    }
```



```
5. Caso o _token_ seja válido, retorne o status `200 OK` e, no corpo da resposta, o nome de usuário ao qual aquele _token_ pertence e o valor da propriedade `admin`, no seguinte formato:
```



```json
    {
      "username": "nome de usuário do token",
      "admin": true || false
    }
```



```
6. Utilize um _middleware_ exclusivo para a autenticação. Armazene-o no arquivo `middlewares/auth.js`.
```

4. 🚀 Crie o *endpoint* `/GET /top-secret`.
   - O *endpoint* só pode ser acessado por pessoas autenticadas.
   - Apenas *tokens* contendo, no *payload*, a propriedade `admin` com o valor `true` têm autorização para acessar esse *endpoint*.
   - Caso o *token* não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:



```json
    {
      "error": {
        "message": "Token not found"
      }
    }
```



```
- Caso aconteça um erro ao validar o _token_, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:
```



```json
    {
      "error": {
      "message": "<mensagem de erro da biblioteca>"
      }
    }
```



```
- Caso o _token_ seja válido, mas a propriedade `admin` do _payload_ não seja `true`, retorne o status `403 Forbidden` e o seguinte JSON:
```



```json
    {
      "error": {
        "message": "Restricted access"
      }
    }
```



```
- Caso o _token_ seja válido e o _payload_ contenha `admin` com o valor `true`, retorne o seguinte JSON:
```



```json
    {
      "secretInfo": "Peter Parker é o Homem-Arannha"
    }
```



```
- Para validar se a pessoa é admin, crie um novo _middleware_ no arquivo `middlewares/admin.js`.
```

---

### Bônus

1. 🚀 Crie o *endpoint* `POST /signup`.
   - O *endpoint* deve aceitar o seguinte JSON no corpo da requisição:



```json
    {
      "username": "MariaCecília_Souza92",
      "password": "%9!%e"c0c5w,q%%h9n3k"
    }
```

```json
- Para validar os campos, considere os mesmos critérios do endpoint `POST /login`.
- Caso `username` já exista, retorne o status `409 Conflict` e o seguinte JSON:
```

```json
    {
      "error": { "message": "user already exists" }
    }
```

```json
- Caso os campos sejam válidos, armazene os dados no arquivo `models/data/users.json`.
- Ao armazenar os dados recebidos, adicione a propriedade `admin`, que terá seu valor determinado da seguinte forma:
  - Obtenha um número aleatório de 1 a 100 com o seguinte trecho de código:  `Math.floor(Math.random() * 100)`;
  - Caso o número aleatório seja maior que `50`, `admin` deve ser `true`;
  - Caso o número aleatório seja menor ou igual a `50`, `admin` deve ser `false`.
- Após armazenar os novos dados, retorne um _token_ que expire em uma hora e contenha `username` e `admin` no _payload_. Utilize o seguinte formato na resposta:
```

```json
    {
      "token": "<token gerado aqui>"
    }
```

2. 🚀 Altere o *endpoint* de *login*:
   - Antes de gerar o *token*, verifique se o nome de usuário e a senha informados existem no arquivo `users.json`.
   - Não permita mais o login do usuário `admin` com a senha fixa.
   - Informe, na propriedade `admin` do *payload* do *token*, o mesmo valor da propriedade `admin` que está armazenado para aquela pessoa.

---
