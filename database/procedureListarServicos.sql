USE coguis_servicos;

DELIMITER $$
CREATE PROCEDURE sp_listar_servicos()
BEGIN
    SELECT
        id,
        nome,
        descricao,
        categoria,
        preco,
        ativo,
        criado_em,
        atualizado_em
    FROM servicos
    ORDER BY id;
END $$
DELIMITER ;

CALL sp_listar_servicos();