-- 13.Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT name FROM Scientists.Projects
ORDER BY hours
LIMIT 1 OFFSET 1;