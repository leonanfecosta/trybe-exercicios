-- 3. Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
SELECT 
    peca, preco, fornecedor
FROM
    PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%N%';