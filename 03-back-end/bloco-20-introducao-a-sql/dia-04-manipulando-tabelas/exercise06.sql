-- 6.Exclua da tabela Movies o filme "WALL-E". P.S.: Lembrando que existe uma relação de Primary key-Foreign Key, portanto devemos excluir primeiro a referência da tabela BoxOffice, para depois excluir da tabela Movies.

USE Pixar;


DELETE FROM BoxOffice
WHERE movie_id = 11; -- este é o id do filme WALL-E

DELETE FROM Movies
WHERE title = 'WALL-E';