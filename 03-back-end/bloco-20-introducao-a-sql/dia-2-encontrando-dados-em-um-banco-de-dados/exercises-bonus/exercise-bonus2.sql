-- 2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT piece, price FROM Provides
ORDER BY price DESC
LIMIT 5;