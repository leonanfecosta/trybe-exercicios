-- 4. O título do filme "Ratatouille" está escrito de forma incorreta na tabela Movies, além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE.
USE Pixar;

UPDATE Movies
SET title= 'Ratatouille', year = 2007
WHERE title = 'ratatui';