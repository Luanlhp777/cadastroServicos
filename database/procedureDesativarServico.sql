USE coguis_servicos;

DELIMITER $$

CREATE PROCEDURE sp_desativar_servico(
    IN p_id INT
)
BEGIN

    UPDATE servicos
    SET ativo = 0
    WHERE id = p_id;

    SELECT ROW_COUNT() AS linhasAfetadas;

END $$

DELIMITER ;

CALL sp_desativar_servico(8);

SELECT id, nome, ativo
FROM servicos
WHERE id = 8;