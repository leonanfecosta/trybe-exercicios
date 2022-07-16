-- 7. Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".

USE Pixar;
SELECT id FROM Movies
WHERE director = 'Andrew Staton';
-- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos (2, 9 e 13)

DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);
-- a chave 13 nao está atrelada a BoxOffice

DELETE FROM Movies
WHERE director = 'Andrew Staton';
