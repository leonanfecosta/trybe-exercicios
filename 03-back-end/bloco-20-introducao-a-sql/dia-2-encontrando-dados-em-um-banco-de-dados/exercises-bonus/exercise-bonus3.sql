-- 3.Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
SELECT DISTINCT provider, price FROM Provides
ORDER BY price DESC
LIMIT 4
OFFSET 2;