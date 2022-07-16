-- 1. Insira os filmes da Pixar abaixo na tabela Movies:
-- Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
-- Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
-- Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
-- WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

USE Pixar;

INSERT INTO Movies(title, director, year, length_minutes)
	VALUES('Monstros SA', 'Peter Docter', 2001, 92),
	('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Peter Docter', 2008, 104);