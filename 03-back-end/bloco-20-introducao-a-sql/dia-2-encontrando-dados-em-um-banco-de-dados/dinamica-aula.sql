-- 1 - todos os livros cadastrados na livraria
SELECT * FROM livraria.livros;

-- 2 - quantidade de livros cadastrados 
SELECT COUNT(*) FROM livraria.livros;
-- 3 - retornar todos os livros ordenados por nº de paginas de forma decrescente
SELECT 
    *
FROM
    livraria.livros
ORDER BY paginas DESC;
-- 4 - lista dos 3 livros mais vendidos
SELECT * FROM livraria.livros
ORDER BY vendas DESC
LIMIT 3;
-- 5 - retornar 3 livros ignorado os 2 primeiros resultados
SELECT * FROM livraria.livros
LIMIT 3 OFFSET 2;
-- (bônus) retornar somente os livros que contenham o número de páginas cadastrado.
SELECT * FROM livraria.livros
WHERE paginas != '';