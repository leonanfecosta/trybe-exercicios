### O que aprendi:

- Compreender o que é uma *query* SQL e quais são seus tipos de comando;
- Gerar valores com `SELECT`;
- Selecionar colunas individualmente com `SELECT`;
- Renomear e gerar colunas em uma consulta com `AS`;
- Concatenar colunas e valores com `CONCAT`;
- Remover dados duplicados em uma consulta com `DISTINCT`;
- Contar a quantidade de resultados em uma consulta com `COUNT`;
- Limitar a quantidade de resultados em uma consulta com `LIMIT`;
- Pular resultados em uma consulta com `OFFSET`;
- Ordenar os resultados de uma consulta com `ORDER BY`.

---

**Exercício 1**: Faça as tarefas de 1 a 15.

> Para realizar os exercícios do 1 ao 15, restaure o seguinte banco de dados:

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  code CHAR(4),
  name CHAR(50) NOT NULL,
  hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  scientist INT NOT NULL,
  project CHAR(4) NOT NULL,
  PRIMARY KEY (scientist, project),
  FOREIGN KEY (scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (project) REFERENCES Projects (code)
);

INSERT INTO Scientists(SSN,name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (code, name, hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (scientist, project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

> Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).

1. Escreva uma *query* para exibir a string "This is SQL Exercise, Practice and Solution".
2. Escreva uma *query* para exibir três números em três colunas.
3. Escreva uma *query* para exibir a soma dos números 10 e 15.
4. Escreva uma *query* para exibir o resultado de uma expressão aritmética qualquer.
5. Escreva uma *query* para exibir todas as informações de todos os cientistas.
6. Escreva uma *query* para exibir o nome como "nome_do_projeto" e as horas como "tempo_de_trabalho" de cada projeto.
7. Escreva uma *query* para exibir o nome dos cientistas em ordem alfabética.
8. Escreva uma *query* para exibir o nome dos projetos em ordem alfabética descendente.
9. Escreva uma *query* que exiba a string "O projeto `name` precisou de `hours` horas para ser concluído." para cada projeto.
10. Escreva uma *query* para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
11. Escreva uma *query* para exibir o código de todos os projetos da tabela `AssignedTo` sem que haja repetições.
12. Escreva uma *query* para exibir o nome do projeto com maior quantidade de horas.
13. Escreva uma *query* para exibir o nome do segundo projeto com menor quantidade de horas.
14. Escreva uma *query* para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
15. Escreva uma *query* que exiba a string "Existem `Number` cientistas na tabela Scientists.", em que `Number` se refira a quantidade de cientistas.

**Exercício 2**: Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:

```sql
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  code INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Providers (
  code VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Provides (
  piece INTEGER,
  FOREIGN KEY (piece) REFERENCES Pieces (code),
  provider VARCHAR(40),
  FOREIGN KEY (provider) REFERENCES Providers (code),
  price INTEGER NOT NULL,
  PRIMARY KEY (piece , provider)
);

INSERT INTO Providers(code, name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(code, name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(piece, provider, price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

> Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).

1. Escreva uma *query* para exibir a peça e o preço de tudo que é provido pela empresa `RBT`.
2. Escreve uma *query* para exibir todas as informações das cinco peças com os maiores preços.
3. Escreva uma *query* para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
4. Escreva uma *query* para exibir todas as informações das peças que são providas pela empresa `HAL`. Ordene o resultado pelos preços das peças de forma decrescente.
5. Escreva uma *query* para exibir por quantas empresas a peça `1` é provida.
