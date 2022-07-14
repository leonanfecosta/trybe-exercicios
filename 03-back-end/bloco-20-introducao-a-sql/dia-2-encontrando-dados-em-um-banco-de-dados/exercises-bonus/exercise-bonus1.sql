-- 1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
SELECT piece, price FROM Provides
WHERE provider = 'RBT';
