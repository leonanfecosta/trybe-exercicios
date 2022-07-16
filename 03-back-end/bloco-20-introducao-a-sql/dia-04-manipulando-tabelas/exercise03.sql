-- 3. O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por "Andrew Staton". Corrija esse dado utilizando o UPDATE.
SET SQL_SAFE_UPDATES = 0;

USE Pixar;

UPDATE Movies
SET director = 'Andrew Staton'
WHERE title =  'Procurando Nemo';