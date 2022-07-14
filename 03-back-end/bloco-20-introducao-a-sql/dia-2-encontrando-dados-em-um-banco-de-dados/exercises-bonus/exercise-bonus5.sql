-- 5. Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT COUNT(provider) FROM Provides
WHERE piece = 1;