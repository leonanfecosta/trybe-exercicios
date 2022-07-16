-- 10. Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
USE Pixar;

SELECT id, length_minutes FROM Movies
WHERE length_minutes < 100;

DELETE FROM BoxOffice
WHERE movie_id IN (1, 6, 7, 8);


DELETE FROM Movies
WHERE length_minutes < 100;