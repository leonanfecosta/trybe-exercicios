-- 1.Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.
USE PecasFornecedores;
SELECT * FROM Pecas
WHERE name LIKE 'GR%';